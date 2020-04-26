const carrinho = [
  '{"nome": "ultrabook", "preco": 3000 }',
  '{"nome": "ps4", "preco": 1300 }',
  '{"nome": "mochila", "preco": 250.00 }',
  '{"nome": "god of war", "preco": 99.00 }',
];

var toObject = (json) => JSON.parse(json);
var apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(toObject).map(apenasPreco);
console.log(resultado);
console.log(carrinho);
