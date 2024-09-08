const funcionarios = [
  { nome: "João", cargo: "Desenvolvedor", salario: 5000 },
  { nome: "Maria", cargo: "Analista", salario: 4000 },
  { nome: "Pedro", cargo: "Gerente", salario: 7000 },
  { nome: "Ana", cargo: "Designer", salario: 3500 },
];

const salarioMinimo = 4500;

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(
      `Nome: ${funcionario.nome} - Cargo: ${funcionario.cargo} - Salário: R$ ${funcionario.salario}`
    );
  }
}
