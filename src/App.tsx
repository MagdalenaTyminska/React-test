import "./App.scss";
import { Container } from "./Container";
import { Content } from "./Content";
import { PageHeader } from "./PageHeader";

const App = () => {
  return (
    <>
      <Container>
        <PageHeader title={"Lorem ipsum"} left={<button>[-]</button>} />
        <Content />{" "}
      </Container>
      <Container>
        <footer>Jestem stopką</footer>
      </Container>
    </>
  );
};

export { App };
