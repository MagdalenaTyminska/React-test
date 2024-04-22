import { useState } from "react";

export const First = () => {
  const [people, setPeople] = useState<string[]>(["Tomek", "Franek"]);

  const firstPerson = people[0];

  const addPerson = () => {
    setPeople((prevPeople) => [
      `${Math.round(Math.random() * 1000)}`,
      ...prevPeople,
    ]);
  };

  return (
    <>
      <button onClick={addPerson}>Add person</button>
      <p>Pierwsza osoba: {firstPerson}</p>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
};

// niepoprawne użycie useEffect - nie jest potrzebne
// import { useEffect, useState } from "react";

// export const First = () => {
//   const [people, setPeople] = useState<string[]>(["Tomek", "Franek"]);
//   const [firstPerson, setFirstPerson] = useState(people[0]);

//   useEffect(() => {
//     setFirstPerson(people[0]);
//   }, [people]);

//   const addPerson = () => {
//     setPeople((prevPeople) => [
//       `${Math.round(Math.random() * 1000)}`,
//       ...prevPeople,
//     ]);
//   };

//   return (
//     <>
//       <button onClick={addPerson}>Add person</button>
//       <p>Pierwsza osoba: {firstPerson}</p>
//       <ul>
//         {people.map((person, index) => (
//           <li key={index}>{person}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
