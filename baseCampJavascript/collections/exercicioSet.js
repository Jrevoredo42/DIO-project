function elementosUnicos(arr) {
	let unicoS = new Set(arr);
	return [...unicoS];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(elementosUnicos(arr));