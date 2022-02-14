import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            copo: 'agua',
            clock: 1000,
        }
    }
    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'suco',
            })
        }, 2000);
    }
  


        alteraCopo = () => {
        this.setState = ({
            copo: 'refrigerante',
        })
        // this.state.copo = 'refrigerante';
    }


    render(){
        const { clock, copo } = this.state;
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alteraCopo()}>{copo}</button>
            </div>
        )
    }

}


const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
