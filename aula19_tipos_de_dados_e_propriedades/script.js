let maquina = {
    material: "Aço inox",
    equipamentos: ["motor", "freio", "esteira", "cilindro"],
    vaiMontada: false,
    numeroDeMotores: 1
}

console.log(maquina)
// console.log(maquina.equipamentos)

for(let i = 0; i < maquina.equipamentos.length; i++){
    console.log(maquina.equipamentos[i])
}

if(!maquina.vaiMontada){
    console.log('O comprador precisa montar a máquina')
}