import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    state,
    state: { body, counter },
    setState,
  } = theContext;
  return (
    <p onClick={() => setState({ ...state, counter: counter + 1 })}>{body}</p>
  );
};
