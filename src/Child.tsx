type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  const handleLockaClick = () => {
    console.log("Clicked from child");
  };

  return (
    <>
      <button onDoubleClick={callback}>Click</button>
      <button onDoubleClick={handleLockaClick}>Click</button>
    </>
  );
};
