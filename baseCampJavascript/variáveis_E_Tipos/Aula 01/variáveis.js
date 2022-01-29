var a = 1;
var b = 2;

if(a === 1){   
    var a = 11; // esse escopo é global
    let b = 22; // esse escopo está dentro do bloco IF

        console.log(a) // 11
        console.log(b) // 22


}

console.log(a); //11
console.log(b); //2