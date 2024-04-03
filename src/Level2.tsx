import { Level3 } from "./Level3";

type Props = {
  value: number;
};

export const Level2 = ({ value }: Props) => {
  return (
    <div>
      <h2>Level2</h2>
      <Level3 value={value} />
    </div>
  );
};
