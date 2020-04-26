const produtos = [
  { nome: "iphone", preco: 3000, fragil: true },
  { nome: "S10", preco: 2999, fragil: true },
  { nome: "yamaha guitar", preco: 1400, fragil: true },
  { nome: "yamaha bass", preco: 1100, fragil: true },
  { nome: "nokia antigão", preco: 950, fragil: false },
];

let caro = (produtos) => produtos.preco >= 1500;
let fragil = (produtos) => produtos.fragil;

console.log(produtos.filter(caro).filter(fragil));
