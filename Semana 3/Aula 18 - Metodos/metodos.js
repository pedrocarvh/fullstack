let pessoa = {
  nome: "Fernanda Ralline",
  idade: 26,
  dizerOla(){
    console.log("Olá, mundo!Meu nome é" + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerOla()