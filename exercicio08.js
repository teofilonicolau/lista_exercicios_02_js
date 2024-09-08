const filmes = [
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
  { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
  { titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 },
  { titulo: "Matrix", diretor: "Lana e Lilly Wachowski", anoLancamento: 1999 },
];

const titulos = [];

filmes.forEach((filme) => {
  titulos.push(filme.titulo);
});

console.log(titulos);
