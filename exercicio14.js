const empresa = {
  departamentos: [
    {
      nome: "Recursos Humanos",
      funcionarios: [
        { nome: "Ana", cargo: "Gerente de RH" },
        { nome: "Carlos", cargo: "Analista de RH" },
      ],
    },
    {
      nome: "Tecnologia",
      funcionarios: [
        { nome: "Julia", cargo: "Desenvolvedora Frontend" },
        { nome: "Pedro", cargo: "Desenvolvedor Backend" },
      ],
    },
    {
      nome: "Financeiro",
      funcionarios: [
        { nome: "Mariana", cargo: "Contadora" },
        { nome: "João", cargo: "Analista Financeiro" },
      ],
    },
  ],
};

for (const i in empresa.departamentos) {
  const departamento = empresa.departamentos[i];
  console.log(`Departamento: ${departamento.nome}`);

  for (const funcionario of departamento.funcionarios) {
    console.log(
      `  Funcionário: ${funcionario.nome} - Cargo: ${funcionario.cargo}`
    );
  }
}
