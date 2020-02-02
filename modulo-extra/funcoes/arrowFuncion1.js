//funcao nomeada

let dobro = function (a) {
    return 2 * a
  }
  
  //function arrow
  
  triplo = (a) => {
    return 3 * a
  }
  
  dobro = a => 2 * a //parametro e return implicito
  
  function Pessoa(){
    this.idade = 0
  
    setInterval(() =>{
      this.idade++
      console.log(this.idade)
    }, 1000)
  }
  
  new Pessoa