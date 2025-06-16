export const telegram = window.Telegram?.WebApp;

export const isTelegram = () => {
  return Boolean(window.Telegram?.WebApp);
};

export const getTelegramUserId = () => {
  return telegram?.initDataUnsafe?.user?.id;
};

export const initTelegram = () => {
  if (telegram) {
    telegram.ready();
    telegram.expand();
  }
};
