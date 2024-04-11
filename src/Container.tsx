import { PropsWithChildren } from "react";

// type Props = {
//   children?: ReactNode;
//   title: string;
// };

type Props = PropsWithChildren<{
  title: string;
}>;
// to samo co wyzej

export const Container = ({ children, title }: Props) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);
