import { useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <p onClick={() => actions.increase()}>OI</p>
    </div>
  );
};
