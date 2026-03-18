export const telegram = window.Telegram?.WebApp;

export const isTelegram = () => {
  return Boolean(window.Telegram?.WebApp);
};

export const getTelegramUserId = () => {
  return telegram?.initDataUnsafe?.user?.id;
};

export const getTelegramUsername = () => {
  return (
    telegram?.initDataUnsafe?.user?.username ||
    telegram?.initDataUnsafe?.user?.first_name ||
    ''
  );
};

export const initTelegram = () => {
  if (telegram) {
    telegram.ready();
    telegram.expand();
  }
};

const DEBUG_STORAGE_KEY = 'debugTelegramId';

// Default fallback for local testing when Telegram WebApp data is unavailable
const DEFAULT_DEBUG_ID = '488646763';

export const getSafeTelegramId = () => {
  const webAppId = getTelegramUserId();
  if (webAppId) {
    return String(webAppId);
  }

  // Если уже был сохранён ID, но он не совпадает с фиксированным тестовым,
  // принудительно переписываем его.
  const cached = localStorage.getItem(DEBUG_STORAGE_KEY);
  if (cached === DEFAULT_DEBUG_ID) {
    return cached;
  }

  localStorage.setItem(DEBUG_STORAGE_KEY, DEFAULT_DEBUG_ID);
  return DEFAULT_DEBUG_ID;
};
