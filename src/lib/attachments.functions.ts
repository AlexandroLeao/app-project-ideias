import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const attachmentSchema = z.object({
  token: z.string().regex(/^[a-f0-9]{64}$/),
  name: z.string().trim().min(1).max(255),
  type: z.enum(["image/png", "image/jpeg", "application/pdf"]),
  size: z.number().int().min(1).max(10 * 1024 * 1024),
});

const EXTENSIONS: Record<string, string> = { "image/png": "png", "image/jpeg": "jfif", "application/pdf": "pdf" };

// A random 256-bit capability protects each private object without adding a login flow.
export const prepareAttachmentUpload = createServerFn({ method: "POST" })
  .inputValidator((data) => attachmentSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const path = `${data.token}/file.${data.type === "image/png" ? "png" : "pdf"}`;
    const { data: upload, error } = await supabaseAdmin.storage.from("idea-attachments").createSignedUploadUrl(path);
    if (error || !upload) throw new Error("Não foi possível preparar o anexo.");
    return { path, signedUrl: upload.signedUrl };
  });

export const openAttachment = createServerFn({ method: "POST" })
  .inputValidator((data) => attachmentSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const bucket = supabaseAdmin.storage.from("idea-attachments");
    const path = `${data.token}/file.${data.type === "image/png" ? "png" : "pdf"}`;
    const { data: file, error } = await bucket.download(path);
    if (error || !file || file.size !== data.size || file.size > 10 * 1024 * 1024) throw new Error("Anexo indisponível.");
    const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
    const valid = data.type === "image/png"
      ? [137, 80, 78, 71, 13, 10, 26, 10].every((byte, index) => bytes[index] === byte)
      : [37, 80, 68, 70, 45].every((byte, index) => bytes[index] === byte);
    if (!valid) throw new Error("Arquivo inválido. Escolha um PNG ou PDF.");
    const { data: link, error: linkError } = await bucket.createSignedUrl(path, 300);
    if (linkError || !link) throw new Error("Não foi possível abrir o anexo.");
    return link.signedUrl;
  });