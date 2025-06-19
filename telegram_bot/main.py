import pymysql

from telegram import Update
import telegram
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

from crypto_utils import encrypt_value, decrypt_value
from db import save_or_verify_user
from db import get_telegram_id_by_username

BOT_TOKEN = "8162387740:AAEKz-ctmyIztzE6NOUketS_Nh2QNb48Xp8"  # replace with your actual token
BOT_USERNAME = "@iki_dev2_bot"


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"✅ Авторизация пользователя...")

    user = update.effective_user
    user_data = {
        'id': user.id,
        'username': user.username,
    }

    is_authorized = save_or_verify_user(user_data)

    encrypted_id = encrypt_value(user.id)
    encrypted_username = encrypt_value(user.username)
    await update.message.reply_text(f"Encrypted id: " + encrypted_id)
    await update.message.reply_text(f"Decrypted: " + decrypt_value(encrypted_id))
    await update.message.reply_text(f"Encrypted username: " + encrypted_username)
    await update.message.reply_text(f"Decrypted: " + decrypt_value(encrypted_username))

    if is_authorized:
        output = get_telegram_id_by_username(encrypt_value(user.username))
        await update.message.reply_text(f"✅ {user.username}, Вы авторизованы.")
    else:
        await update.message.reply_text("⚠️ Вы не авторизованы. Приносим извинения за неудобства.")



def main():
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()


if __name__ == "__main__":
    print("file: " + telegram.__file__)
    print("version: " + telegram.__version__)
    print("PyMySQL version: " + pymysql.__version__)
    main()
