const alunos = [
  { nome: "Ana", nota1: 8, nota2: 7 },
  { nome: "Carlos", nota1: 6, nota2: 5 },
  { nome: "Beatriz", nota1: 9, nota2: 8 },
  { nome: "Daniel", nota1: 7, nota2: 6 },
];

for (const aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`Aluno: ${aluno.nome} - Média: ${media}`);
}
