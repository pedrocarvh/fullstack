const resultInput = document.getElementById('result');

// Função para realizar o cálculo
export function calculate() {
  // Exibe 'ERROR' temporariamente para indicar erro
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');

  // Usa eval() para calcular o resultado
  const result = eval(input.value);

  // Atualiza o campo de resultado e remove a classe de erro
  resultInput.value = result;
  resultInput.classList.remove('error');
}