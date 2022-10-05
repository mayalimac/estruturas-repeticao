//Desenvolva um código e crie nele:

//- um objeto com, no mínimo, três propriedades;
//- um array de tamanho três no mínimo;
//- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.


const sorveteria = {
    produto: 'sorvete',
    sabor: 'chocolate',
    recipiente: 'casquinho'
}

let sabores = ['baunilha', 'chocolate', 'morango','abacaxi']

for (let prop in sorveteria) {
    console.log(prop + ': ' + sorveteria[prop])
}


for (let sabores of produto ) {
    console.log(sabores)
}