import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) =>
        console.log(r).catch((e) => console.log(e.name, ':', e.message)),
      );
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          setCounter - 10
        </Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
          setCounter - 100
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          asyncIncrease
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          asyncError
        </Button>
      </div>
    </div>
  );
};
