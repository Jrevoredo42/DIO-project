function mapSemThis (arr){ // fumção que roda o map e recebe um array
    return arr.map((item) => { // map chamado pelo array que recebe a função a multiplicar cada item enviado como parametro
        return item * 2; // multiplicação do item por 2 
    });
}

const numbs = [2, 4, 6, 8, 10]; // array de valores a serem multiplicados com o item no map

console.log(mapSemThis(numbs)); //chama map em this
console.log(numbs) //array original nao foi alterado