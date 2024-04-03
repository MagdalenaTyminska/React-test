interface Props {
  name: string;
}

export const Hello = (props: Props) => {
  return <h1>Hello{props.name}</h1>;
};
