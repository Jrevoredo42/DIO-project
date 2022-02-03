const retornaNomes = function(){
    return this.nome; //vai retornar valor this.nome da função. ainda nao definida
}

 /* Utilizando o bind, a variavel let vai receber o clone da funçao que retorna o this.nome, 
 que por sua vez está sendo definido na chamada da função, na passagem de parâmetro */

 let bruno = retornaNomes.bind({nome: 'Bruno'});


bruno(); //vai retornar 'Bruno'