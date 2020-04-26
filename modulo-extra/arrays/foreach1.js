const aprovados = ["reubber", "raul", "ryan"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado, i) => console.log(`${i + 1} - ${aprovado}`);

aprovados.forEach(exibirAprovados);
