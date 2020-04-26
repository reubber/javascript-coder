Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{"nome": "ultrabook", "preco": 3000 }',
  '{"nome": "ps4", "preco": 1300 }',
  '{"nome": "mochila", "preco": 250.00 }',
  '{"nome": "god of war", "preco": 99.00 }',
];

var toObject = (json) => JSON.parse(json);
var apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(toObject).map2(apenasPreco);
console.log(resultado);
