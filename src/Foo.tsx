import { SingleElement } from "./types";

type Props = {
  elements: SingleElement[];
  single: SingleElement;
};

const Foo = ({ elements, single }: Props) => {
  return (
    <>
      <p>
        Single: {single.value} ({single.id})
      </p>
      {elements.map((element) => (
        <div key={element.id}>{element.value}</div>
      ))}
      ;
    </>
  );
};

export { Foo };
