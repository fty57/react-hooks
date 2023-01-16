import { Children, cloneElement, useState } from 'react';

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

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => {
    setIsOn((s) => !s);
  };

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);
const TurnedOff = ({ isOn, children }) => (isOn ? null : children);
const TurnedButton = ({ isOn, onTurn, ...props }) => {
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
      <TurnedOn>
        <P>Ativo: ON</P>
      </TurnedOn>
      <TurnedOff>
        <P>Desativo: OFF</P>
      </TurnedOff>
      <TurnedButton {...s} />
    </TurnOnOff>
  );
};
