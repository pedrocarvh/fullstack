const nameList = [
  "Ana Souza", "João Silva", "Maria Oliveira", "Pedro Santos", "Carla Pereira",
  "Ricardo Lima", "Juliana Costa", "Lucas Martins", "Fernanda Rocha", "Marcos Oliveira",
  "Isabela Almeida", "Roberto Silva", "Amanda Pereira", "Felipe Costa", "Gabriela Lima",
  "Diego Santos", "Patrícia Rocha", "Alexandre Almeida", "Cristiane Oliveira", "Tiago Pereira",
  "Bianca Rocha", "Eduardo Lima", "Camila Costa", "Leonardo Santos", "Tatiane Almeida",
  "Anderson Oliveira", "Laura Pereira", "Carlos Costa", "Raquel Lima", "Gustavo Santos",
  "Larissa Almeida", "Marcelo Rocha", "Mariana Costa", "Renato Silva", "Valéria Oliveira",
  "José Pereira", "Viviane Lima", "Hugo Santos", "Vanessa Almeida", "Luciano Rocha",
  "Carolina Costa", "Wagner Lima", "Daniela Pereira", "André Almeida", "Luiza Santos",
  "Paulo Rocha", "Beatriz Almeida", "Vinícius Lima", "Evelyn Costa", "Gabriel Oliveira",
  "Fernanda Rocha", "Lucas Silva", "Cláudia Almeida", "Bruno Costa", "Isabela Oliveira",
  "Marcela Lima", "Rodrigo Santos", "Natalia Pereira", "João Almeida", "Débora Rocha",
  "Rafaela Costa", "Lucas Oliveira", "Priscila Almeida", "Rodrigo Lima", "Elaine Santos",
  "Guilherme Rocha", "Aline Costa", "Fernando Lima", "Patrícia Almeida", "Roberto Santos",
  "Amanda Oliveira", "Leandro Costa", "Cristina Lima", "Fábio Rocha", "Larissa Almeida",
  "Douglas Santos", "Vanessa Oliveira", "Ricardo Costa", "Sara Almeida", "Felipe Lima",
  "Adriana Rocha", "Márcio Costa", "Vivian Lima", "Luís Almeida", "Carla Oliveira",
  "Jorge Santos", "Gabriela Costa", "Thiago Lima", "Letícia Almeida", "Renan Rocha",
  "Carolina Santos", "Marcelo Oliveira", "Ana Almeida", "Daniel Lima", "Tatiane Rocha",
  "Rafael Costa", "Laura Santos", "Lucas Almeida", "Renata Oliveira", "Eduardo Rocha",
  "Mariana Costa", "André Lima", "Amanda Almeida", "Bruno Rocha", "Priscila Santos",
  "Hugo Almeida", "Camila Costa", "Fábio Lima", "Tatiane Oliveira", "Gustavo Rocha",
  "Juliana Santos", "Leonardo Almeida", "Luana Lima", "Roberto Rocha", "Viviane Santos"
];

var escolherLetra = () => {
  let letraEscolhida = prompt("Escolha a letra inicial")
  return letraEscolhida

}

const letraSelecionada = escolherLetra()

var filtrador = nameList.filter(nList => nList[0].toLowerCase() === letraSelecionada.toLowerCase());
alert(filtrador);
