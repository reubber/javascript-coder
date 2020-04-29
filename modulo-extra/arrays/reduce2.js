const alunos = [
  { nome: "kiko", nota: 7.3, bolsista: true },
  { nome: "luba", nota: 9.2, bolsista: true },
  { nome: "baucas", nota: 9.8, bolsista: false },
  { nome: "ana", nota: 8.7, bolsista: false },
];

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));
