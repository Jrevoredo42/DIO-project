function verificaPalindromo(string){
    if(!string) return;

       return string.split('').reverse().join('') === string

}

console.log(verificaPalindromo('ovo'))


function verificaPalindromo2(string){
    for(let i =0; i< string.lenght; i++){
        if(string[i] !== string[string.lenght -1 -i]){
            return false;
        }
    }
    return true;
}

/*
function verificaPalindromo (string){

    let verification = [];
     verification = string.split('');
     
     console.log(verification);

    let ARRAYSTRINGINVERTIDO = verification.map(function(){

        for(let i = verification.lenght; i >= 0; i--){
              
            return verification[i];
        }
    })
        return console.log(ARRAYSTRINGINVERTIDO)


        for(let i = 0; i<verification.lenght; i++){

             if(verification[i] !== ARRAYSTRINGINVERTIDO[i]){

                console.log(`${string} não é um palíndromo`);

                    break;   
            }else{

            }

        }
*/
