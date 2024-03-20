import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const first = 3;
  const second = 4;

  return (
    <>
      <h1>{first + second}</h1>
    </>
  );
};

export { App };
