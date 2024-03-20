import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const name = prompt("Provide your name");

  return (
    <>
      <h1> {name} </h1>
    </>
  );
};

export { App };
