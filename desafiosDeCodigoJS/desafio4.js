// let linha = [6,5,4,3];

// const input = `2 4 3 2`;
// var lines = parseInt(input.split('\n'));

// function somaArray(arr){
//     return arr.reduce((prev,current) => {
//         return prev + current;
//     });
// }

// function calculaTomadas(arr){

//     let valorSomado = somaArray(arr);
//     return console.log(valorSomado - 3);
  
//   }
// if(line >= 2 && line <= 6){
//     console.log(calculaTomadas(line));
// }
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




// const input = `2 4 3 2`;
// var lines = input.split('\n');

// const t = lines.shift().split(' ').map(Number).reduce( (n1,n2)=>n1+n2);
// console.log(t-3);

// let t1 = 2;
// let t2 = 4;
// let t3 = 3;
// let t4 = 2;
// console.log(`${t1} ${t2} ${t3} ${t4}`);
// console.log(t1 + ' ' + t2 + ' ' + t3 + ' ' + t4)