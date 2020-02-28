console.log(typeof String)

console.log(typeof Array)

console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('onibus'.reverse())


function Aula(nome, videoID) {

    this.nome = nome,
        this.video = videoID
}
