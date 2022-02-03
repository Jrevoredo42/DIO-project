const pessoa = {
    firstName: 'joao',
    lastName: 'Revoredo',
    id: 42,
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    },
    getId: function(){
        return this.id; //o this nesses dois casos representam o escopo do objeto pai(pessoa)
    }
}

console.log(pessoa.getId());

console.log(this) //referencia o escopo global fora da função (o objeto window)

(function(){
    console.log(this); // o this nesse caso referencia o objeto da função (function)

})();

