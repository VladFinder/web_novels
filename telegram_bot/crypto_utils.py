import base64
import os

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from dotenv import load_dotenv


load_dotenv()  # load values from .env

# Get key from environment and decode it
key_b64 = os.getenv("AES_SECRET_KEY")
if not key_b64:
    raise ValueError("AES_SECRET_KEY is missing from .env")

KEY = base64.b64decode(key_b64)  # 32 bytes after decoding base64


def encrypt_value(value):
    iv = os.urandom(16)
    cipher = AES.new(KEY, AES.MODE_CBC, iv)
    padded = pad(str(value).encode(), AES.block_size)
    encrypted = cipher.encrypt(padded)
    result = base64.b64encode(iv + encrypted).decode()
    return result

def decrypt_value(encrypted_base64):
    try:
        raw_data = base64.b64decode(encrypted_base64)
        iv = raw_data[:16]
        encrypted = raw_data[16:]
        cipher = AES.new(KEY, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(encrypted), AES.block_size)
        return decrypted.decode()
    except Exception as e:
        print(f"Error decrypting: {e}")
        return None