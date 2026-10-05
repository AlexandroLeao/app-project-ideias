import { prepareAttachmentUpload, openAttachment } from "./attachments.functions";

export type Attachment = { token: string; name: string; type: "image/png" | "application/pdf"; size: number };
export const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;

export async function validateAttachment(file: File): Promise<Attachment["type"]> {
  if (file.size === 0 || file.size > MAX_ATTACHMENT_SIZE) throw new Error("Escolha um arquivo de até 10 MB.");
  if (file.name.length > 255) throw new Error("O nome do arquivo deve ter até 255 caracteres.");
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (/\.png$/i.test(file.name) && [137, 80, 78, 71, 13, 10, 26, 10].every((b, i) => bytes[i] === b)) return "image/png";
  if (/\.pdf$/i.test(file.name) && [37, 80, 68, 70, 45].every((b, i) => bytes[i] === b)) return "application/pdf";
  throw new Error("Formato inválido. Escolha um PNG ou PDF.");
}

export async function uploadAttachment(file: File): Promise<Attachment> {
  const type = await validateAttachment(file);
  const token = Array.from(crypto.getRandomValues(new Uint8Array(32)), (n) => n.toString(16).padStart(2, "0")).join("");
  const attachment: Attachment = { token, name: file.name, type, size: file.size };
  const upload = await prepareAttachmentUpload({ data: attachment });
  const response = await fetch(upload.signedUrl, { method: "PUT", headers: { "Content-Type": type }, body: file });
  if (!response.ok) throw new Error("Não foi possível enviar o arquivo. Tente novamente.");
  await openAttachment({ data: attachment });
  return attachment;
}