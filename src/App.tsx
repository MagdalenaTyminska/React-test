import { FC, Fragment } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const numbers = [
    { id: "4567uytd", val: 1 },
    { id: "4589uytv", val: 2 },
    { id: "4543uytm", val: 3 },
    { id: "4511uytu", val: 4 },
    { id: "4523uylr", val: 5 },
    { id: "4987uytp", val: 6 },
  ];

  return numbers
    .filter((number) => number.val % 2 === 0)
    .map((number) => (
      <Fragment key={number.id}>
        <strong>{number.val}</strong>
      </Fragment>
    ));
};

export { App };
