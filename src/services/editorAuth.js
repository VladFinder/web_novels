// Hardcoded editor credentials (4 editors)
const EDITORS = {
  vlad: 'test',
  chris: 'test',
  elina: 'test',
  diana: 'test',
};

export const EDITOR_COLORS = {
  vlad: '#22c55e',
  chris: '#3b82f6',
  elina: '#ec4899',
  diana: '#f97316',
};

const STORAGE_KEY = 'editor_auth_user';

export const login = (username, password) => {
  const u = username.toLowerCase().trim();
  if (EDITORS[u] && EDITORS[u] === password) {
    localStorage.setItem(STORAGE_KEY, u);
    return u;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentEditor = () => localStorage.getItem(STORAGE_KEY);

export const isLoggedIn = () => !!getCurrentEditor();

export const getEditorColor = (name) => EDITOR_COLORS[name] || '#94a3b8';

export const ALL_EDITORS = Object.keys(EDITORS);
