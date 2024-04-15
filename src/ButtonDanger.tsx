type Props = {
  label: string;
};

export const ButtonDanger = ({ label }: Props) => {
  return (
    <>
      <button style={{ backgroundColor: "red" }}>{label}</button>
    </>
  );
};
