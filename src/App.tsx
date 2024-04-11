import "./App.scss";
import { Container } from "./Container";

const App = () => {
  return (
    <>
      <Container title={"Ala ma kota"} children={<h2>Lorem Ipsum</h2>} />
    </>
  );
};

export { App };
