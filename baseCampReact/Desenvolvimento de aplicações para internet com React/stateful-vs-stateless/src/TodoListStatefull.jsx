import React, { Component } from 'react';

class TodoListStatefull extends Component {
    constructor(props) { // constructor que recebe as props
        super(props); //super que instancia as props
        this.state ={ // this state que vai referenciar as props
            items: [ // array de itens (em forma de estado), imutáveis
                'tomate',
                'alface',
                'melancia'
            ]
        }
    }
addItem = (item) => { //componete que adiciona o item na lista

    this.setState({ items: [...this.state.items, item] })
    
}

    removeItems = () => {
        
        this.setState({ items: [...this.state.items.slice(1)] })

    }

render() {
    const { items } = this.state;
    return (
        <div>
            <p>Minha Lista</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={() => this.addItem('Abóbora')}>adicionar item</button>
            <button onClick={() => this.removeItems()}>Remover item</button>
        </div>
    )
  }

}

export default TodoListStatefull