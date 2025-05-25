const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário
rl.question("Digite um número: ", function(input) {
  const valor = parseInt(input);
  const antecessor = valor - 1;

  console.log("O antecessor de " + valor + " é " + antecessor);

  rl.close(); // Fecha a interface após a resposta
});