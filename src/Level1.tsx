import { Level2 } from "./Level2";

type Props = {
  value: number;
};

export const Level1 = ({ value }: Props) => {
  return (
    <div>
      <h1>Level1</h1>
      <Level2 value={value} />
    </div>
  );
};
