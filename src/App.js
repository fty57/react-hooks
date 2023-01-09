import { createContext, useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line react/prop-types
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState,
    contextState: { body, counter },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
