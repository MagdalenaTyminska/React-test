import "./App.scss";
import { AgeVerifier } from "./AgeVerifier";
import { HelloSomebody } from "./HelloSomebody";
import { SimpleAgeVerifier } from "./SimpleAgeVerifier";

const App = () => {
  return (
    <>
      <AgeVerifier age={17} />
      <HelloSomebody name={"Ala"} />
      <SimpleAgeVerifier age={17} />
    </>
  );
};

export { App };
