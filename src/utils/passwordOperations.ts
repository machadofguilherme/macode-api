import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const options = {
    algorithm: "aes-256-cbc",
    key: Buffer.from(randomBytes(32)),
    iv: randomBytes(16),
};

export const generatePassword = (password: string) => {
    const cipher = createCipheriv(options.algorithm, options.key, options.iv);
    let encrypted = cipher.update(password);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString("hex");
};

export const decryptPassword = (hash: string) => {
    const decipher = createDecipheriv(
        options.algorithm,
        options.key,
        Buffer.from(options.iv)
    );

    const decrpyted = Buffer.concat([
        decipher.update(Buffer.from(hash, "hex")),
        decipher.final(),
    ]);
    return decrpyted.toString();
};
