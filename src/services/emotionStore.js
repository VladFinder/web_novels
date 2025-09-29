// stores/emotionStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmotionStore = defineStore("emotion", () => {
    const selectedEmotionId = ref(null);

    function setEmotion(id) {
        selectedEmotionId.value = id;
    }

    return { selectedEmotionId, setEmotion };
});
