import { computed } from 'vue';
import { getEmotionIcon, getEmotionTheme } from '@/constants/emotions';

export function useSoulStyle(selectionId) {
  const currentId = computed(() =>
    selectionId && typeof selectionId === 'object' && 'value' in selectionId
      ? selectionId.value
      : selectionId
  );

  const imageSrc = computed(() => getEmotionIcon(currentId.value));

  const theme = computed(() => getEmotionTheme(currentId.value));

  const backgroundStyle = computed(() => ({
    background: theme.value.background
  }));

  const buttonColor = computed(() => theme.value.buttonColor);
  const textColor = computed(() => theme.value.textColor);

  return { imageSrc, backgroundStyle, buttonColor, textColor };
}
