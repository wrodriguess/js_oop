// As propridades podem (mas não é recomendado) ter mais de uma palavra, neste caso é preciso coloca-la entre aspas
// Caso precise utilizar mais de uma palavra utilize camelCase
let carro = {
    portas: 4,
    cor: "verde",
    "tem blindagem": true,
    tamanhoVeiculo: "Grande"
};

console.log(carro)
// console.log(carro.tem blindagem) Não funciona
console.log(carro["tem blindagem"]) // Só consigo acessar essa propriedade com chaves de array