/**
 * Модуль управления аудио
 * Отвечает за воспроизведение звуков и музыки в игре
 */
class AudioManager {
    constructor() {
        this.audioElement = document.getElementById('backgroundMusic') || this._createAudioElement();
        this.volume = 1.0;
        this.isMuted = false;
        this.currentTrack = null;
    }

    /**
     * Создает аудио элемент, если он не существует
     * @returns {HTMLAudioElement} - Созданный аудио элемент
     * @private
     */
    _createAudioElement() {
        const audio = document.createElement('audio');
        audio.id = 'backgroundMusic';
        audio.loop = true;
        document.body.appendChild(audio);
        return audio;
    }

    /**
     * Воспроизводит аудио трек
     * @param {string} src - Путь к аудио файлу
     * @param {boolean} loop - Зацикливать ли воспроизведение
     */
    play(src, loop = true) {
        if (!src) return;
        
        this.currentTrack = src;
        this.audioElement.src = src;
        this.audioElement.loop = loop;
        this.audioElement.volume = this.volume;
        
        // Используем Promise для обработки ошибок воспроизведения
        const playPromise = this.audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Ошибка воспроизведения аудио:', error);
            });
        }
    }

    /**
     * Останавливает воспроизведение
     */
    stop() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.currentTrack = null;
    }

    /**
     * Приостанавливает воспроизведение
     */
    pause() {
        this.audioElement.pause();
    }

    /**
     * Возобновляет воспроизведение
     */
    resume() {
        if (this.currentTrack) {
            this.audioElement.play().catch(error => {
                console.error('Ошибка возобновления воспроизведения:', error);
            });
        }
    }

    /**
     * Устанавливает громкость
     * @param {number} value - Значение громкости от 0 до 1
     */
    setVolume(value) {
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        
        this.volume = value;
        this.audioElement.volume = this.isMuted ? 0 : value;
    }

    /**
     * Включает/выключает звук
     * @param {boolean} muted - Выключить звук (true) или включить (false)
     */
    setMuted(muted) {
        this.isMuted = muted;
        this.audioElement.volume = muted ? 0 : this.volume;
    }

    /**
     * Переключает состояние звука (вкл/выкл)
     * @returns {boolean} - Новое состояние звука (true - выключен, false - включен)
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.audioElement.volume = this.isMuted ? 0 : this.volume;
        return this.isMuted;
    }

    /**
     * Возвращает текущую громкость
     * @returns {number} - Текущая громкость (0-1)
     */
    getVolume() {
        return this.volume;
    }

    /**
     * Проверяет, выключен ли звук
     * @returns {boolean} - true, если звук выключен
     */
    isMutedState() {
        return this.isMuted;
    }
}

export default AudioManager;