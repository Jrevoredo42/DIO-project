import React from 'react';

const customers = [
    {
      id: 1,
      nome: 'John Revoredson',
    },
  
    {
      id: 2,
      nome: 'Giovanna Revoredson'
    },
  
    {
      id: 3,
      nome: 'Haroldsonson Bars'
    },
  
    {
      id: 4,
      nome: 'Katrina Cavalcant'
    },
  
  ]

  const ListasEChaves = () => {

    const renderCustomers = (customer, index) => {
        return(
          <li>{customer.nome}</li>
        )
    }  



      return(
          <div>
        <p>Digital innovation One</p>
        <p>Seja bem vindo a aula de Listas e chaves</p>
            <div>
                <ul>
                {customers.map(renderCustomers)}
                </ul>
                
            </div>
          </div>
      )
  }

  export default ListasEChaves;