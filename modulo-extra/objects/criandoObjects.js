// usando notação literal
const obj1 = {
  id: 01,
  tipo: "rubber",
  modelo: "parrot",
};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// funcoes contrutoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Chaveiro", 9.0, 0.1);
const p2 = new Produto("Notebook", 2400, 0.15);
console.log(
  "o desconto do " + p1.nome + ": " + p1.getPrecoComDesconto(),
  "o desconto do " + p2.nome + ": " + p2.getPrecoComDesconto()
);

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("João", 8000, 3);
const f2 = criarFuncionario("maria", 11122, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//uma funcao famosa que retorna object
const fromJSON = JSON.parse('{"info": "Sou um JSON"');
console.log(fromJSON.info);
