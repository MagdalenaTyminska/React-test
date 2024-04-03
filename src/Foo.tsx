type Props = {
  elements: {
    id: number;
    value: string;
  }[];
};

const Foo = ({ elements }: Props) => {
  return elements.map((element) => <div key={element.id}>{element.value}</div>);
};

export { Foo };
