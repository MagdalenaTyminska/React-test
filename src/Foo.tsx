import { SingleElement } from "./types";

type Props = {
  elements: SingleElement[];
};

const Foo = ({ elements }: Props) => {
  return elements.map((element) => <div key={element.id}>{element.value}</div>);
};

export { Foo };
