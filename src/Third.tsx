import { useState } from "react";

type SingleAddress = {
  country: string;
  city: string;
  street: string;
};

export const Third = () => {
  const [address, setAddress] = useState<SingleAddress | null>(null);

  const allAddresses: SingleAddress[] = [
    { country: "Poland", city: "Katowice", street: "Mariacka" },
    { country: "USA", city: "New York", street: "First Street" },
    { country: "UK", city: "London", street: "Hope Street" },
  ];

  const addNumber = () => {
    const randomIndex = Math.floor(Math.random() * allAddresses.length);
    const randomAddress = allAddresses[randomIndex];

    setAddress((prevAddress) => ({ ...prevAddress, ...randomAddress }));
  };

  const { country, city, street } = address || {
    country: "",
    city: "",
    street: "",
  };

  return (
    <>
      <button onClick={addNumber}>Pokaż nowy adres</button>
      {address && (
        <div>
          <h1>
            {country}
            {"-"}
            {city}
            {"-"}
            {street}
          </h1>
        </div>
      )}
    </>
  );
};

// import { useState } from "react";

// type SingleAddress = {
//   country: string;
//   city: string;
//   street: string;
// };

// export const Third = () => {
//   const [address, setAddress] = useState<SingleAddress | null>(null);

//   const allAddresses: SingleAddress[] = [
//     { country: "Poland", city: "Katowice", street: "Mariacka" },
//     { country: "USA", city: "New York", street: "First Street" },
//     { country: "UK", city: "London", street: "Hope Street" },
//   ];

//   const addNumber = () => {
//     const randomIndex = Math.floor(Math.random() * allAddresses.length);
//     const randomAddress = allAddresses[randomIndex];

//     setAddress(randomAddress);
//   };

//   const { country, city, street } = address || {
//     country: "",
//     city: "",
//     street: "",
//   };

//   return (
//     <>
//       <button onClick={addNumber}>Pokaż nowy adres</button>
//       {address && (
//         <div>
//           <h1>
//             {country}
//             {"-"}
//             {city}
//             {"-"}
//             {street}
//           </h1>
//         </div>
//       )}
//     </>
//   );
// };
