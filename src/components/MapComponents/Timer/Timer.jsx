import React, { useEffect } from 'react';

function Timer({ counter, setCounter, counterStop }) {
  useEffect(() => {
    const interval = setInterval(() => setCounter(counter + 1), 1000);

    if (counterStop) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [counter, counterStop]);

  return (
    <p className="text-2xl text-center font-bold">
      Time Elapsed:
      {counter}
      s
    </p>
  );
}

export default Timer;
