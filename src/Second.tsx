import { useEffect, useState } from "react";

export const Second = () => {
  const [counter, setCounter] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, intervalTime); //powiązanie z drugim stanem

    return () => {
      clearInterval(interval); // zakończenie poprzedniego interwału
    };
  }, [intervalTime]); // przekazanie nowego interwału

  const increaseTime = () => {
    setIntervalTime((prevTime) => prevTime + 1000);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseTime}>Increase time</button>
    </>
  );
};
