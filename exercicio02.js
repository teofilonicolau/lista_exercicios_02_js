const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia",
};

let editoraExiste = false;
for (let prop in livro) {
  if (prop === "editora") {
    editoraExiste = true;
    break;
  }
}

if (!editoraExiste) {
  livro.editora = "HarperCollins";
}

console.log(livro);
