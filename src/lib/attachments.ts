import { createClient } from "@supabase/supabase-js";

export type Attachment = {
  token: string;
  name: string;
  type: "image/png" | "image/jpeg" | "application/pdf";
  size: number;
};
export const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const BUCKET = "idea-attachments";
const EXTENSIONS: Record<Attachment["type"], string> = {
  "image/png": "png",
  "image/jpeg": "jfif",
  "application/pdf": "pdf",
};

function matchesSignature(bytes: Uint8Array, type: Attachment["type"]) {
  const sig =
    type === "image/png"
      ? [137, 80, 78, 71, 13, 10, 26, 10]
      : type === "image/jpeg"
        ? [255, 216, 255]
        : [37, 80, 68, 70, 45];
  return sig.every((b, i) => bytes[i] === b);
}

// Each request carries the object's 256-bit token; storage policies only expose the matching object, so nothing can be listed.
function storageFor(token: string) {
  const url = import.meta.env["VITE_SUPABASE_URL"] as string;
  const key = import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] as string;
  if (!url || !key) throw new Error("Envio de arquivos não configurado.");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, storageKey: "lucida-attachments" },
    global: { headers: { "x-attachment-token": token } },
  }).storage.from(BUCKET);
}

const pathOf = (a: Attachment) => `${a.token}/file.${EXTENSIONS[a.type]}`;

export async function validateAttachment(file: File): Promise<Attachment["type"]> {
  if (file.size === 0 || file.size > MAX_ATTACHMENT_SIZE)
    throw new Error("Escolha um arquivo de até 10 MB.");
  if (file.name.length > 255) throw new Error("O nome do arquivo deve ter até 255 caracteres.");
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (/\.png$/i.test(file.name) && matchesSignature(bytes, "image/png")) return "image/png";
  if (/\.jfif$/i.test(file.name) && matchesSignature(bytes, "image/jpeg")) return "image/jpeg";
  if (/\.pdf$/i.test(file.name) && matchesSignature(bytes, "application/pdf"))
    return "application/pdf";
  throw new Error("Formato inválido. Escolha um PNG, JFIF ou PDF.");
}

export async function uploadAttachment(file: File): Promise<Attachment> {
  const type = await validateAttachment(file);
  const token = Array.from(crypto.getRandomValues(new Uint8Array(32)), (n) =>
    n.toString(16).padStart(2, "0"),
  ).join("");
  const attachment: Attachment = { token, name: file.name, type, size: file.size };
  const { error } = await storageFor(token).upload(pathOf(attachment), file, {
    contentType: type,
    upsert: false,
  });
  if (error) throw new Error("Não foi possível enviar o arquivo. Tente novamente.");
  return attachment;
}

export async function openAttachment({ data }: { data: Attachment }): Promise<string> {
  if (!/^[a-f0-9]{64}$/.test(data.token) || !EXTENSIONS[data.type])
    throw new Error("Anexo indisponível.");
  const { data: blob, error } = await storageFor(data.token).download(pathOf(data));
  if (error || !blob || blob.size !== data.size || blob.size > MAX_ATTACHMENT_SIZE)
    throw new Error("Anexo indisponível.");
  if (!matchesSignature(new Uint8Array(await blob.slice(0, 8).arrayBuffer()), data.type))
    throw new Error("Arquivo inválido. Escolha um PNG, JFIF ou PDF.");
  return URL.createObjectURL(new Blob([blob], { type: data.type }));
}
