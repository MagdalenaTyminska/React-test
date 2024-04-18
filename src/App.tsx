import { useState } from "react";
import "./App.scss";
import { StateWithArary } from "./StateWithArray";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <StateWithArary />
    </>
  );
};

export { App };
