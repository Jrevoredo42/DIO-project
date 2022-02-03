function exemploDeForIn(obj){
    for(prop in obj){
     console.log(prop); //retorna propriedades do objto
    }
}

const pessoa = {
    nome: 'joao',
    idade: 21,
    cidade: 'Garanhuns'
}

exemploDeForIn(pessoa);


function exemploDeForInProps(obj){
    for(prop in obj){
     console.log(obj[prop]) // retorna valor das propriedades
    }
}

exemploDeForInProps(pessoa);