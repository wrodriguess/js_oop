let pessoa = {
    nome: "Matheus",
    idade: 27,
    falar(){
        console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    },
    aniversario(){
        this.idade++
    }

}

pessoa.falar()
pessoa.aniversario()
pessoa.aniversario()
pessoa.falar()


let calculadora = {
    numero1: 56,
    numero2: 965,
    resultado: 0,
    somar(){
        return this.numero1 + this.numero2
    },
    subtracao(n1, n2){
        this.resultado = parseFloat(n1) - parseFloat(n2);
    }

}

console.log(calculadora.somar())
calculadora.subtracao(60, 4);
console.log(calculadora.resultado)