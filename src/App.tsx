import { FC } from "react"; //function component
import "./App.scss";
import { nanoid } from "nanoid";

type SingleElement = {
  id: string;
  color: string;
  size: number;
};

const App: FC = () => {
  const elements: SingleElement[] = [
    { id: nanoid(), color: "blue", size: 10 },
    { id: nanoid(), color: "green", size: 14 },
    { id: nanoid(), color: "yellow", size: 18 },
  ];

  return elements.map((element) => (
    <div
      key={element.id}
      style={{
        backgroundColor: element.color,
        width: element.size,
        height: element.size,
      }}
    />
  ));
};

export { App };
