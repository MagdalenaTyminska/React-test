import { Parent } from "./Parent";

type Props = {
  value: number;
};

export const Grandparent = ({ value }: Props) => {
  return <Parent value={value} />;
};
