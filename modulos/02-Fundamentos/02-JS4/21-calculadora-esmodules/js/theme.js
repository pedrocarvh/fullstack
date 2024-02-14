// Função para alternar entre os temas claro e escuro

const main = document.querySelector('main');
const root = document.querySelector(':root');

export function toggleTheme() {
  // Verifica o tema atual e chama a função correspondente
  if (main.dataset.theme === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

// Função para definir o tema claro
export function setLightTheme() {
  // Atualiza as propriedades CSS para o tema claro
  root.style.setProperty("--bg-color", "#f1f5f9");
  root.style.setProperty("--border-color", "#aaa");
  root.style.setProperty("--font-color", "#212529");
  root.style.setProperty("--primary-color", "#26834a");
  main.dataset.theme = "light";
}

// Função para definir o tema escuro
export function setDarkTheme() {
  // Atualiza as propriedades CSS para o tema escuro
  root.style.setProperty("--bg-color", "#212529");
  root.style.setProperty("--border-color", "#666");
  root.style.setProperty("--font-color", "#f1f5f9");
  root.style.setProperty("--primary-color", "#4dff91");
  main.dataset.theme = "dark";
}
