import "./App.scss";
import { PageWrapper } from "./PageWrapper";
import { Modal } from "./Modal";
import { ButtonSuccess } from "./ButtonSuccess";
import { ButtonDanger } from "./ButtonDanger";

const App = () => {
  return (
    <>
      <PageWrapper title="Hello world" children={"Lorem ipsum"} />
      <Modal
        title={"Potwierdź"}
        text={"Czy na pewno chcesz to wykonać?"}
        controls={<ButtonSuccess label={"Tak"} />}
      />
      <Modal
        title={"Ostrzeżenie"}
        text={"Czy chcesz usunąć ten obiekt?"}
        controls={<ButtonDanger label={"Usuń"} />}
      />
    </>
  );
};

export { App };
