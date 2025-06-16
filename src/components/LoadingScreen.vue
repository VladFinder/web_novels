<template>
  <div class="loading-screen">
    <div class="loading-content">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <p class="loading-text">Загрузка...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 120px;
  height: auto;
}

.loading-text {
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  color: #333;
  font-weight: 500;
}
</style>
