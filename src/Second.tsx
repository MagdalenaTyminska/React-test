import { useEffect, useState } from "react";

export const Second = () => {
  const [counter, setCounter] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [intervalTime]);

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
