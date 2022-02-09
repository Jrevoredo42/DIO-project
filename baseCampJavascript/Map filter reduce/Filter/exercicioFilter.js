function filtraPares(arr) {
    return arr.filter((item) => {
        return item % 2 === 0;
    })
}


const array = [1, 79, 18, 12, 24, 43];

console.log(filtraPares(array));
