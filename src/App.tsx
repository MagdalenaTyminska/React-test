import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const sayName = (name: string) => {
    return <h1> {name}</h1>;
  };

  return (
    <>
      <div> {sayName("Ala")} </div>
    </>
  );
};

export { App };
