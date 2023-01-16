import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

// Tem-se um componente pai que adiciona coisas aos filhos
const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s, cuidado: '123' });
    return newChild;
  });
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => {
    setIsOn((s) => !s);
  };

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnedButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => {
  return <p {...s}>{children}</p>;
};

export const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <TurnedOn>
          <P>Ativo: ON</P>
        </TurnedOn>
        <TurnedOff>
          <P>Desativo: OFF</P>
        </TurnedOff>
        <TurnedButton {...s} />
      </div>
    </TurnOnOff>
  );
};
