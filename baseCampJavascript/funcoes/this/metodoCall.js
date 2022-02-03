const pessoa = {
    nome: 'João',
} 

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa); // nesse caso reverencia o this.nome do obj pessoa através do metodo call + pasagem de parâmetro

const myObj = {
    num1: 1,
    num2: 2,
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(obj,(3, 7)); // nesse caso o call é chamado pra referenciar as duas propriedades do myObj na função soma