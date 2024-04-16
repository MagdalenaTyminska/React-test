type Props = {
  onClick: () => void;
  label: string;
};

export const Ex4c = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  );
};
