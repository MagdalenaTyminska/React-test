import "./App.scss";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { FourthMother } from "./FourthMother";
import { Fifth } from "./Fifth";

const App = () => {
  return (
    <>
      <First />
      <Second user={{ name: "Magda", lastName: "Kowalska", age: 17 }} />
      <Third a={5} b={8} c={6} />
      <FourthMother />
      <Fifth />
    </>
  );
};

export { App };
