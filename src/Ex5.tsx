import { SyntheticEvent } from "react";

export const Ex5 = () => {
  const handleClick = (e: SyntheticEvent) => {
    const random = Math.random();
    if (random < 0.5) {
      e.preventDefault();
      console.log("Prevented default action", random);
    }
    console.log("clicked", random);
  };

  return (
    <a href="https://www.google.com" onClick={handleClick}>
      Go to Google
    </a>
  );
};
