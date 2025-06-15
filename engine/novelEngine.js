export function initEngine(sceneData, container) {
  // ...инициализация движка визуальных новелл...
  console.log('Движок историй инициализирован');
  container.innerHTML = `<pre>${JSON.stringify(sceneData, null, 2)}</pre>`;
  // Здесь должна быть ваша логика запуска визуальной новеллы с sceneData
}
