export const Buttons = () => {
  const handleClick = () => {
    console.log("Cliked");
  };

  const handleHoverEnter = () => {
    console.log("Entered");
  };

  const handleHoverLeave = () => {
    console.log("Left");
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
        Hover me
      </button>
    </>
  );
};
