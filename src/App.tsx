import "./App.scss";
import { Container } from "./Container";
import { Content } from "./Content";

const App = () => {
  return (
    <>
      <Container>
        <Content />{" "}
      </Container>
      <Container>
        <footer>Jestem stopką</footer>
      </Container>
    </>
  );
};

export { App };
