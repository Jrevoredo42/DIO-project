function calculaIdade(anos){

    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

const pessoa1 = {
    nome: 'Giovanna',
    idade: 22,
    id: 89,
}

const pessoa2 = {
    nome: 'rafael',
    idade: 21,
    id: 34,
}

console.log(calculaIdade.call(pessoa1, 20));