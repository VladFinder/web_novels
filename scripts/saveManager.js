/**
 * Модуль управления сохранениями
 * Отвечает за сохранение и загрузку игрового прогресса
 */
class SaveManager {
    constructor(slots = 8) {
        this.saveSlots = Array(slots).fill(null);
        this.loadAllSaveSlots();
    }

    /**
     * Загружает все сохранения из localStorage
     */
    loadAllSaveSlots() {
        this.saveSlots = Array.from({ length: this.saveSlots.length }, (_, i) => {
            const saved = localStorage.getItem(`save_${i}`);
            return saved ? JSON.parse(saved) : null;
        });
    }

    /**
     * Сохраняет текущее состояние игры в указанный слот
     * @param {number} slotIndex - Индекс слота для сохранения
     * @param {object} gameState - Объект с текущим состоянием игры
     * @returns {boolean} - Успешность операции
     */
    saveToSlot(slotIndex, gameState) {
        if (slotIndex < 0 || slotIndex >= this.saveSlots.length) {
            console.error(`Недопустимый индекс слота: ${slotIndex}`);
            return false;
        }

        const saveData = {
            ...gameState,
            timestamp: new Date().toLocaleString()
        };

        try {
            this.saveSlots[slotIndex] = saveData;
            localStorage.setItem(`save_${slotIndex}`, JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
            return false;
        }
    }

    /**
     * Загружает сохранение из указанного слота
     * @param {number} slotIndex - Индекс слота для загрузки
     * @returns {object|null} - Данные сохранения или null, если слот пуст
     */
    loadFromSlot(slotIndex) {
        if (slotIndex < 0 || slotIndex >= this.saveSlots.length) {
            console.error(`Недопустимый индекс слота: ${slotIndex}`);
            return null;
        }

        const saved = localStorage.getItem(`save_${slotIndex}`);
        if (!saved) {
            return null;
        }

        try {
            return JSON.parse(saved);
        } catch (error) {
            console.error('Ошибка при загрузке сохранения:', error);
            return null;
        }
    }

    /**
     * Возвращает все слоты сохранений
     * @returns {Array} - Массив слотов сохранений
     */
    getAllSaveSlots() {
        return this.saveSlots;
    }

    /**
     * Удаляет сохранение из указанного слота
     * @param {number} slotIndex - Индекс слота для удаления
     * @returns {boolean} - Успешность операции
     */
    deleteSaveSlot(slotIndex) {
        if (slotIndex < 0 || slotIndex >= this.saveSlots.length) {
            console.error(`Недопустимый индекс слота: ${slotIndex}`);
            return false;
        }

        try {
            this.saveSlots[slotIndex] = null;
            localStorage.removeItem(`save_${slotIndex}`);
            return true;
        } catch (error) {
            console.error('Ошибка при удалении сохранения:', error);
            return false;
        }
    }
}

export default SaveManager;