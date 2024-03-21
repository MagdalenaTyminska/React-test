import { FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const randomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const randomIndex = Math.round(Math.random() * colors.length - 1);
    return colors[randomIndex];
  };

  let backgroundColor = prompt("Provide color e.g. #aa1bf3");
  let content = null;
  if (
    !(
      (backgroundColor?.length === 4 && backgroundColor === "#000") ||
      backgroundColor === "#FFF"
    ) &&
    !(backgroundColor?.length === 7 && backgroundColor?.startsWith("#"))
  ) {
    backgroundColor = "black";
    content = <h4>"Wrong color"</h4>;
  }

  // const randomColor2 = () => {
  //   let backgroundColor = prompt("Provide color e.g. #aa1bf3");
  //   let content = null;
  //   if (
  //     !(
  //       (backgroundColor?.length === 4 && backgroundColor === "#000") ||
  //       backgroundColor === "#FFF"
  //     ) &&
  //     !(backgroundColor?.length === 7 && backgroundColor?.startsWith("#"))
  //   ) {
  //     backgroundColor = "black";
  //     content = <h4>"Wrong color"</h4>;
  //   }
  //   return { backgroundColor: backgroundColor || "black", content };
  // };

  // const { backgroundColor, content } = randomColor2();

  return (
    <>
      <div
        className="box"
        style={{
          backgroundColor: randomColor(),
        }}
      />
      <div
        className="box2"
        style={{
          backgroundColor,
        }}
      >
        {" "}
        {content}{" "}
      </div>
    </>
  );
};

export { App };

// style inline - np. dla drag and drop
