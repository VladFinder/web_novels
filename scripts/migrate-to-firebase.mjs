/**
 * Миграция данных из emotions.json в Firebase Firestore
 *
 * ПЕРЕД ЗАПУСКОМ:
 * 1. Открой Firebase Console → Firestore → Rules
 * 2. Установи правила: allow read, write: if true;
 * 3. Запусти: node scripts/migrate-to-firebase.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const firebaseConfig = {
  apiKey: "AIzaSyA45HVlArfrCX12RzClqX8yvPWQDjx97iM",
  authDomain: "iki-nowels.firebaseapp.com",
  projectId: "iki-nowels",
  storageBucket: "iki-nowels.firebasestorage.app",
  messagingSenderId: "1064173724655",
  appId: "1:1064173724655:web:7292b8b03bf0fe7708cc1a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataPath = join(__dirname, '../server/data/emotions.json');
const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function migrateUsers() {
  const users = data.users || {};
  let count = 0;
  for (const [telegramId, user] of Object.entries(users)) {
    await setDoc(doc(db, 'users', String(telegramId)), {
      telegramId: String(telegramId),
      login: user.login || String(telegramId),
      createdAt: user.createdAt || new Date().toISOString(),
      updatedAt: user.updatedAt || new Date().toISOString()
    });
    count++;
  }
  console.log(`✓ Пользователи: ${count}`);
}

async function migrateEmotions() {
  const emotions = data.user_emotions || {};
  let count = 0;
  let errors = 0;
  for (const [telegramId, dates] of Object.entries(emotions)) {
    for (const [date, emotionData] of Object.entries(dates)) {
      try {
        await setDoc(doc(db, 'emotions', String(telegramId), 'dates', date), emotionData);
        count++;
        // небольшая пауза чтобы не превысить лимиты
        if (count % 50 === 0) {
          await sleep(500);
          process.stdout.write(`  эмоции: ${count}...\r`);
        }
      } catch (e) {
        errors++;
        console.error(`  Ошибка ${telegramId}/${date}: ${e.message}`);
      }
    }
  }
  console.log(`✓ Эмоции: ${count} (ошибок: ${errors})`);
}

async function migrateThoughts() {
  const thoughts = data.user_thoughts || {};
  let count = 0;
  let errors = 0;
  for (const [telegramId, dates] of Object.entries(thoughts)) {
    for (const [date, items] of Object.entries(dates)) {
      if (!items || !items.length) continue;
      try {
        await setDoc(doc(db, 'thoughts', String(telegramId), 'dates', date), { items });
        count += items.length;
      } catch (e) {
        errors++;
        console.error(`  Ошибка мысли ${telegramId}/${date}: ${e.message}`);
      }
    }
  }
  console.log(`✓ Мысли: ${count} записей (ошибок: ${errors})`);
}

async function migrateStories() {
  const storiesDir = join(__dirname, '../server/data/stories');
  if (!existsSync(storiesDir)) {
    console.log('  Папка stories не найдена, пропуск');
    return;
  }
  const files = readdirSync(storiesDir).filter(f => f.endsWith('.json'));
  let count = 0;
  for (const file of files) {
    const story = JSON.parse(readFileSync(join(storiesDir, file), 'utf-8'));
    if (story.id) {
      await setDoc(doc(db, 'stories', story.id), story);
      count++;
    }
  }
  console.log(`✓ Истории: ${count}`);
}

async function main() {
  console.log('=== Миграция в Firebase Firestore ===\n');
  try {
    await migrateUsers();
    await migrateEmotions();
    await migrateThoughts();
    await migrateStories();
    console.log('\n=== Готово! ===');
  } catch (e) {
    console.error('\nОшибка миграции:', e.message);
    console.error('Убедись что Firestore Rules разрешают запись без авторизации.');
    process.exit(1);
  }
  process.exit(0);
}

main();
