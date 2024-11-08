import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

export const encrypt = (data: string, key: string): string => {
  const algorithm = "AES-GCM";
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};

export const decrypt = (data: string, key: string): string => {
  const [iv, encrypted] = data.split(":");
  const decipher = createDecipheriv("AES-GCM", key, Buffer.from(iv, "hex"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encrypted, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString();
};

export const generateKey = () => randomBytes(32).toString("hex");

