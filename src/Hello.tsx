type Props = {
  who: string;
};

export const Hello = ({ who }: Props) => {
  return <h1>Hello {who}</h1>;
};
