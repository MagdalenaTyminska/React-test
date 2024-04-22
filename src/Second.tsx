// import { useState } from "react";

// const compilcatedCalculations = (val: number) => {
//   let result = 0;
//   for (let i = 0; i < 1000000; i++) {
//     result += val * i;
//   }
//   return result;
// };

// export const Second = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   const increment1 = () => {
//     setCounter1((prevCounter) => prevCounter + 1);
//   };

//   const increment2 = () => {
//     setCounter2((prevCounter) => prevCounter + 1);
//   };

//   // const computedValue = counter1 ** 3; // poprawny zapis dla małych obliczeń - przelicza się za każdym razem, gdy zmienia się stan

//   const computedValue = compilcatedCalculations(counter1); // ponowne przeliczenie obciaza cały komponent

//   return (
//     <>
//       <h1>{computedValue}</h1>
//       <button onClick={increment1}>{counter1}</button>
//       <button onClick={increment2}>{counter2}</button>
//     </>
//   );
// };

import { useState, useEffect } from "react";

const complicatedCalculations = (val: number) => {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += val * i;
  }
  return result;
};

export const Second = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [computedValue, setComputedValue] = useState(0);

  const increment1 = () => {
    setCounter1((prevCounter) => prevCounter + 1);
  };

  const increment2 = () => {
    setCounter2((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    setComputedValue(complicatedCalculations(counter1));
  }, [counter1]);

  return (
    <>
      <h1>{computedValue}</h1>
      <button onClick={increment1}>{counter1}</button>
      <button onClick={increment2}>{counter2}</button>
    </>
  );
};
