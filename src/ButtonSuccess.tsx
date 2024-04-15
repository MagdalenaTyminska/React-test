type Props = {
  label: string;
};

export const ButtonSuccess = ({ label }: Props) => {
  return (
    <>
      <button style={{ backgroundColor: "green" }}>{label}</button>
    </>
  );
};
