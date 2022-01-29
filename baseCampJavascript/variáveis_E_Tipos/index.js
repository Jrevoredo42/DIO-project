var firstName = 'João';
var lastName = 'Revoredo';

if(firstName === 'João'){
    var firstName = 'Pedro';
    let lastName = 'Silva';

    console.log(`O last name de escopo local do IF é ${lastName}`);
}

console.log(`porém o Last Name de escopo global é ${lastName}`)