const pessoa = {
    saudacao: 'bom dia',
    falar(){
      console.log(this.saudacao)
    }
  }
  
  const falar = pessoa.falar()
  
  falar() //conflito entre paradigma funcional e OO
  
  //usando bind 'metodo responsavel por amarrar um determinado obj pra ele ser o dono da execucao sempre q for chamado
  
  const pessoaFala = pessoa.falar.bind(pessoa)
  pessoaFala()