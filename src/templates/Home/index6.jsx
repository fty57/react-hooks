import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  return (
    <div>
      <p>OI</p>
    </div>
  );
};
