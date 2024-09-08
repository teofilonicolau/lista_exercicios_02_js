const produto = {
  nome: "Celular",
  preco: 1200,
  estoque: 50,
  desconto: 150,
  garantia: 24, // meses
};

function filtrarPropriedades(obj, valorMinimo) {
  const novoObjeto = {};

  for (let propriedade in obj) {
    if (
      typeof obj[propriedade] === "number" &&
      obj[propriedade] > valorMinimo
    ) {
      novoObjeto[propriedade] = obj[propriedade];
    }
  }

  return novoObjeto;
}

const resultado = filtrarPropriedades(produto, 50.1);
console.log(resultado);
