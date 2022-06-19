let pessoa = {
    nome: "Matheus",
    falar: function(){
        console.log('Hello World, fala dev')
    },
    somar: function(n1, n2){
        return n1+n2
    }
}

console.log(pessoa)
pessoa.falar()
console.log(pessoa.somar(2, 5))