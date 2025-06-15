import { db } from '../firebase';
import { collection, setDoc, doc, getDoc, getDocs } from "firebase/firestore";

const MOODS_COLLECTION = "moods";

// Сохраняет настроение пользователя на определённую дату
export async function saveMood(userId, date, mood) {
  await setDoc(doc(db, MOODS_COLLECTION, `${userId}_${date}`), {
    userId,
    date,
    mood
  });
}

// Получает настроение пользователя на определённую дату
export async function getMood(userId, date) {
  const docRef = doc(db, MOODS_COLLECTION, `${userId}_${date}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().mood : null;
}

// Получает все настроения пользователя
export async function getAllMoods(userId) {
  const moodsCol = collection(db, MOODS_COLLECTION);
  const moodsSnapshot = await getDocs(moodsCol);
  const moods = [];
  moodsSnapshot.forEach(doc => {
    const data = doc.data();
    if (data.userId === userId) moods.push(data);
  });
  return moods;
}
