import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA45HVlArfrCX12RzClqX8yvPWQDjx97iM",
  authDomain: "iki-nowels.firebaseapp.com",
  projectId: "iki-nowels",
  storageBucket: "iki-nowels.firebasestorage.app",
  messagingSenderId: "1064173724655",
  appId: "1:1064173724655:web:7292b8b03bf0fe7708cc1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
