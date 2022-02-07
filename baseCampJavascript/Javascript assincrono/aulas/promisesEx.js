async function resolved(){ // função que é iniciada com a declaração de assincronicidade
    const myPromise = new Promise ((resolve, reject) =>{ // constante que se declara como promise, recebendo os parametros pra caso a mesma seja resolvido, e caso seja rejeitado
        window.setTimeout(() => { // método que executa ação, depois de passados 2 segundos, retornando o resolvido
            resolve(console.log('resolvido'));
        }, 2000);
    });
    let result;

    try{ // try utilizado para executar o await

        /* await, palavra chave que demonstra que o codigo deve processar a promisse 
        para, somente depois, prosseguir com o codigo*/

      result = await myPromise 
      .then((result) => result + 'passando pelo then') // primeiro then que o codigo deve passar depois de resolver a promise
      .then ((result) => result + 'e agora acabou') // segundo then que o codigo deve passar depois de receber a promise

    }
    catch(err){ // catch caso ocorra algum erro
        result = err.menssage;
    }
    return result; //await que retorna para prosseguir com o codigo
}


