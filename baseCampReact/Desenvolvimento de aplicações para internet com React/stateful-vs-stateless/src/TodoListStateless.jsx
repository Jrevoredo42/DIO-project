import React, { useState } from 'react';

const TodoListFunctional = () => {

    const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia']);
    const addItem = (item) => {
        setItems([...items,item]);
    }

    const removeItem = () => {
        setItems([...items.slice(1)])
    }

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