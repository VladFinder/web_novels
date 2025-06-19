import os
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from dotenv import load_dotenv

load_dotenv()

# Load 256-bit (32-byte) key
key_b64 = os.getenv("AES_SECRET_KEY")
if not key_b64:
    raise ValueError("Missing AES_SECRET_KEY in .env")

KEY = base64.b64decode(key_b64)
if len(KEY) != 32:
    raise ValueError("AES key must be 32 bytes")

# Fixed IV — 16 bytes exactly
FIXED_IV = b"ThisIs16ByteIV!!"

def encrypt_value(value: str) -> str:
    cipher = AES.new(KEY, AES.MODE_CBC, FIXED_IV)
    padded = pad(str(value).encode(), AES.block_size)
    encrypted = cipher.encrypt(padded)
    return base64.b64encode(encrypted).decode()

def decrypt_value(encrypted_base64: str) -> str:
    encrypted = base64.b64decode(encrypted_base64)
    cipher = AES.new(KEY, AES.MODE_CBC, FIXED_IV)
    decrypted = unpad(cipher.decrypt(encrypted), AES.block_size)
    return decrypted.decode()
