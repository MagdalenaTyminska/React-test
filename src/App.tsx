import "./App.scss";
import { Grandparent } from "./Grandparent";
import { Nothing } from "./Nothing";

const App = () => {
  return (
    <>
      <Grandparent />
      <Nothing />
    </>
  );
};

export { App };
