import { FC, Fragment } from "react"; //function component
import "./App.scss";
import { nanoid } from "nanoid";

const App: FC = () => {
  const numbers = [
    { id: nanoid(), val: 1 },
    { id: nanoid(), val: 2 },
    { id: nanoid(), val: 3 },
    { id: nanoid(), val: 4 },
    { id: nanoid(), val: 5 },
    { id: nanoid(), val: 6 },
  ];

  return numbers
    .filter((number) => number.val % 2 === 0)
    .map((number) => (
      <Fragment key={number.id}>
        <strong>{number.val}</strong>
        <span>{number.id}</span>
      </Fragment>
    ));
};

export { App };
