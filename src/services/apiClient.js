import { db } from '@/firebase';
import {
  doc, getDoc, setDoc, getDocs, updateDoc,
  collection, query, orderBy, startAt, endAt,
  documentId, arrayUnion
} from 'firebase/firestore';
import { toDateString } from '@/utils/dates';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// -------- Пользователи --------

export const ensureUser = async (telegramId, login) => {
  const id = String(telegramId);
  const ref = doc(db, 'users', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    const now = new Date().toISOString();
    await setDoc(ref, { telegramId: id, login: login || id, createdAt: now, updatedAt: now });
  }
  return (await getDoc(ref)).data();
};

export const getApiUrl = () => 'firebase';

// -------- Эмоции --------

export const saveEmotion = async ({ telegramId, emotion, note = '', date, username }) => {
  const id = String(telegramId);
  const dateStr = date || toDateString(new Date());
  const ref = doc(db, 'emotions', id, 'dates', dateStr);
  const data = {
    emotion,
    note,
    username: username || 'Пользователь',
    timestamp: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  await setDoc(ref, data);
  return data;
};

export const getEmotionByDate = async (telegramId, date) => {
  const id = String(telegramId);
  const dateStr = toDateString(date);
  const snap = await getDoc(doc(db, 'emotions', id, 'dates', dateStr));
  if (!snap.exists()) return null;
  return { ...snap.data(), date: dateStr };
};

export const hasEmotionOnDate = async (telegramId, date) => {
  const emotion = await getEmotionByDate(telegramId, date);
  return Boolean(emotion);
};

export const getEmotionsRange = async (telegramId, startDate, endDate) => {
  const id = String(telegramId);
  const start = toDateString(startDate);
  const end = toDateString(endDate);
  const q = query(
    collection(db, 'emotions', id, 'dates'),
    orderBy(documentId()),
    startAt(start),
    endAt(end)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ ...d.data(), date: d.id }));
};

// -------- Мысли --------

export const saveThought = async ({ telegramId, text, date }) => {
  const id = String(telegramId);
  const dateStr = date ? toDateString(date) : toDateString(new Date());
  const ref = doc(db, 'thoughts', id, 'dates', dateStr);
  const thought = {
    id: Date.now().toString(),
    text,
    timestamp: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { items: arrayUnion(thought) });
  } else {
    await setDoc(ref, { items: [thought] });
  }
  return thought;
};

export const getThoughtsByDate = async (telegramId, date) => {
  const id = String(telegramId);
  const dateStr = toDateString(date);
  const snap = await getDoc(doc(db, 'thoughts', id, 'dates', dateStr));
  if (!snap.exists()) return [];
  return snap.data().items || [];
};

// -------- Истории --------

export const getStories = async () => {
  const snap = await getDocs(collection(db, 'stories'));
  return snap.docs.map(d => d.data());
};

// Only published stories (for regular users in the main app)
export const getPublishedStories = async () => {
  const snap = await getDocs(collection(db, 'stories'));
  return snap.docs.map(d => d.data()).filter(s => s.status === 'published');
};

export const getStory = async (id) => {
  const snap = await getDoc(doc(db, 'stories', id));
  if (!snap.exists()) throw new ApiError('Story not found', 404);
  return snap.data();
};

export const saveStory = async (story) => {
  await setDoc(doc(db, 'stories', story.id), story);
  return story;
};

// Save as test (visible only to editors)
export const saveStoryAsTest = async (story, editorName) => {
  const data = { ...story, status: 'test', lastEditedBy: editorName, updatedAt: new Date().toISOString() };
  await setDoc(doc(db, 'stories', story.id), data);
  return data;
};

// Publish (visible to all users)
export const publishStory = async (story, editorName) => {
  const data = { ...story, status: 'published', lastEditedBy: editorName, publishedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  await setDoc(doc(db, 'stories', story.id), data);
  return data;
};

// Editor private drafts stored in localStorage (keyed by editor name)
export const saveEditorDraft = (editorName, storyId, form) => {
  if (!editorName || !storyId) return;
  try {
    localStorage.setItem(`editor_draft_${editorName}_${storyId}`, JSON.stringify({
      form,
      savedAt: Date.now(),
    }));
  } catch {
    // Ignore quota errors
  }
};

export const loadEditorDraft = (editorName, storyId) => {
  if (!editorName || !storyId) return null;
  try {
    const raw = localStorage.getItem(`editor_draft_${editorName}_${storyId}`);
    if (!raw) return null;
    const draft = JSON.parse(raw);
    // Expire after 7 days
    if (Date.now() - draft.savedAt > 7 * 24 * 60 * 60 * 1000) {
      clearEditorDraft(editorName, storyId);
      return null;
    }
    return draft;
  } catch {
    return null;
  }
};

export const clearEditorDraft = (editorName, storyId) => {
  if (!editorName || !storyId) return;
  try {
    localStorage.removeItem(`editor_draft_${editorName}_${storyId}`);
  } catch {
    // Ignore
  }
};

export const getStoryProgress = async (telegramId, storyId) => {
  const snap = await getDoc(doc(db, 'storyProgress', `${telegramId}_${storyId}`));
  if (!snap.exists()) return null;
  return snap.data();
};

export const saveStoryProgress = async ({ telegramId, storyId, stepIndex, flags }) => {
  const data = {
    telegramId: String(telegramId),
    storyId,
    stepIndex,
    flags,
    updatedAt: new Date().toISOString()
  };
  await setDoc(doc(db, 'storyProgress', `${telegramId}_${storyId}`), data);
  return data;
};

const S3_ENDPOINT = 'https://s3.ru1.storage.beget.cloud';
const S3_BUCKET = 'e8faaa356416-ikipoject';

function slugify(str) {
  return String(str || 'file')
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_а-яёА-ЯЁ-]/g, '')
    .slice(0, 60) || 'file';
}

function compressImage(file, maxWidth = 1920, quality = 0.85) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      let { width, height } = img;
      if (width > maxWidth) {
        height = Math.round(height * maxWidth / width);
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      canvas.toBlob(resolve, 'image/webp', quality);
    };
    img.src = url;
  });
}

export const uploadFile = async (file, label) => {
  const { S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3');
  const client = new S3Client({
    endpoint: S3_ENDPOINT,
    region: 'ru-1',
    credentials: {
      accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
      secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
    },
    forcePathStyle: true,
  });

  const isImage = file.type.startsWith('image/');
  let uploadBlob = file;
  let ext = file.name.split('.').pop().toLowerCase();

  if (isImage) {
    uploadBlob = await compressImage(file);
    ext = 'webp';
  }

  const key = `${slugify(label)}.${ext}`;
  const body = new Uint8Array(await uploadBlob.arrayBuffer());
  await client.send(new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: body,
    ContentType: isImage ? 'image/webp' : file.type,
    ACL: 'public-read',
  }));
  return { url: `${S3_ENDPOINT}/${S3_BUCKET}/${key}` };
};

export const apiClient = {
  getApiUrl,
  ensureUser,
  saveEmotion,
  getEmotionByDate,
  hasEmotionOnDate,
  getEmotionsRange,
  saveThought,
  getThoughtsByDate
};
