import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Header = ({ title, children }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};
