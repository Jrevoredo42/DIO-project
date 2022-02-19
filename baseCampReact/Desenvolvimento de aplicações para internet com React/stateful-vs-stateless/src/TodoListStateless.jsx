// importação do react e do useState do hooks;
import React, { useState } from 'react'; 

//Componente principal;
const TodoListFunctional = () => { 

/* declaração do UseState do hooks, sendo:
    - Primeiro o item a ser declarado como estado (array de intems);
    - Depois o estado que vai ser usado para alteração (setItems);
    - atribuição ao useState que vai receber o valor do state ( "()" );
    - valor do state (array de items preenchido);
 */
    const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia']); 

// componente que adiciona itens
    const addItem = (item) => { 
        setItems([...items,item]);
    }

// componente que remove itens
    const removeItem = () => { 
        setItems([...items.slice(1)])
    }

    /* retorno do componente principal, que:
      - preenche a lista utilizando método map de js;
      - retorna pelo map os items da lista dentro da tag li;
      - contém dois botões que recebem os componentes de adicionar e remover items;
     */
    return ( 

        <div>
            <p>Lista de tarefas</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Abóbora')}>adicionar item</button>
            <button onClick={() => removeItem()}>Remover item</button>
        </div>

    );
}

export default TodoListFunctional;