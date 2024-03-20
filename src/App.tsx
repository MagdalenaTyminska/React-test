import { useState } from "react";
import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello world from Vite!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export { App };
