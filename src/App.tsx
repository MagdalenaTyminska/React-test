import "./App.scss";
import { Hello } from "./Hello";
import { Sum } from "./Sum";
import { Grandparent } from "./Grandparent";

const App = () => {
  return (
    <>
      <Hello who="Ala" />
      <Sum a={2} b={3} />
      <Grandparent value={10} />
    </>
  );
};

export { App };
