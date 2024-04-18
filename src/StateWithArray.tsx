import { useState } from "react";

export const StateWithArary = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNewElement = () => {
    const randomValue = Math.round(Math.random() * 1000);

    // numbers.push(randomValue); bezpośrednia mutacja - źle

    // const newArray = numbers;
    // newArray.push(randomValue);
    // setNumbers(newArray); modyfukacja oryginalnej tablicy i ponowne jej przekazanie do stanu - źle

    const newArray = [...numbers, randomValue];
    setNumbers(newArray);

    // lub - oba poprawne

    setNumbers((prevNumbers) => [...prevNumbers, randomValue]);
  };

  return (
    <>
      <button onClick={addNewElement}>Add element</button>
      <ul>
        {numbers.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};
