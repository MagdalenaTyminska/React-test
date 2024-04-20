import { useState } from "react";

export const First = () => {
  const [text, setText] = useState("");
  const sentence = `Hello World!`;

  const addLetter = () => {
    const nextLetterIndex = text.length;
    if (nextLetterIndex < sentence.length) {
      setText((prevText) => `${prevText}${sentence[nextLetterIndex]}`);
    }
  };

  const resetText = () => {
    setText("");
  };

  return (
    <>
      <h1>{text}</h1>
      {text.length === sentence.length ? (
        <button onClick={resetText}>Reset</button>
      ) : (
        <button onClick={addLetter}>+1</button>
      )}
    </>
  );
};

// import { useState } from "react";

// export const First = () => {
//   const [text, setText] = useState<string[]>([]);
//   const sentence = `Hello World!`;

//   const addLetter = () => {
//     const nextLetterIndex = text.length;
//     if (nextLetterIndex < sentence.length) {
//       const nextLetter = sentence[nextLetterIndex];
//       setText((prevText) => [...prevText, nextLetter]);
//     }
//   };

//   const resetText = () => {
//     setText([]);
//   };

//   return (
//     <>
//       <h1>{text}</h1>
//       {text.length === sentence.length ? (
//         <button onClick={resetText}>Reset</button>
//       ) : (
//         <button onClick={addLetter}>+1</button>
//       )}
//     </>
//   );
// };
