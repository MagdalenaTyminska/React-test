import { PropsWithChildren, ReactNode } from "react";

// type HeaderProps = {
//   children: ReactNode;
// };

type HeaderProps = PropsWithChildren;

const Header = ({ children }: HeaderProps) => {
  return <h1>{children}</h1>;
};

export { Header };
