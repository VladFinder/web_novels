import { db } from '@/firebase';
import { doc, setDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { EDITOR_COLORS, ALL_EDITORS } from './editorAuth';

// Presence TTL: if lastSeen is older than this, treat as offline
const PRESENCE_TTL = 30000; // 30s

// ─── Presence ───────────────────────────────────────────────────────────────

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
  } catch {
    // Ignore network errors
  }
};

export const removePresence = async (storyId, editorName) => {
  if (!storyId || !editorName) return;
  try {
    await deleteDoc(doc(db, 'editorPresence', `${storyId}_${editorName}`));
  } catch {
    // Ignore
  }
};

// Watch other editors' presence.
// collaborators: string[] — only track these editors (all if empty)
// Returns unsubscribe function
export const watchPresence = (storyId, currentEditor, collaborators, callback) => {
  const allowed = (collaborators && collaborators.length > 0)
    ? collaborators.filter((e) => e !== currentEditor)
    : ALL_EDITORS.filter((e) => e !== currentEditor);

  const presenceMap = {};
  const unsubscribers = [];

  allowed.forEach((editorName) => {
    const ref = doc(db, 'editorPresence', `${storyId}_${editorName}`);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
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

// ─── Live story state ────────────────────────────────────────────────────────

// Push current story content so other editors see changes in real-time.
// Writes to storyLiveState/{storyId} (separate from saved stories).
export const syncStoryLive = async (storyId, editorName, formData) => {
  if (!storyId || !editorName) return;
  try {
    const ref = doc(db, 'storyLiveState', storyId);
    await setDoc(ref, {
      editingBy: editorName,
      timestamp: Date.now(),
      steps: formData.steps || [],
      characters: formData.characters || [],
      backgrounds: formData.backgrounds || [],
    });
  } catch {
    // Ignore network errors
  }
};

// Watch live story state from other editors.
// Skips own writes. Returns unsubscribe function.
export const watchStoryLive = (storyId, currentEditor, callback) => {
  const ref = doc(db, 'storyLiveState', storyId);
  return onSnapshot(ref, (snap) => {
    if (!snap.exists()) return;
    const data = snap.data();
    if (data.editingBy === currentEditor) return; // skip own writes
    callback(data);
  });
};

// Watch the saved story doc (for save notifications)
export const watchStory = (storyId, callback) => {
  const ref = doc(db, 'stories', storyId);
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) callback(snap.data());
  });
};
