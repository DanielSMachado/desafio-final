// Escrevendo as classes de um jogo

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }


// criando o metodo atacar

atacar(){
    let ataque;
        switch(this.tipo.toLowerCase()){
            case "mago":
                ataque = "Usou Magia";
                break;
            
            case "guerreiro":
                ataque = "Usou Espada";
                break;

            case "monge":
                ataque = "Usou Artes Marciais";
                break;
            
            case "ninja":
                ataque = "Usou Shuriken";
                break;
            
            default:
                ataque = "Ataque desconhecido";
        }

        return `${this.tipo} atacou, usando ${ataque}!`;
}
}

let heroi1 = new Heroi ("Daniel", 40, "mago");
let heroi2 = new Heroi ("Vedita", 32, "guerreiro");
let heroi3 = new Heroi ("Goku", 35, "monge");
let heroi4 = new Heroi ("Magimbu", 28, "chapolim");

console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());
