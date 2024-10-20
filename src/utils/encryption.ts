import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const ALGORITHM = "aes-256-gcm";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!; // Must be 32 bytes (256 bits)
const IV_LENGTH = 12;

export function encrypt(text: string): string {
  try {
    // Generate a random initialization vector
    const iv = randomBytes(IV_LENGTH);

    // Create cipher
    const cipher = createCipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY, "hex"),
      iv,
    );

    // Encrypt the text
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    // Get auth tag
    const authTag = cipher.getAuthTag();

    // Combine IV, encrypted text, and auth tag
    return `${iv.toString("hex")}:${encrypted}:${authTag.toString("hex")}`;
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Failed to encrypt token");
  }
}

export function decrypt(encryptedData: string): string {
  try {
    // Split the encrypted data into components
    const [ivHex, encryptedText, authTagHex] = encryptedData.split(":");

    // Convert hex strings back to buffers
    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");

    // Create decipher
    const decipher = createDecipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY, "hex"),
      iv,
    );
    decipher.setAuthTag(authTag);

    // Decrypt the text
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Failed to decrypt token");
  }
}
