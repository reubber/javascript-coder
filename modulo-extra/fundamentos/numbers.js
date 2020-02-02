const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const av1 = 9.1
const av2 = 6.9

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))

console.log(typeof av1)


//alguns cuidados

console.log(7 / 0)
console.log('show' * 2)

//funcao math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)