type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  const handleLockaClick = () => {
    console.log("Clicked from child");
  };

  return (
    <>
      <button onClick={callback}>Click</button>
      <button onClick={handleLockaClick}>Click</button>
    </>
  );
};
