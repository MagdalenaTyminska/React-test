import { Ex4b } from "./Ex4b";
import { Ex4c } from "./Ex4c";

export const Ex4a = () => {
  const handleClick = (which: string) => {
    console.log(`cliked ${which}`);
  };

  return (
    <>
      <Ex4b label="first" onClick={handleClick} />
      <Ex4b label="second" onClick={handleClick} />
      <Ex4b label="third" onClick={handleClick} />
      <Ex4c label="third" onClick={() => handleClick("first")} />
      <Ex4c label="third" onClick={() => handleClick("second")} />
      <Ex4c label="third" onClick={() => handleClick("third")} />
    </>
  );
};
