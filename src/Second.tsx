import { useEffect, useState } from "react";

export const Second = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = `${counter}`; // zmiana nazwy strony
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};
