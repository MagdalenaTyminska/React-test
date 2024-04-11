import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const Container = ({ children, title }: Props) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

