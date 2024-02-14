// Função para copiar o resultado para a área de transferência
export function copyToClipboard(event) {
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