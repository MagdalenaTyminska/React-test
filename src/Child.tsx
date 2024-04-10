type Props = {
  value: number;
};

export const Child = ({ value }: Props) => {
  return <h1>I got a value {value}</h1>;
};
