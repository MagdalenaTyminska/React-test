import { SyntheticEvent } from "react";

type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  const handleLocalClick = (e: SyntheticEvent) => {
    console.log("Clicked from child", e);
  };

  const handleAnotherClick = (identifier: string) => {
    console.log("Clicked from child", identifier);
  };

  const handleChange = (e: SyntheticEvent) => {
    console.log((e.target as any).value);
  };

  return (
    <>
      <button onDoubleClick={callback}>Click</button>
      <button onDoubleClick={handleLocalClick}>Click</button>
      <button onDoubleClick={() => handleAnotherClick("test-id")}>Click</button>
      <input name="test" id="test" type="text" onChange={handleChange} />
    </>
  );
};
