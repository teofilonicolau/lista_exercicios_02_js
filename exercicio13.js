const carrinho = {
  itens: [
    { nome: "Camiseta", quantidade: 2, precoUnitario: 50.0 },
    { nome: "Calça", quantidade: 1, precoUnitario: 100.0 },
    { nome: "Tênis", quantidade: 1, precoUnitario: 200.0 },
    { nome: "Boné", quantidade: 3, precoUnitario: 30.0 },
  ],
};

let valorTotal = 0;

carrinho.itens.forEach((item) => {
  valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);
