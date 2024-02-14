import { handleKeyDown } from "./handleKeyDown.js"
import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { toggleTheme,setDarkTheme,setLightTheme } from "./theme.js";


const input = document.getElementById('input');

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

toggleTheme()
setDarkTheme()
setLightTheme()


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
