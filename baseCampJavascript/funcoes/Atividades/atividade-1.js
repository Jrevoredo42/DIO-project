const alunos = [
    {
        nome: 'João',
        nota: 8,
        turma: '4TI',
    },
    {
        nome: 'Clara',
        nota: 10,
        turma: '4TI',
    },
    {
        nome: 'Julia',
        nota: 5.5,
        turma: '4TMA',
    },
    {
        nome: 'Joyce',
        nota: 4.3,
        turma: '3TI'
    },

]

var getNota = function ({nota}){
    return nota;
}

function mediaAlunos (arrayAlunos, media){
        
        let aprovados = [];

    for(let i = 0; i< arrayAlunos.length; i++){
        if(getNota(alunos[i]) >=media){
            aprovados.push(alunos[i])
        }
    }

    console.log(aprovados);
}

mediaAlunos(alunos, 6);