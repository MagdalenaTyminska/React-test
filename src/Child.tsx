type Props = {
  callback: (fromWho: string) => void;
};

export const Child = ({ callback }: Props) => {
  const handleClick = () => {
    callback("child");
  };

  return <button onClick={handleClick}>Click me</button>;
};
