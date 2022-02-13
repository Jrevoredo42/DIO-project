import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Componentes/Button'

function sum(a,b){
  alert(a+b);
}

function primeiroJSX(){
  return(
    <div className='App'>
      <h1>João Revoredo </h1>
        <h2>Soma: {sum(10,20)}</h2>
    </div>
  )
}

function App(){
  return(
    <div className ='App'>
       {/* exemplo de primeira utilização do jsx, com um componente */}
    <Button onClick={() => sum(10,20)} name='João Revoredo' />
    
    </div>
  )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
