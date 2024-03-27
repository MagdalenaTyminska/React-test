// import { FC } from "react"; //function component
// import "./App.scss";
// // import { nanoid } from "nanoid";

// const App: FC = () => {
//   const text = "Lorem ipsum";
//   const textArray = [...text];
//   const getLetter = textArray
//     .filter((letter: string) => letter !== " ")
//     .map((letter: string, index: number) => (
//       <li key={index}>
//         {index % 2 === 0
//           ? letter.toLocaleLowerCase()
//           : letter.toLocaleUpperCase()}
//       </li>
//     )); // konwertowanie do tablicy - dodanie do nowej tablicy

//   return (
//     <>
//       <ul>{getLetter}</ul>
//     </>
//   );
// };

// export { App };

import { FC } from "react"; //function component
import "./App.scss";
// import { nanoid } from "nanoid";

const App: FC = () => {
  const text = "Lorem ipsum";
  const textArray = [...text];
  const getLetter = (letter: string, index: number) => {
    if (letter === " ") {
      return null;
    }

    if (index % 2 === 0) return letter.toLocaleLowerCase();
    return letter.toLocaleUpperCase();
  };

  return (
    <>
      <ul>
        {textArray.map(
          (letter: string, index: number) =>
            getLetter(letter, index) !== null && (
              <li key={index}>{getLetter(letter, index)}</li>
            )
        )}
      </ul>
    </>
  );
};

export { App };
