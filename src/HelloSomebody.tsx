type HelloSomebodyProps = {
  name?: string;
};

export const HelloSomebody = ({ name }: HelloSomebodyProps) => {
  return (
    <div>
      <h1>Hello {name || "Nieznajomy"}</h1>
    </div>
  );
};
