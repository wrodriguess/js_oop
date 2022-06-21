let carro = {
    tipo: "SUV"
}

// Aqui já ira exibir portas, pois o javascript carrega o código antes de exibir
// console.log(carro)

// Adc propriedade a um objeto já criado
carro.portas = 4;
console.log(carro.portas)


// Adc método a um objeto já criado
carro.acelerar = function(){
    console.log('VRUUUM')
}

//Executando o método
carro.acelerar()