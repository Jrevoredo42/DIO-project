
 
function compare(num1, num2){
    
    /*
       Condição que retorna valor igual ou valor diferente
    */

    (num1 === num2) ? console.log(`os valores ${num1} e ${num2} são iguais`)  
    : console.log(`os valores ${num1} e ${num2} não são iguais`);
   
}

function ReturnToCompareAndSum(){
    
/*
    Funlão que retorn soma e se é maior ou menor

*/

    let v1 = prompt("digite valor 1");
    let v2 = prompt("digite valor 2");

        num1 = parseInt(v1);
        num2 = parseInt(v2);

     result = num1+num2;

switch (result){     

    /*

Caso 1: "Os números não são iguais,
sua soma é menor que 10;

Caso 2: Os números não sao iguais, sua soma é maior que
10 e menor que 20;

caso 3: Os números não são iguais, sua soma é maior que 10 e maior que 20;

*/
    
    case resultado <10 :
    console.log(`${compare(v1,v2)}. Sua soma é ${resultado}, que é menor que 10 e menor que 20`);
        break;

    case resultado > 10 && resultado < 20:
         console.log(`${compare(v1,v2)}. Sua soma é ${resultado}, que é maior que 10 e menor que 20`);
            break;
    
    default: 
        console.log(`${compare(v1,v2)}. Sua soma é ${resultado}, que é maior que 10 e maior que 20`);
            break;
    
    
}

}

ReturnToCompareAndSum();


