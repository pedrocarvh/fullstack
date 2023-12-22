document.getElementById('form').addEventListener('submit', function (ev) {
  ev.preventDefault();

  // Recuperar os dados do formulário
  const nome = document.querySelector('input[name="nome"]').value;
  const dataNascimento = document.querySelector('input[name="dataNascimento"]').value;
  const sexo = document.querySelector('select[name="sexo"]').value;
  const endereco = document.querySelector('input[name="endereco"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;

  console.log({
    nome, dataNascimento, sexo, endereco, telefone
  });

    // Exibir dados 
  alert(
    "Triagem Realizada!" +
    "\nNome: " + nome +
    "\nData de Nascimento: " + dataNascimento +
    "\nSexo: " + sexo +
    "\nEndereço: " + endereco +
    "\nTelefone: " + telefone
  );

  this.reset();
});
