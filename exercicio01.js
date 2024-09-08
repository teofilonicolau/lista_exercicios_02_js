const prompt = require("prompt-sync")();

const carro = {
  marca: prompt("Digite a marca do carro: "),
  modelo: prompt("Digite o modelo do carro: "),
  ano: prompt("Digite o ano do carro: "),
  cor: prompt("Digite a cor do carro: "),
};

for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
