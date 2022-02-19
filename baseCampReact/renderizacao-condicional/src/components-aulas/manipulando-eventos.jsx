import React from 'react'

const showEvent = (e) => {
    console.log('evento clicado')
    console.log(e)
}



const Botao = <button onClick={showEvent}>Mostrar evento</button>

const ManipulandoEventos = () => {

    const name = 'DIO';

    const HandleChange = (e) => {
        const { value } = e.target;
        console.log(value)
    
    }

    return(
        <div>
          <p>Digital innovation One</p>  
          <p>Bem vindo a aula de manipulação de eventos</p>  
            <input onChange={HandleChange} />
            {Botao}            
        </div>
    )
}

export default ManipulandoEventos;
