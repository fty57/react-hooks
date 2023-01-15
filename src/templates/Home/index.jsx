import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus('pending');

    return asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response);
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, result, error, status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 300));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export const DisplayCounted = forwardRef(function DisplayCounted(
  { counted },
  ref,
) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div
      ref={divRef}
      style={{ height: '250px', width: '250px', overflowY: 'scroll' }}
    >
      {counted.map((c) => {
        return (
          <p onClick={handleClick} key={`c-${c}`}>
            {c} +++ {rand}
          </p>
        );
      })}
    </div>
  );
});
