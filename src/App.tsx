import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const users = [
    { id: "jdnhdhe7600", name: "Ala" },
    { id: "jdnhfrkhe76", name: "Ania" },
    { id: "jnh987khe56", name: "Kamil" },
    { id: "j65t87khe96", name: "Michał" },
  ];
  const usersList = users.map((user) => (
    <li key={user.id}>
      <strong>{user.name}</strong>
    </li>
  ));

  return (
    <>
      <ul>{usersList}</ul>
    </>
  );
};

export { App };
