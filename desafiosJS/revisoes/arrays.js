let carrinho = [];

// Adicionar produtos ao carrinho
function adicionarProduto(produto) {
  carrinho.push(produto);
}

// Remover produto do carrinho
function removerProduto(id) {
  let indice = carrinho.findIndex(item => item.id === id);
  if (indice !== -1) {
    carrinho.splice(indice, 1);
  }
}

function atualizarQuantidade(id, novaQuantidade) {
  let produto = carrinho.find(item => item.id === id);
  if (produto) {
    produto.quantidade = novaQuantidade;
  }
}

// Calcular o total do carrinho
function calcularTotal() {
  let total = 0;
  for (let produto of carrinho) {
    total += produto.preco;
  }
  return total;
}

// Exemplo de uso
let produto1 = { id: 1, nome: 'Camiseta', preco: 29.99 };
let produto2 = { id: 2, nome: 'Calça Jeans', preco: 49.99 };

adicionarProduto(produto1);
adicionarProduto(produto2);

console.log(carrinho);      // Saída: [{ id: 1, nome: 'Camiseta', preco: 29.99 }, { id: 2, nome: 'Calça Jeans', preco: 49.99 }]
console.log(calcularTotal());  // Saída: 79.98

removerProduto(1);
console.log(carrinho);      // Saída: [{ id: 2, nome: 'Calça Jeans', preco: 49.99 }]
console.log(calcularTotal());  // Saída: 49.99
