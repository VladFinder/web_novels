<template>
  <div class="main-screen">
    <button class="settings-btn" @click="$emit('open-settings')">
      <!-- <img src="../assets/settings.svg" alt="Настройки" /> -->
    </button>
    <div class="glass-container">
      <span class="soul-text">
        Ты не ты, когда<br>голоден
      </span>
    </div>
    <div class="soul-image">
      <img src="../assets/soul.png" alt="Soul" />
    </div>
    <div class="buttons-row">
      <button class="btn calendar" @click="$emit('open-calendar')">
        Календарь настроения
      </button>
      <button class="btn stories" disabled>
        Скоро тут будут истории
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
  /* padding: 4vw 2vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

.glass-container{
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  position: absolute;
  top: 60px;
}

/* .main-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: relative;
} */

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
  width: 80vw;
  /* max-width: 240px;
  min-width: 120px; */
  height: auto;
}

.buttons-row {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  gap: 4vw;
  justify-content: center;
  margin-top: 6vw;
  flex-wrap: nowrap;
  margin: 20px;
  position: absolute;
  bottom: 80px;
}

.btn {
  padding: 3vw 6vw;
  min-width: 120px;
  font-size: 4vw;
  border: none;
  border-radius: 20px;
}

.calendar {
  background: #FF7DBB;
  color: black;
  /* border: none!important;
  border-radius: 20px; */
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  /* .main-screen {
    padding: 6vw 2vw;
  } */
  /* .soul-image img {
    width: 60vw;
    max-width: 180px;
  } */
  /* .btn {
    font-size: 5vw;
    min-width: 100px;
  } */
}
</style>
