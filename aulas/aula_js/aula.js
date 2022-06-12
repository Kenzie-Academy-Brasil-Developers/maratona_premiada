const nome = "Luiz Paulo";
let idade = 18;
const isFacilitador = true;

// OBJETOS
const facilitado01 = {
  nome: "Luiz Paulo",
  isFacilitador: true,
};

const facilitado02 = {
  nome: "Nicole",
  isFacilitador: true,
};

//ARRAYS

const notas = [10, 8, 9.5, 6];
const alunos = ["Luiz", "Nicole", "João"];

// CONDICIONAIS

// if (idade >= 18) {
//   console.log("você pode tirar CNH");
// } else {
//   console.log("você NÃO pode tirar CNH");
// }

//FUNÇÕES

function testeIdade(idade) {
  if (idade >= 18) {
    return "você pode tirar CNH";
  } else {
    return "você NÃO pode tirar CNH";
  }
}

console.log("vou iniciar o for");

for (let i = 0; i < 10; i++) {
  console.log(`o mei I agora é:${i}`);
}

console.log("saiu do for");
