const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// Função para lidar com o clique nos botões de operações
function handleCharKeyClick(charKeyBtn) {
  const value = charKeyBtn.dataset.value;
  input.value += value;
}

// Função para limpar a entrada
function clearInput() {
  input.value = '';
  input.focus();
}

// Função para lidar com eventos de teclas pressionadas
function handleKeyDown(event) {
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

// Função para realizar o cálculo
function calculate() {
  // Exibe 'ERROR' temporariamente para indicar erro
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');

  // Usa eval() para calcular o resultado
  const result = eval(input.value);

  // Atualiza o campo de resultado e remove a classe de erro
  resultInput.value = result;
  resultInput.classList.remove('error');
}

// Função para copiar o resultado para a área de transferência
function copyToClipboard(event) {
  const button = event.currentTarget;
  // Lógica para alternar entre "Copy" e "Copied!"
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }
}

// Função para alternar entre os temas claro e escuro
function toggleTheme() {
  // Verifica o tema atual e chama a função correspondente
  if (main.dataset.theme === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

// Função para definir o tema claro
function setLightTheme() {
  // Atualiza as propriedades CSS para o tema claro
  root.style.setProperty("--bg-color", "#f1f5f9");
  root.style.setProperty("--border-color", "#aaa");
  root.style.setProperty("--font-color", "#212529");
  root.style.setProperty("--primary-color", "#26834a");
  main.dataset.theme = "light";
}

// Função para definir o tema escuro
function setDarkTheme() {
  // Atualiza as propriedades CSS para o tema escuro
  root.style.setProperty("--bg-color", "#212529");
  root.style.setProperty("--border-color", "#666");
  root.style.setProperty("--font-color", "#f1f5f9");
  root.style.setProperty("--primary-color", "#4dff91");
  main.dataset.theme = "dark";
}

// Adiciona eventos de clique a todos os botões com a classe 'charKey'
document.querySelectorAll('.charKey').forEach(charKeyBtn => {
  charKeyBtn.addEventListener('click', () => handleCharKeyClick(charKeyBtn));
});

// Adiciona evento de clique ao botão 'clear'
document.getElementById('clear').addEventListener('click', clearInput);

// Adiciona evento de tecla pressionada ao campo de entrada
input.addEventListener('keydown', handleKeyDown);

// Adiciona evento de clique ao botão '='
document.getElementById('equal').addEventListener('click', calculate);

// Adiciona evento de clique ao botão 'copyToClipboard'
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard);

// Adiciona evento de clique ao botão 'themeSwitcher'
document.getElementById('themeSwitcher').addEventListener('click', toggleTheme);
