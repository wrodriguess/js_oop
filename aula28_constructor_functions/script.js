function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function(){
        console.log(`${this.nome} atirou a ${this.arma}`);
    }
}

let ninja1 = new Ninja('Sarutobi', 'bastão');
console.log(ninja1);
ninja1.atirarArma();

let ninja2 = new Ninja('Sakura', 'kunai');
console.log(ninja2);
ninja2.atirarArma();