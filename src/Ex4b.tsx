type Props = {
  onClick: (which: string) => void;
  label: string;
};

export const Ex4b = ({ onClick, label }: Props) => {
  return (
    <>
      <button onClick={() => onClick(label)}>Click me</button>
    </>
  );
};
