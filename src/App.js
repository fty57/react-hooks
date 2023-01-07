import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate = executa toda vez que o componente atualiza
  /*   useEffect(() => {
    console.log('componentDidUpdate');
  }); */

  // componentDidMount = executa quando o componente foi montado na tela, executado apenas uma vez
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // Para limpar os addEventListener
    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>C1: {counter}</h1>
      <h1>C2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

/* class App extends Component {
  state = {
    reverse: true,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button type="button" onClick={() => this.handleClick()}>
            Reverso {reverseClass}
          </button>
        </header>
      </div>
    );
  }
} */

export default App;
