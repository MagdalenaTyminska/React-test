import { useEffect, useState } from "react";

export const First = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};
