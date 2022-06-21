function criarCarro(modelo, portas, aro, tetoSolar){
    return{
        modelo,
        portas,
        aro,
        tetoSolar,
        ligarCarro(){
            console.log('* ligou *')
        },
        temTetoSolar(){
            if(tetoSolar){
                console.log('Tem teto solar')
            }else{
                console.log('Não tem teto solar')
            }
        },
    }
}

let ferrari = criarCarro('Enzo', 2, 22, true)
console.log(ferrari)
ferrari.ligarCarro()
ferrari.temTetoSolar()
