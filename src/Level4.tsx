type Props = {
  value: number;
};

export const Level4 = ({ value }: Props) => {
  return (
    <div>
      <h4>Level4</h4>
      <strong>{value}</strong>
    </div>
  );
};
