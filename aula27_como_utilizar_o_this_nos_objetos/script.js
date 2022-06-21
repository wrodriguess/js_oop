// this é utilizado para alterar ou obter valores de um objeto
let pessoa = {
    nome: 'Matheus',
    idade: 29,
    apresentar(){
        // Obter valores dos atributos
        console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos.`)
    },
    aniversario(){
        // Alterar valor do atributo
        this.idade++
    }
}

pessoa.apresentar()
pessoa.aniversario()
pessoa.apresentar()


let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma: function(){
        console.log("Atirou a " + this.arma)
    }
}
let ninja2 = {
    classe: 'profissional',
    arma: 'kunai',
    atirarArma: function(){
        console.log("Atirou a " + this.arma)
    }
}

ninja.atirarArma()
ninja2.atirarArma()
