# Lista de Exercícios 2 - Turma Full Stack 2 (+praTi e Codifica Edu) - 2024/2

## Este repositório contém uma lista de exercícios desenvolvidos para o módulo 01 da Turma Full Stack 2 (+praTi e Codifica). Cada exercício foi projetado para ajudar a desenvolver habilidades práticas em JavaScript. Abaixo estão as explicações para cada exercício.

## Como Executar o Código

### Clone o Repositório:

- Clone o repositório do GitHub para o seu ambiente local usando o comando:

bash
```
git clone https://github.com/teofilonicolau/lista_exercicios_02_js.git
````




## Pré-requisitos
 - Certifique-se de que o Node.js está instalado na sua máquina. Você pode verificar se o Node.js está instalado e qual versão você  você tem com o comando:

bash
 ```
 node -v
```

## Se o Node.js não estiver instalado, você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.

## Abra o Terminal ou Prompt de Comando
- Dependendo do seu sistema operacional, abra o terminal no Linux/Mac ou o Prompt de Comando (cmd) no Windows.

## Navegue até o Diretório do Arquivo
- Use o comando cd para mudar para o diretório onde você salvou o arquivo. Por exemplo:

bash
```
 cd caminho/para/o/diretorio
```


- Substitua: caminho/para/o/diretorio  - pelo caminho real para o diretório do seu repositório clonado.

 Execute os exercícios: Para cada exercício, abra o terminal e execute o comando correspondente:

### Isso executará o arquivo JavaScript usando o Node.js e exibirá a saída no console.

## Exercícios
### 1. Acessando Propriedades de Objetos
![image](https://github.com/user-attachments/assets/33b0b449-2730-4c4b-984b-e3352500b039)

Objetivo:Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console
- Explicação
Pacote prompt-sync: Esse pacote permite receber entradas do usuário diretamente no terminal. Para cada propriedade do objeto carro, ele solicita que o usuário digite o valor.
Uso do for...in: Itera sobre as propriedades do objeto carro e exibe no terminal os valores inseridos.
- Como Executar o Código.
- Você pode baixar e instalar o Node.js a partir do site oficial.
Clonar o repositório:
- Execute o código com o comando:
bash
```
node exercicio01.js
```


- isso permite que o usuário interaja diretamente com o programa e insira suas próprias informações!

- Exemplo de Saída:

bash
```
Digite a marca do carro: Toyota
Digite o modelo do carro: Corolla
Digite o ano do carro: 2020
Digite a cor do carro: Preto

marca: Toyota
modelo: Corolla
ano: 2020
cor: Preto
```

### 2. Verificando Propriedades
![image](https://github.com/user-attachments/assets/b2c5088a-6fd6-4254-8241-0bcb654f2024)

- Objetivo: Crie um objeto livro com propriedades titulo, autor,
- anoPublicacao e genero. Verifique se a propriedade editora existe no
- objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


 - Explicação:
 - Objeto livro: Criado com as propriedades titulo, autor, anoPublicacao, e genero.
 - Verificação da Propriedade editora: O loop for...in percorre as propriedades do objeto livro. Se a propriedade editora for encontrada, a variável editoraExiste é definida como true.
 - Adição de Propriedade: Se editoraExiste for false (ou seja, a propriedade não está presente no objeto), a propriedade editora é adicionada ao objeto com o valor "HarperCollins".
 - Exibição do Objeto Atualizado: O objeto livro é exibido no console, já com a propriedade editora incluída, caso não estivesse presente.
- Exemplo de Saída:

bash
```
{
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  anoPublicacao: 1954,
  genero: 'Fantasia',
  editora: 'HarperCollins'
}
```

- Você pode baixar e instalar o Node.js a partir do site oficial.
- Clonar o repositório:
- Execute o código com o comando:
bash
```
node exercicio02.js
```

- Este código atende ao objetivo de verificar e adicionar a propriedade editora no objeto livro.

### 3. Filtrando Propriedades de Objetos
![image](https://github.com/user-attachments/assets/5897c4d0-613f-4d93-9b00-07daa729fb88)

 - Objetivo:Dado um objeto produto com várias propriedades, crie uma
 - função que retorna um novo objeto contendo apenas as propriedades cujo
 - valor seja maior que um valor específico. Use for in para filtrar as
 - propriedades.

 - Explicação:
 - O valor mínimo foi definido como 50.1, o que exclui estoque (que é exatamente 50) da exclusão, mas remove desconto e garantia, já que seus valores são menores que 150.

- Exemplo de Saída:

bash
```
{ preco: 1200, desconto: 150 }
```

- Você pode baixar e instalar o Node.js a partir do site oficial.
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```
node exercicio03.js
```

- Este código resolve o problema, filtrando e retornando apenas as propriedades do objeto que atendem à condição de serem maiores que um valor específico.

### 4. Iterando Sobre Arrays de Objetos
![image](https://github.com/user-attachments/assets/69a5acf4-7fc6-4401-be71-3d61d6c664cf)

 - Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
 - uma pessoa com nome, idade, e cidade. Use for of para exibir as
 - informações de cada pessoa no console.

 - Explicação:

   -  Array pessoas: É um array de objetos, onde cada objeto contém três propriedades: nome, idade, e cidade.
   -  Iteração com for...of:
   - O loop for...of é usado para iterar sobre cada objeto no array pessoas.
   - Para cada iteração, ele acessa as propriedades de cada pessoa (nome, idade, cidade) e exibe essas informações no console.


 Exemplo de Saída:
 
 bash
 ```  
 Nome: Ana, Idade: 25, Cidade: São Paulo
 Nome: Carlos, Idade: 32, Cidade: Rio de Janeiro
 Nome: Beatriz, Idade: 28, Cidade: Belo Horizonte
 Nome: João, Idade: 40, Cidade: Salvador
 Nome: Mariana, Idade: 35, Cidade: Curitiba

```  



- Você pode baixar e instalar o Node.js a partir do site oficial.
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```  
node exercicio04.js

```  

- Isso exibirá as informações de cada pessoa no console conforme solicitado no exercício.

### 5. Calculando Valores em Arrays de Objetos
![image](https://github.com/user-attachments/assets/a6e0f1eb-7954-4af5-9567-2ad702a169a0)

 - Objetivo:Crie um array de objetos alunos, cada um com propriedades
 - nome, nota1, e nota2. Use for of para calcular a média das notas de cada
 - aluno e exibir o nome do aluno junto com sua média.

 - Explicação:

- Passos para o código:
- Criação de um array de objetos para os alunos - Cada aluno terá as propriedades nome, nota1, e nota2.
- Uso do loop for...of - Para iterar sobre o array de objetos e calcular a média das notas de cada aluno.
- Cálculo da média - Usaremos a fórmula (nota1 + nota2) / 2 para calcular a média de cada aluno.
- Exibição dos resultados - Exibir o nome do aluno junto com sua média.

-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
bash
```  
node exercicio05.js

```  


### 6. Filtrando Arrays de Objetos
![image](https://github.com/user-attachments/assets/1a1b5134-b632-4b40-8f4e-492a00211aed)

- Objetivo: Crie um array de objetos funcionarios, onde cada objeto
- contém informações como nome, cargo, e salario. Use for of para filtrar
- e exibir apenas os funcionários cujo salário seja maior que um valor
- específico.
- Explicação:
- Criação de um array de objetos para os funcionários - Cada funcionário terá as propriedades nome, cargo, e salario.
- Uso do loop for...of - Para iterar sobre o array de objetos e aplicar a condição de filtragem.
- Filtragem - Vamos exibir os funcionários cujo salário seja maior que um valor pré-determinado
-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:

bash
```  
node exercicio06.js

```  

    - Isso exibirá no terminal apenas os funcionários cujo salário seja maior que o valor definido (neste caso, 4500).

  
### 7. Modificando Objetos em um Array
![image](https://github.com/user-attachments/assets/59e4cee0-6bd4-430a-b216-9cfa9135a07d)

- Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
- preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
- os produtos e exibir o novo preço.
- Explicação:
- Criação de um array de objetos para os produtos - Cada produto terá as propriedades nome, preco, e desconto.
- Uso do método forEach - Para iterar sobre o array e aplicar o desconto.
- Cálculo do novo preço - Subtrair 10% do preço original de cada produto.
- Exibição dos novos preços - Exibir o nome do produto junto com o novo preço após o desconto.
-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```    
node exercicio07.js

```    

    - Isso aplicará o desconto de 10% em todos os produtos e exibirá o novo preço formatado no terminal.

### 8. Criando Novos Arrays a Partir de Objetos
![image](https://github.com/user-attachments/assets/431d71c3-7d40-4a14-87fd-b6e2ffd07eb6)

 - Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
 - diretor, e anoLancamento. Use forEach para criar um novo array
 - contendo apenas os títulos dos filmes.

- Explicação:
- Vamos criar um exercício em JavaScript onde manipularemos um array de objetos que contém informações sobre filmes. O objetivo é extrair apenas os títulos dos filmes e armazená-los em um novo array utilizando o método forEach.
- Passos para o código:
- Criação de um array de objetos para os filmes - Cada filme terá as propriedades titulo, diretor, e anoLancamento.
- Uso do método forEach - Para iterar sobre o array e extrair os títulos dos filmes.
- Armazenar os títulos em um novo array - Durante a iteração, vamos criar um novo array apenas com os títulos.
 
-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```     
node exercicio08.js

```    

    - O código irá exibir no terminal um array contendo apenas os títulos dos filmes.

### 9. Contabilizando Elementos com uma Condição
![image](https://github.com/user-attachments/assets/e206c317-ec71-4106-b83a-fe37056981e2)

- Objetivo:Crie um array de objetos clientes, cada um com propriedades
- nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
- de 30 anos.

- Explicação:

-Criação de um array de objetos para os clientes - Cada cliente terá as propriedades nome, idade, e cidade.
- Uso do método forEach - Para iterar sobre o array e verificar a condição de idade.
- Contabilizar clientes com mais de 30 anos - Vamos manter um contador que será incrementado sempre que a condição for satisfeita..
-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```     
node exercicio09.js
```


### 10. Criando Relatórios com Objetos e Arrays
![image](https://github.com/user-attachments/assets/93a74337-feb5-4202-81c4-6454c3f08df3)

10. Criando Relatórios com Objetos e Arrays
- Objetivo:Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

- Explicação:
- Criação de um array de objetos para as vendas - Cada venda terá as propriedades produto, quantidade, e valor.
- Uso do método forEach - Para iterar sobre o array e calcular o valor total das vendas.
- Cálculo do valor total - Multiplicaremos a quantidade de cada produto pelo valor e somaremos ao total geral.
-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
 
bash
```       
node exercicio10.js

```  

 ### 11. Agrupando Elementos com forEach
 ![image](https://github.com/user-attachments/assets/48fc3335-3646-41b1-aead-7a46ccbd8707)

 - Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
 - Passos para o código:
 - Criação de um array de objetos para os pedidos - Cada pedido terá as propriedades cliente, produto, e quantidade. Uso do método forEach - Para iterar sobre o array de pedidos e agrupar a quantidade total de produtos por cliente.
 - Criação de um objeto para armazenar as quantidades - Durante a iteração, vamos verificar se o cliente já existe no objeto e atualizar sua quantidade total.
 - Explicação do código:
 - totalPorCliente é o objeto que vai armazenar as quantidades totais de produtos por cliente.
 - No loop forEach, verificamos se o cliente já tem uma entrada no objeto totalPorCliente. Se já tiver, somamos a quantidade atual. Se não, criamos uma nova entrada com a quantidade inicial.
 - Saída esperada:

   
 bash
```        
{ 'João': 4, Maria: 3, Carlos: 4 }
```


-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
 
 bash
```       
node exercicio10.js

``` 

    - Isso vai agrupar as quantidades de produtos por cliente e exibir o resultado no terminal.

 ### 12. Atualizando um Array de Objetos
 ![image](https://github.com/user-attachments/assets/4c37d438-702e-49b9-8776-501495cc6152)

  - Objetivo:Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades..

  - Passos para o código:
  - Criação de um array de objetos para o estoque - Cada produto terá as propriedades produto, quantidade, e minimo.
  - Uso do método forEach - Para iterar sobre o array de produtos e verificar se a quantidade está abaixo do mínimo.
  - Atualizar a quantidade dos produtos - Se a quantidade for menor que o mínimo, duplicamos a quantidade.
  - Explicação do código:
  - estoque é o array de objetos que representa os produtos, suas quantidades atuais e o mínimo necessário.
  - O método forEach percorre cada item no array e verifica se a quantidade é menor que o minimo.Duplica a quantidade de produtos abaixo do mínimo.
  - O código também exibe uma mensagem indicando a atualização da quantidade de cada produto que foi alterado.
  - Saída esperada:
  - Quantidade de Camiseta atualizada para 10
  - Quantidade de Tênis atualizada para 6
    bash
       ```  

             [
               { "produto": "Camiseta", "quantidade": 10, "minimo": 10 },
               { "produto": "Calça", "quantidade": 15, "minimo": 10 },
               { "produto": "Tênis", "quantidade": 6, "minimo": 5 },
               { "produto": "Boné", "quantidade": 8, "minimo": 10 }
              ]
    ```  

-  Instruções de Execução:
- Clonar o repositório:
- Execute o código com o comando:
   bash
```       
node exercicio12.js

``` 
 
     

### 13. Implementando um Carrinho de Compras
![image](https://github.com/user-attachments/assets/e8c861c1-e44a-4455-bc89-d5f0d4c96ee7)

 - Objeto carrinho: Crie um objeto carrinho com uma propriedade itens, que é um
   array de objetos. Cada objeto dentro de itens deve representar um
  produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
  para calcular o valor total do carrinho.  

- Explicação do código:
- carrinho é um objeto que contém a propriedade itens, que é um array de objetos. Cada objeto dentro de itens representa um produto no carrinho, com suas respectivas propriedades nome, quantidade, e precoUnitario.
- O método forEach percorre cada item no array itens e calcula o valor total do carrinho, somando o valor de cada item (quantidade * precoUnitario) à variável valorTotal.
- Ao final, o valor total do carrinho é exibido no console.
  
- Saída esperada:
   
Valor total do carrinho: R$ 490.00

   -  Instruções de Execução:
   - Clonar o repositório:
   - Execute o código com o comando:
        
     bash  
     ```       
        node exercicio13.js

      ``` 

   - Neste exercício, criamos  um carrinho de compras e utilizou o método forEach para calcular o valor total dos itens no carrinho. Esta prática é útil para entender como manipular arrays e objetos em JavaScript, além de reforçar o uso de métodos de array para iterar e realizar cálculos.   

### 14. Encontrando o Maior Valor em um Array de Objetos
![image](https://github.com/user-attachments/assets/f6bb3b91-fe4f-4d98-8499-442e66ea9dfa)

 - Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

 -  Criamos  e manipulamos um objeto empresa com uma propriedade departamentos, e  usamos  for...in e for...of para iterar sobre os departamentos e seus funcionários.

 - Manipulando Objetos Complexos
 - Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionários. Use for...in e for...of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.
 - Passos para o código:

 - 1. Criação do objeto empresa: O objeto empresa terá uma propriedade departamentos, que é um array de objetos. Cada objeto dentro de departamentos representará um departamento, com uma propriedade nome e uma lista de funcionarios.
 -  2. Uso dos métodos for...in e for...of:** Itere sobre os departamentos e seus funcionários para exibir as informações desejadas.
 - Explicação do código:
 - empresa é um objeto que contém a propriedade departamentos, que é um array de objetos. Cada objeto dentro de departamentos representa um departamento com uma propriedade nome e uma lista de funcionarios.
 - O loop for...in é usado para iterar sobre os índices do array departamentos. Em cada iteração, obtemos um departamento e exibimos seu nome.
 - Dentro do loop for...in, usamos um loop for...of para iterar sobre os funcionários do departamento atual. Exibimos o nome e o cargo de cada funcionário.
 - Saida esperada:
    
     ``` 
 
       
       Departamento: Recursos Humanos
          Funcionário: Ana - Cargo: Gerente de RH
          Funcionário: Carlos - Cargo: Analista de RH
       Departamento: Tecnologia
         Funcionário: Julia - Cargo: Desenvolvedora Frontend
         Funcionário: Pedro - Cargo: Desenvolvedor Backend
       Departamento: Financeiro
         Funcionário: Mariana - Cargo: Contadora
         Funcionário: João - Cargo: Analista Financeiro
     ``` 



.    Instruções de Execução:
   - Clonar o repositório:
   - Execute o código com o comando:
    
      bash  
     ```       
        node exercicio14.js

      ```
   - Neste exercício, criamos   e manipulamos  objetos complexos em JavaScript, utilizando os loops for...in e for...of para iterar sobre estruturas de dados aninhadas. Esta prática é importante para entender como acessar e processar informações dentro de objetos e arrays, permitindo uma gestão eficaz de dados complexos.

 ### 15. Filtrando e Somando Valores
 ![image](https://github.com/user-attachments/assets/473bb9ee-d1d0-4962-93f8-417fe522b455)

 - Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
 - Explicação do Código:

   
 - Criação do Array de Transações: O array transacoes conterá objetos com as propriedades tipo e valor.
 - Uso do Método forEach: Itere sobre o array de transações para calcular o saldo final, somando os valores das transações do tipo entrada e subtraindo os valores das transações do tipo saída.
 - Explicação do Código:

  - transacoes é um array de objetos, onde cada objeto representa uma transação com as propriedades tipo (entrada ou saída) e valor.
   - A variável saldoFinal é inicializada com 0. Essa variável será usada para armazenar o saldo total após a soma das entradas e a subtração das saídas.
   - O método forEach percorre cada transação no array. Para cada transação, verifica-se o tipo e, se for entrada, adiciona o valor ao saldoFinal. Se for saída, subtrai o valor de saldoFinal.
   - Após a iteração, o saldo final é exibido no console.
   - Saída Esperada:

       
Saldo final: R$ 700.00

        Instruções de Execução:
   - Clonar o repositório:
   - Execute o código com o comando:
 
 
      
      bash  
     ```       
        node exercicio15.js

      ```
     - Se seguir esses passos, você deverá ver o saldo final calculado corretamente no console 

      

    
   
   
  
  
  
  
  

 

   






