import { SyntheticEvent } from "react";

type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  const handleLockaClick = (e: SyntheticEvent) => {
    console.log("Clicked from child", e);
  };

  return (
    <>
      <button onDoubleClick={callback}>Click</button>
      <button onDoubleClick={handleLockaClick}>Click</button>
    </>
  );
};
