import os

import pymysql
import logging

from dotenv import load_dotenv

from crypto_utils import encrypt_value

# Setup logging — write debug info to console
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s: %(message)s')

load_dotenv()

DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

def get_connection():
    logging.debug("Creating DB connection to %s@%s/%s", DB_USER, DB_HOST, DB_NAME)
    try:
        conn = pymysql.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME,
            cursorclass=pymysql.cursors.DictCursor,
            connect_timeout=10
        )
        logging.debug("DB connection established successfully")
        return conn
    except Exception as e:
        logging.error("Error connecting to DB: %s", e)
        raise

def save_or_verify_user(user_data):
    logging.debug("save_or_verify_user called with user_data: %s", user_data)
    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                insert_sql = """
                    INSERT IGNORE INTO users (telegram_id, username)
                    VALUES (%s, %s)
                """

                id_encoded = encrypt_value(user_data['id'])
                username_encoded = encrypt_value(user_data['username'])

                cursor.execute(insert_sql, (id_encoded, username_encoded))
                conn.commit()

                check_sql = "SELECT username FROM users WHERE telegram_id = %s"
                cursor.execute(check_sql, (id_encoded,))
                result = cursor.fetchone()

                if result:
                    logging.debug("User authorized")
                    return True
                else:
                    logging.debug("User not authorized")
                    return False
    except Exception as e:
        logging.error("Error in save_or_verify_user: %s", e)
        return False

def get_telegram_id_by_username(username):
    logging.debug("get_telegram_id_by_username called with username: %s", username)
    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                sql = "SELECT telegram_id FROM users WHERE username = %s"
                logging.debug("Executing SQL: %s with value (%s)", sql, username)
                cursor.execute(sql, (username,))
                result = cursor.fetchone()
                logging.debug("SQL query result: %s", result)
                if result:
                    return result['telegram_id']
                else:
                    return None
    except Exception as e:
        logging.error("Error in get_telegram_id_by_username: %s", e)
        return None
