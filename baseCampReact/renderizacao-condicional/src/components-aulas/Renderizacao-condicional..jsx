import React from 'react'

const ButtonA = <button>Historico de clientes</button>
const ButtonB = <button>Cadastrar cliente</button>

const hasCustomer = true;

{/* Renderização simples:
<div className = 'App'>
        <p>Digital innovation One</p>
        <p>Seja bem vindo a aula de introducao a React</p>
        {ButtomA}
        {ButtomB}
      </div>

*/}


{/* renderização condicional com operador ternário:
  {hasCustumer ? (
           <div>
           Clique no botão abaixo para visualizar o historico dos clientes
           <br/><br/>
           {ButtomA}
         </div>      
        ) : (
         <div>
           Clique no botão abaixo para cadastrar o cliente
           <br/><br/>
           {ButtomB}
         </div>
        )}
*/}

const RenderConditional = () => {


{/* Renderização ternária com blocos de renderização separados: */}
  const ShowHistory = () => (
    <div>
      Clique aqui para mostrar o histórico
      <br/><br/>
      {ButtonA}
    </div>
  )

  const AddCustomer = () => (
    <div>
      Clique aqui para adicionar um novo cliente
      <br/><br/>
      {ButtonB}
    </div>

  )
  {/* Componente que tem condição pra evitar de renderizar caso apresente false (nao tenha cliente) */}
  const ShowCustomer = () => {

   if(!hasCustomer) return null

  return(
    <div>
      <h1>Nome do Cliente: John Revoredson</h1>
    </div>
  )};

    return(
      <div className = 'RenderConditional'>
        <p>Digital innovation One</p>
        <p>Seja bem vindo a aula de introducao a React</p>
        {hasCustomer ? ShowHistory() : AddCustomer()}
        <div>
          {ShowCustomer()}
        </div>
      </div>
    )
  }

export default RenderConditional;