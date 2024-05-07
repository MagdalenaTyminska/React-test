import { ReactNode } from "react";

type AgeVerifierProps = {
  age: number;
};

// 1 - z wykorzystaniem if
// export const AgeVerifier = ({ age }: AgeVerifierProps) => {
//   if (age >= 18)
//     return (
//       <div>
//         <h1>Witaj dorosły człowieku!</h1>
//       </div>
//     );
//   return <div>(X) Wstęp wzbroniony</div>;
// };

// 2 - z wykorzystaniem if w osobnej metodzie
// export const AgeVerifier = ({ age }: AgeVerifierProps) => {
//   const getContent = (age: number) => {
//     if (age >= 18)
//       return (
//         <div>
//           <h1>Witaj dorosły człowieku!</h1>
//         </div>
//       );
//     return <div>(X) Wstęp wzbroniony</div>;
//   };
//   return <div>{getContent(age)}</div>;
// };

// 3 - z wykorzystaniem operatora ?
// export const AgeVerifier = ({ age }: AgeVerifierProps) => {
//   return (
//     <div>
//       {age >= 18 ? <h1>Witaj dorosły człowieku!</h1> : "(X) Wstęp wzbroniony"}
//     </div>
//   );
// };

// // 5 - z wykorzystaniem if i zapisem zmiennej
export const AgeVerifier = ({ age }: AgeVerifierProps) => {
  let content: ReactNode = "(X) Wstęp wzbroniony!";

  if (age >= 18) {
    content = <h1>Witaj dorosły osobniku</h1>;
  }

  return <div>{content}</div>;
};
