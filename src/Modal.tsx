import { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  controls: ReactNode;
};

export const Modal = ({ title, text, controls }: Props) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        border: "1px solid, #eee",
        maxWidth: "400px",
        margin: "25px auto",
      }}
    >
      <header style={{ padding: "20px", borderBottom: "1px solid #f0f0f0" }}>
        <h1>{title}</h1>
      </header>
      <section style={{ padding: "20px" }}>{text}</section>
      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #f0f0f0",
          textAlign: "right",
        }}
      >
        {controls}
      </footer>
    </div>
  );
};
