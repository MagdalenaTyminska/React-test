import { Parent } from "./Parent";

const Grandparent = () => {
  return (
    <>
      <h1>I am a grandfather</h1>
      <Parent />
    </>
  );
};

export { Grandparent };
