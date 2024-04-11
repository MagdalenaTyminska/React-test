import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => (
  <div style={{ width: 800 }}>{children}</div>
);
