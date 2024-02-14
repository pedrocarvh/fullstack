
const imoveis = []
do{
  escolha = prompt("CAD IMOVEIS \n"+
  "Total de Imoveis: " + imoveis.length +
  "\n\n1 - Salvar Imovel \n"+
  "2 - Mostrar Imoveis \n"+
  "3 - Sair"
  )

  switch (escolha) {
    case "1":
      const imovel = {}
      
      imovel.nomeProp = prompt("Nome do Proprietario:")
      imovel.quantQuartos = prompt("Quantidade de Quartos:")
      imovel.quantBanheiros = prompt("Quantidade de Banheiros:")
      imovel.garagem = prompt("Possui Garagem:") 

      // SALVANDO OS DADOS NO ARRAY

      const confirmar = confirm(
        "Salvar este imovel? \n"+
        "\nProprietario: " + imovel.nomeProp +
        "\nQuartos: " + imovel.quantQuartos +
        "\nBanheiros: " + imovel.quantBanheiros +
        "\nGaragem: " + imovel.garagem)
      
        if ( confirmar) {
          imoveis.push(imovel)
          alert("Salvo com sucesso")
        }else{
          alert("Voltando ao menu")
        }
        break   
    case "2":
        for ( let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " + ( i + 1) +
            "\nProprietario: " + imoveis[i].nomeProp +          
            "\nQuartos: " + imoveis[i].quantQuartos +          
            "\nBanheiros: " + imoveis[i].quantBanheiros +          
            "\nGaragem: " + imoveis[i].garagem
            )        
        }
      break
    case "3":
      break
  }
}while(escolha != 3)

