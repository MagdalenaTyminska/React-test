import { useState } from "react";
import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const [count, setCount] = useState(0);

  const values = [1, 2, 3, 4, 5, 6];
  const text = values
    .filter((el) => el % 2)
    .map((el) => el ** 2)
    .join("-");

  const name = "stranger";

  const transform = (name: string) => {
    return name.toLocaleUpperCase();
  };

  const hello = <h1> Hello {transform(name)}! </h1>;

  let greeting = <h1>Welcome my lord!</h1>;
  const myName = prompt("Podaj swoje imię");

  if (myName !== "Król Maciuś") {
    greeting = <h1>You have no access to this place!</h1>;
  }

  return (
    <>
      <div> {hello} </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>{text}</div>
        <div>{greeting}</div>
      </div>
    </>
  );
};

export { App };
