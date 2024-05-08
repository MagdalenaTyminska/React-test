type UserData = {
  name?: string;
  lastName?: string;
  age?: number;
};

type AccessValidatorProps = {
  user?: UserData;
};

export const Second = ({ user }: AccessValidatorProps) => {
  const getContent = (user?: UserData) => {
    if (!user) return " Witaj nieznajomy!";

    const { name, lastName, age } = user;
    if (!name || !lastName) return <h1>Chyba się znamy, ale nie do końca!</h1>;
    if (!age)
      return `Witaj ${name} ${lastName}, nie wiem czy mogę Cię tutaj wpuścić!`;

    return `Witaj ${name} ${lastName}, zapraszam do ${
      age >= 18 ? "pełnej" : "ograniczonej"
    } wersji serwisu!`;
  };

  return <h1>{getContent(user)}</h1>;
};

// export const Second = ({ user }: AccessValidatorProps) => {
//   if (!user) return <h1>Witaj nieznajomy!</h1>;

//   const { name, lastName, age } = user;
//   if (!name || !lastName) return <h1>Chyba się znamy, ale nie do końca!</h1>;
//   if (!age)
//     return (
//       <h1>
//         Witaj {name} {lastName}, nie wiem czy mogę Cię tutaj wpuścić!
//       </h1>
//     );

//   return (
//     <h1>
//       Witaj {name} {lastName}, zapraszam do{" "}
//       {age >= 18 ? "pełnej" : "ograniczonej"} wersji serwisu!
//     </h1>
//   );
// };
