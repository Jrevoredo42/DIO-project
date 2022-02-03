function findMax(){ //função que nao tem parâmentros
    let max = -Infinity; // variavel que pode ser valores menores que zero

       for(let i = 0;  i< arguments.length; i++){ //for com tamanho do array de parametros passados
            if(arguments[i] > max){  // condição que adiciona valor a variavel caso parametro seja maior que o tamanho dela
                max = arguments[i];
            }
        }
        return max;
}

function showArgs(){
    return console.log(`${arguments}`);
}
showArgs(1,2,3,[6,7,8],"foca");
