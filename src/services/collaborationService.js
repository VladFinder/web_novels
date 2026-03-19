import { db } from '@/firebase';
import { doc, setDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { EDITOR_COLORS, ALL_EDITORS } from './editorAuth';

// Presence TTL: if lastSeen is older than this, treat as offline
const PRESENCE_TTL = 30000; // 30s

// Update current editor's presence in Firestore
export const updatePresence = async (storyId, editorName, data) => {
  if (!storyId || !editorName) return;
  try {
    const ref = doc(db, 'editorPresence', `${storyId}_${editorName}`);
    await setDoc(ref, {
      editorName,
      storyId,
      color: EDITOR_COLORS[editorName] || '#94a3b8',
      lastSeen: Date.now(),
      ...data,
    });
  } catch (e) {
    // Ignore network errors silently
  }
};

// Remove presence when leaving
export const removePresence = async (storyId, editorName) => {
  if (!storyId || !editorName) return;
  try {
    await deleteDoc(doc(db, 'editorPresence', `${storyId}_${editorName}`));
  } catch {
    // Ignore
  }
};

// Watch other editors' presence for a story
// Returns unsubscribe function
export const watchPresence = (storyId, currentEditor, callback) => {
  const others = ALL_EDITORS.filter((e) => e !== currentEditor);
  const presenceMap = {};
  const unsubscribers = [];

  others.forEach((editorName) => {
    const ref = doc(db, 'editorPresence', `${storyId}_${editorName}`);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        // Only show recent presence
        if (Date.now() - data.lastSeen < PRESENCE_TTL) {
          presenceMap[editorName] = data;
        } else {
          delete presenceMap[editorName];
        }
      } else {
        delete presenceMap[editorName];
      }
      callback({ ...presenceMap });
    });
    unsubscribers.push(unsub);
  });

  return () => unsubscribers.forEach((u) => u());
};

// Watch story doc for real-time updates from other editors
// Returns unsubscribe function
export const watchStory = (storyId, callback) => {
  const ref = doc(db, 'stories', storyId);
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) callback(snap.data());
  });
};
