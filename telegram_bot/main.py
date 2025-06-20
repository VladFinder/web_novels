import os

import requests
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

from crypto_utils import encrypt_value, decrypt_value
from db import save_or_verify_user, get_telegram_id_by_username

load_dotenv()
BOT_TOKEN = os.getenv("BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("✅ Авторизация пользователя...")

    user = update.effective_user
    username = user.username or "unknown"

    user_data = {
        'id': user.id,
        'username': username,
    }

    is_authorized = save_or_verify_user(user_data)

    encrypted_id = encrypt_value(user.id)
    encrypted_username = encrypt_value(username)

    await update.message.reply_text(f"Encrypted ID: {encrypted_id}")
    await update.message.reply_text(f"Decrypted ID: {decrypt_value(encrypted_id)}")
    await update.message.reply_text(f"Encrypted Username: {encrypted_username}")
    await update.message.reply_text(f"Decrypted Username: {decrypt_value(encrypted_username)}")

    if is_authorized:
        decrypted_id_from_db = get_telegram_id_by_username(username)
        await update.message.reply_text(f"✅ {username}, вы авторизованы. Ваш id: {decrypted_id_from_db}")
        try:
                response = requests.post(os.getenv("VALIDATE_USER_API"), json={"decrypted_tg_id": decrypt_value(encrypted_username)})
                response.raise_for_status()
                data = response.json()
                await update.message.reply_text(data)
        except Exception as e:
                await update.message.reply_text(f"Ошибка запроса: {e}")

    else:
        await update.message.reply_text("⚠️ Вы не авторизованы. Приносим извинения за неудобства.")



def main():
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

if __name__ == "__main__":
    main()
