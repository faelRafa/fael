//criando uma classe base
class Animal{
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }

    falar(){
        return`ola, meu nome é ${this.nome}.`;
    }
    }
    //criando uma classe derivada de animal
    class Cachorro extends Animal{
        constructor(nome, cor, raca){
            super(nome, cor);
        }
        latir(){
            return `Au au!`;
        }
    }
    //criando uma classe derivada de animal
    class Gato extends Animal{
        constructor (nome, cor, raca){
            super(nome, cor);
        }


        miar (){
            return`miau!`;

        }
    }
    //crindo um array de animais
    const animais =[
        new Cachorro("Rex", "Marrom", "Pastor Alemão"),
        new Gato ("Mia", "Preto", "Siamês"),
    ];
    //percorrendo o array e imprimindo o nome e a cor de cada animal
    for (const animal of animais){
        console.log(`ò animal "${animal.nome}"é ${animal.cor}.`);
    }
    //percorrendo o metodo "falar()" em cada animal
    for (const animal of animais){
        console.log(animal.falar());
    }
    //chamando o metodo "latir()" no cachorro
const cachorro = animais [0];
console.log(cachorro.latir());

//chamando o metodo "miar()"no gato
const gato = animais[1];
console.log(gato.miar());

