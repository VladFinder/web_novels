<template>
  <div class="test-component">
    <h2>Тестовый компонент</h2>
    <p>Если вы видите этот текст - Vue.js работает корректно!</p>
    <button @click="count++">Нажато: {{ count }} раз</button>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.test-component {
  margin: 20px;
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
