 function validaArray (arr, num){
     try{
        if (!arr && !num) throw new ReferenceError('envie os parametros');
     
        if(typeof arr !== 'object') throw new TypeError ('Array precisa ser do tipo objeto');
   
        if (typeof num !== 'number') throw new TypeError('valor precisa ser do tipo number')
   
        if (arr.length !== num) throw new RangeError('Tamanho invalido');

     }
     catch(e){
      if(e instanceof ReferenceError)  {
          console.log(`Este erro é um  ${e.name}`);
          console.log(e.message);
            
      }
     else if(e instanceof TypeError)  {
        console.log(`Este erro é um  ${e.name}`);
        console.log(e.message);
    }
    else if(e instanceof RangeError)  {
        console.log(`Este erro é um  ${e.name}`);
        console.log(e.message);
    }
    else{
        console.log(`O tipo de erro não foi esperado ${e}`);
        console.log(e.message);
    }

     }
 }

 console.log(validaArray(5,5));