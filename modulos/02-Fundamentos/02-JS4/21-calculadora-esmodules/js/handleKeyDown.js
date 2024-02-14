const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// Função para lidar com eventos de teclas pressionadas
export function handleKeyDown(event) {
  event.preventDefault();
  // Adiciona o valor da tecla ao campo de entrada se for permitido
  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }
  // Lógica para tratamento especial do Backspace e Enter
  if (event.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
  if (event.key === 'Enter') {
    calculate();
  }
}

