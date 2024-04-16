export const Ex4 = () => {
  const handleClick = (which: string) => {
    console.log(`cliked ${which}`);
  };

  return (
    <>
      <button onClick={() => handleClick("first")}>Click me</button>
      <button onClick={() => handleClick("second")}>Click me</button>
      <button onClick={() => handleClick("third")}>Click me</button>
    </>
  );
};
