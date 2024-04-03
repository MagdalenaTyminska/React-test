import { Level4 } from "./Level4";

type Props = {
  value: number;
};

export const Level3 = ({ value }: Props) => {
  return (
    <div>
      <h3>Level3</h3>
      <Level4 value={value} />
    </div>
  );
};
