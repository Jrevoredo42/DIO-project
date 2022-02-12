/*Finalmente, o time da Universidade conseguiu a classificação para a Final Nacional da Maratona de Programação da SBC. Os três membros do time e o técnico estão ansiosos para bem representar a Universidade, e além de treinar muito, preparam com todos os detalhes a sua viagem a São Paulo, onde será realizada a Final Nacional.

Eles planejam levar na viagem todos os seus vários equipamentos eletrônicos: celular, tablet, notebook, ponto de acesso wifi, câmeras, etc, e sabem que necessitarão de várias tomadas de energia para conectar todos esses equipamentos. Eles foram informados de que ficarão os quatro no mesmo quarto de hotel, mas já foram alertados de que em cada quarto há apenas uma tomada de energia disponível.

Precavidos, os três membros do time e o técnico compraram cada um uma régua de tomadas, permitindo assim ligar vários aparelhos na única tomada do quarto de hotel; eles também podem ligar uma régua em outra para aumentar ainda mais o número de tomadas disponíveis. No entanto, como as réguas têm muitas tomadas, eles pediram para você escrever um programa que, dado o número de tomadas em cada régua, determine o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.

Entrada
A entrada consiste de uma linha com quatro números inteiros T1, T2, T3, T4, indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).

Saída
Seu programa deve produzir uma única linha contendo um único número inteiro, indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.

 
Exemplo de Entrada	Exemplo de Saída
2 4 3 2

8

6 6 6 6

21

2 2 2 2

5

 */

// let linha = [6,5,4,3];

// const input = `2 4 3 2`;
// var lines = parseInt(input.split('\n'));


const input = `2 4 3 2`;
let lines = input.split("\n");


let line = parseInt(lines.shift().split(' '));


function somaArray(arr){
    return arr.reduce((prev,current) => {
        return prev + current;
    });
}

function calculaTomadas(arr){

    let valorSomado = somaArray(arr);
    return console.log(valorSomado - 3);
  
  }
if(line >= 2 && line <= 6){
    print(calculaTomadas(line));
}



/* Outra solução que foi dada inválidas*/
// const input = `2 4 3 2`;
// var lines = input.split('\n');

// const t = lines.shift().split(' ').map(Number).reduce( (n1,n2)=>n1+n2);
// console.log(t-3);


