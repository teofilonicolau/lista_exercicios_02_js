const vendas = [
  { produto: "Camiseta", quantidade: 3, valor: 50.0 },
  { produto: "Calça", quantidade: 2, valor: 100.0 },
  { produto: "Tênis", quantidade: 1, valor: 200.0 },
  { produto: "Boné", quantidade: 4, valor: 30.0 },
];

let valorTotalVendas = 0;

vendas.forEach((venda) => {
  valorTotalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$ ${valorTotalVendas.toFixed(2)}`);
