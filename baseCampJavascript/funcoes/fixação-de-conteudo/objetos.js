//Objeto usuário com seus atributos
const user = { 
    age: 42,
    displayName: 'Jrevoredo',
    fullName: {
        firstName: 'João',
        lastName: 'revoredo'
    },
    id: 1957
}
//função que pega id do usuario com desestruturação
function getId({id}){
    return `${id}`;
}
//função que pega objeto de dentro de objeto usando desestruturação
function getFullName({fullName:{firstName: first, lastname: last}}){
    return `${first} ${last}`;
}
//chamadas de funções utilizando objetos como paramentros
getId(user);
getFullName(user);