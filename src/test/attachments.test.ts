import { describe, expect, it } from "vitest";
import { MAX_ATTACHMENT_SIZE, openAttachment, validateAttachment } from "@/lib/attachments";

// jsdom's Blob lacks arrayBuffer(); browsers provide it, so emulate it with FileReader.
if (!Blob.prototype.arrayBuffer)
  Blob.prototype.arrayBuffer = function (this: Blob) {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(this);
    });
  };

const PNG = [137, 80, 78, 71, 13, 10, 26, 10];
const JPG = [255, 216, 255, 224];
const PDF = [37, 80, 68, 70, 45, 49];
const file = (name: string, head: number[], size = 100) => {
  const bytes = new Uint8Array(size);
  bytes.set(head.slice(0, size));
  return new File([bytes], name);
};

describe("validação de anexos", () => {
  it("aceita PNG, JFIF e PDF com assinatura real", async () => {
    await expect(validateAttachment(file("a.png", PNG))).resolves.toBe("image/png");
    await expect(validateAttachment(file("a.JFIF", JPG))).resolves.toBe("image/jpeg");
    await expect(validateAttachment(file("a.pdf", PDF))).resolves.toBe("application/pdf");
  });

  it("recusa extensão que não bate com o conteúdo", async () => {
    await expect(validateAttachment(file("a.png", PDF))).rejects.toThrow("Formato inválido");
    await expect(validateAttachment(file("a.pdf", PNG))).rejects.toThrow("Formato inválido");
  });

  it("recusa extensões não permitidas", async () => {
    await expect(validateAttachment(file("a.jpg", JPG))).rejects.toThrow("Formato inválido");
    await expect(validateAttachment(file("a.gif", PNG))).rejects.toThrow("Formato inválido");
  });

  it("aplica o limite de 10 MB e recusa arquivo vazio", async () => {
    expect(MAX_ATTACHMENT_SIZE).toBe(10 * 1024 * 1024);
    await expect(validateAttachment(file("a.png", PNG, MAX_ATTACHMENT_SIZE))).resolves.toBe(
      "image/png",
    );
    await expect(validateAttachment(file("a.png", PNG, MAX_ATTACHMENT_SIZE + 1))).rejects.toThrow(
      "até 10 MB",
    );
    await expect(validateAttachment(new File([], "a.png"))).rejects.toThrow("até 10 MB");
  });

  it("limita o nome a 255 caracteres", async () => {
    await expect(validateAttachment(file(`${"a".repeat(251)}.png`, PNG))).resolves.toBe(
      "image/png",
    );
    await expect(validateAttachment(file(`${"a".repeat(252)}.png`, PNG))).rejects.toThrow(
      "255 caracteres",
    );
  });

  it("não abre anexo com token inválido, sem acessar a rede", async () => {
    const data = { token: "abc", name: "a.png", type: "image/png" as const, size: 1 };
    await expect(openAttachment({ data })).rejects.toThrow("Anexo indisponível.");
  });
});
