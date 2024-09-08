const pessoas = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "Carlos", idade: 32, cidade: "Rio de Janeiro" },
  { nome: "Beatriz", idade: 28, cidade: "Belo Horizonte" },
  { nome: "João", idade: 40, cidade: "Salvador" },
  { nome: "Mariana", idade: 35, cidade: "Curitiba" },
];

for (let pessoa of pessoas) {
  console.log(
    `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
  );
}
