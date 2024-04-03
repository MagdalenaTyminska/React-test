import "./App.scss";
import { Foo } from "./Foo";

const App = () => {
  return (
    <>
      <Foo
        elements={[
          { id: 1, value: "Lorem ipsum" },
          { id: 2, value: "Dolor sit" },
          { id: 3, value: "Amet" },
        ]}
      />
    </>
  );
};

export { App };
