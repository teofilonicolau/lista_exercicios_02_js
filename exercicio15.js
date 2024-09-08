const transacoes = [
  { tipo: "entrada", valor: 500 },
  { tipo: "saída", valor: 200 },
  { tipo: "entrada", valor: 150 },
  { tipo: "saída", valor: 50 },
  { tipo: "entrada", valor: 300 },
];

let saldoFinal = 0;

transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    saldoFinal += transacao.valor;
  } else if (transacao.tipo === "saída") {
    saldoFinal -= transacao.valor;
  }
});

console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
