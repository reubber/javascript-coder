Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "iphone", preco: 3000, fragil: true },
  { nome: "S10", preco: 2999, fragil: true },
  { nome: "yamaha guitar", preco: 1400, fragil: true },
  { nome: "yamaha bass", preco: 1100, fragil: true },
  { nome: "nokia antigão", preco: 950, fragil: false },
];

let caro = (produtos) => produtos.preco >= 1500;
let fragil = (produtos) => produtos.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
