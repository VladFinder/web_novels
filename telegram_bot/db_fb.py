import firebase_admin
from firebase_admin import credentials, firestore

# Инициализация Firebase
cred = credentials.Certificate("iki-nowels-firebase-adminsdk-fbsvc-7943ded313.json")  # путь к вашему ключу
firebase_admin.initialize_app(cred)
db = firestore.client()

def save_or_verify_user(user_data):
    user_id = str(user_data['id'])
    username = user_data['username']

    # Проверяем, есть ли пользователь
    doc_ref = db.collection('users').document(user_id)
    doc = doc_ref.get()
    if doc.exists:
        return True  # Пользователь уже есть

    # Если нет — добавляем
    doc_ref.set({'username': username})
    return True

def get_telegram_id_by_username(username):
    users_ref = db.collection('users')
    query = users_ref.where('username', '==', username).limit(1).stream()
    for doc in query:
        return doc.id  # Telegram ID хранится как id документа
    return None