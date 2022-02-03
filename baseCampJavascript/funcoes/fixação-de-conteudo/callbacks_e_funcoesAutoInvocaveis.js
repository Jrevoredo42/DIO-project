/* constante que recebe função anonima e, por sua vez, recebe duas variáveis como valores
 a serem passadas como parâmetro, com outra função chamada dentro dela
*/
const calc = function(operacao,num1,num2){
    return operacao(num1,num2);
}

// constante que recebe função anonima de soma
const soma = function(num1,num2){
    return num1+num2;
}

//constante que recebe função anonima de subtração
const sub = function(num1,num2){
    return num1-num2;
}

/* constantes que recebe a função calc, com suas respectivas passagens de parâmetro contendo 
uma função e os dois valores a serem calculados
*/

const resultSoma = calc(soma,3,2);
const resultsub = calc(sub,5,3);

console.log(`O resultado da soma é ${resultSoma}, e o resultado da subtração é ${resultsub}`);