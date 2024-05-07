type SimpleAgeVerifierProps = {
  age: number;
};

//1 - warunkowe renederowanie tekstu
// export const SimpleAgeVerifier = ({ age }: SimpleAgeVerifierProps) => {
//   return (
//     <div>
//       <h1>Witaj</h1>
//       {age >= 18 && "Jesteś już dorosły"}
//     </div>
//   );
// };

//2 - warunkowe renederowanie całego komponentu
// export const SimpleAgeVerifier = ({ age }: SimpleAgeVerifierProps) => {
//   if (age < 18) return null;

//   return (
//     <div>
//       <h1>Witaj</h1>
//       Jesteś już dorosły
//     </div>
//   );
// };

export const SimpleAgeVerifier = ({ age }: SimpleAgeVerifierProps) => {
  if (age < 18) {
    return (
      <div>
        <h1>Witaj</h1>
        Jesteś już dorosły
      </div>
    );
  }
};
