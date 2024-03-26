import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  let content = [<h4>"Wrong color"</h4>, <p>"change"</p>]; // można zapisać jako tablicę, <Fragment> lub <>

  const names = ["Ala", "Ania", "Kamil", "Michał"];
  const namesList = names.map((name) => <li>{name}</li>);

  const numbers = [1, 2, 3, 4, 5, 6];
  const numbersList = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => <li>{number}</li>);

  return (
    <>
      {content}
      <ul>{namesList}</ul>
      <ul>{numbersList}</ul>
    </>
  );
};

export { App };
