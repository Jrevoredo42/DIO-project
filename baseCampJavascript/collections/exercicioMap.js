const getAdmins = (map) => {

    let admins = [];

    for([key, value] of map){

        if(value === 'Admin'){
            admins.push(key);
        }
    }
return console.log(admins); 
}

const membros = new Map();

    membros.set('Leonardo', 'Admin');
    membros.set('Revoredo', 'Admin');
    membros.set('rafael', 'usuario');
    membros.set('Agreles', 'usuario');

console.log(getAdmins(membros));
