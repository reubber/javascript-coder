const alunos = [
  { nome: "kiko", nota: 7.3, bolsista: true },
  { nome: "luba", nota: 9.2, bolsista: true },
  { nome: "baucas", nota: 9.8, bolsista: false },
  { nome: "ana", nota: 8.7, bolsista: false },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  });
