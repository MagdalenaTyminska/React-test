import { SyntheticEvent } from "react";

type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  const handleLocalClick = (e: SyntheticEvent) => {
    console.log("Clicked from child", e);
  };

  const handleAnotherClick = (identifier: string, e: SyntheticEvent) => {
    console.log("Clicked from child", identifier, e);
  };

  return (
    <>
      <button onDoubleClick={callback}>Click</button>
      <button onDoubleClick={handleLocalClick}>Click</button>
      <button onDoubleClick={(event) => handleAnotherClick("test-id", event)}>
        Click
      </button>
    </>
  );
};
