<template>
  <div class="main-screen">
    <button class="settings-btn" @click="$emit('open-settings')">
      <!-- <img src="../assets/settings.svg" alt="Настройки" /> -->
    </button>
    <div class="soul-image">
      <img src="../assets/soul.png" alt="Soul" />
    </div>
    <div class="buttons">
      <button class="btn calendar" @click="$router.push('/calendar')">
        Календарь настроения
      </button>
      <button class="btn stories" disabled>
        Скоро здесь будут истории
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainScreen'
}
</script>

<style scoped>
.main-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: relative;
}

.settings-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  width: 40px;
  height: 40px;
  padding: 0;
}

.settings-btn img {
  width: 32px;
  height: 32px;
}

.soul-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soul-image img {
  width: 400px;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 20px;
}

.btn {
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
