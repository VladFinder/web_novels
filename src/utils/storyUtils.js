export function getCharStyle(char) {
  const x = Number(char?.x) || 50;
  const y = Number(char?.y) || 50;
  const size = Number(char?.size) || 30;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}%`,
    transform: 'translate(-50%, -50%)'
  };
}
