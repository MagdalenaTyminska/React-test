import { useState } from "react";
import { nanoid } from "nanoid";

export const Second = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const newNumber = Math.round(Math.random() * 1000);
    setNumbers([...numbers, newNumber]);
  };

  return (
    <>
      <button onClick={addNumber}>Add random number</button>
      <ul>
        {numbers.map((number) => (
          <li key={nanoid()}>{number}</li>
        ))}
      </ul>
    </>
  );
};
