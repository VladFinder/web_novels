import base64
import os

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from dotenv import load_dotenv

load_dotenv()

# Load and validate key
key_b64 = os.getenv("AES_SECRET_KEY")
if not key_b64:
    raise ValueError("Missing AES_SECRET_KEY in .env")

KEY = base64.b64decode(key_b64)
if len(KEY) != 32:
    raise ValueError("AES key must be 32 bytes")

# Load and validate fixed IV
iv_b64 = os.getenv("FIXED_IV")
if not iv_b64:
    raise ValueError("Missing FIXED_IV in .env")

FIXED_IV = base64.b64decode(iv_b64)
if len(FIXED_IV) != 16:
    raise ValueError("AES IV must be 16 bytes")

def encrypt_value(value: str) -> str:
    """Шифрует string в AES-CBC и возвращает base64-encoded string."""
    if value is None:
        raise ValueError("Cannot encrypt None value")
    cipher = AES.new(KEY, AES.MODE_CBC, FIXED_IV)
    padded = pad(str(value).encode(), AES.block_size)
    encrypted = cipher.encrypt(padded)
    return base64.b64encode(encrypted).decode()

def decrypt_value(encrypted_base64: str) -> str:
    """Дешифрует base64-encoded AES-CBC зашифрованную string."""
    encrypted = base64.b64decode(encrypted_base64)
    cipher = AES.new(KEY, AES.MODE_CBC, FIXED_IV)
    decrypted = unpad(cipher.decrypt(encrypted), AES.block_size)
    return decrypted.decode()
