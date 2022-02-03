const myObj = {
    num1: 1,
    num2: 2,
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(obj,[3,7]);

 /* nesse caso o apply é chamado pra referenciar as duas propriedades do myObj
  na função soma, porém, diferentemente do all, o apply os passa contido em um array "[]" */