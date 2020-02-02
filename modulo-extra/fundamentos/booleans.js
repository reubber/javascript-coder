let isAtivo = false
isAtivo = true

isAtivo = 1

console.log(!!isAtivo)
console.log(!true) //negação de true

console.log(`
os verdadeiros...
`)

console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))

console.log(`
os falsos...
`)

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || null || 0 || 'rbbr'))

let nome = 'teste'
console.log('' || 'desconhecido')
console.log(nome || 'desconhecido')
