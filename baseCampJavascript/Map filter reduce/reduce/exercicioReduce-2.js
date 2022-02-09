const lista = [
    {
        nome: 'sabao em pó',
        preco: 7,
    },
    {
        nome: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
   return lista.reduce((prev, current) =>{
    return prev - current.preco;
   }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));
