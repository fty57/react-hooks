import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Reverso {reverseClass}
        </button>

        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      </header>
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
