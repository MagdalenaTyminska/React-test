import { Child } from "./Child";

export const Parent = () => {
  const handleClick = (fromWho: string) => {
    console.log(`Hello from ${fromWho}!`);
  };

  return (
    <>
      <button onClick={() => handleClick("parent")}>Click me</button>
      <Child callback={handleClick} />
    </>
  );
};
