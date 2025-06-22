// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ЭТО НЕ СЕКРЕТНЫЙ JSON!
// Это публичные настройки из Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyA45HVlArfrCX12RzClqX8yvPWQDjx97iM",
  authDomain: "iki-nowels.firebaseapp.com",
  projectId: "iki-nowels",
  storageBucket: "iki-nowels.firebasestorage.app",
  messagingSenderId: "1064173724655",
  appId: "1:1064173724655:web:7292b8b03bf0fe7708cc1a",
  measurementId: "G-MZD8G11D0Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
