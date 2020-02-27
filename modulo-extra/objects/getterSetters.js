const sequencia = {
    _valor: 1, //convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this.valor = valor
        }
    }
}