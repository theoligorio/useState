import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react'

function App() {

  function handleButtonClick() {
    alert('Clicou no botão');
  }

  function sum(a,b) {
    return a + b;
  }

  const [contador, setContador] = useState(0);

    //let contador = 0;
  function handleButtonContar(){
    // contador = contador +1;
    // contador++;
    setContador(contador+1);
  }

  return (
    <div className="App">
        <Header title="Meu primeiro componente React" />
        <Header title="Um componente com props" />
        <h2>
          Senac Campinas
          <div>Retorno da soma:{sum(5,6)}</div>
        </h2>
        <button onClick={handleButtonClick}>Click Me!</button>
        <Header title={contador} />
        <button onClick={handleButtonContar}>Contar</button>
    </div>
  );
}

export default App;
