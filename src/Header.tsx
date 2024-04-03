import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <h1>Logo</h1>
      {children}
    </header>
  );
};

export { Header };
