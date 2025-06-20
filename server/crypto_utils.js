const crypto = require('crypto');
require('dotenv').config();

const key = Buffer.from(process.env.AES_SECRET_KEY, 'base64'); // 32 байта
const fixedIv = Buffer.from(process.env.FIXED_IV, 'base64');   // 16 байт

if (key.length !== 32) throw new Error('AES_SECRET_KEY must be 32 bytes (base64-encoded)');
if (fixedIv.length !== 16) throw new Error('FIXED_IV must be 16 bytes (base64-encoded)');

function encryptValue(value) {
    if (value == null) throw new Error('Cannot encrypt null or undefined');
    const cipher = crypto.createCipheriv('aes-256-cbc', key, fixedIv);
    let encrypted = cipher.update(pad(value.toString()));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('base64');
}

function decryptValue(encryptedBase64) {
    const encrypted = Buffer.from(encryptedBase64, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, fixedIv);
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return unpad(decrypted).toString();
}

// PKCS7 padding to match Python's `Crypto.Util.Padding.pad/unpad`
function pad(bufferStr) {
    const buffer = Buffer.from(bufferStr, 'utf8');
    const blockSize = 16;
    const padding = blockSize - (buffer.length % blockSize);
    const paddingBuffer = Buffer.alloc(padding, padding);
    return Buffer.concat([buffer, paddingBuffer]);
}

function unpad(buffer) {
    const padding = buffer[buffer.length - 1];
    return buffer.slice(0, buffer.length - padding);
}

module.exports = {
    encryptValue,
    decryptValue
};
