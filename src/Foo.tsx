// import { FC } from "react";

// type Props = {
//   text: string;
// };

// export const Foo: FC<Props> = ({ text }) => {
//   return <h1>{text}</h1>;
// };

import { ReactNode } from "react";

type Props = {
  text: string;
};

export const Foo = ({ text }: Props): ReactNode => {
  return undefined;
};
// przy ReactNode component musi coś zwracać
