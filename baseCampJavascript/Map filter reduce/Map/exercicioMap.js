const cupcake = {
    value: 3,
}

const cake = {
    value: 5,
}

function mapComThis(arr, thisArg) {
    return arr.map((item) => {
       return  item * this.value;
    }, thisArg);

}

const numbs = [1,2];

console.log('this -> cupcake', mapComThis(numbs,cupcake));
console.log('this -> cake', mapComThis(numbs,cake));