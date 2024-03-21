import { CSSProperties, FC } from "react"; //function component
import "./App.scss";

const App: FC = () => {
  const maxLength = 26;
  const top = Math.round(Math.random() * 500);
  const left = Math.round(Math.random() * 500);
  const topSecond = Math.round(Math.random() * 100);
  const leftSecond = Math.round(Math.random() * 100);

  const style: CSSProperties = {
    position: "absolute",
    background: "green",
  };

  return (
    <>
      <div
        className="section-primary"
        data-additional-value={10}
        aria-details="lorem ipsum"
      />
      <div
        className="section-primary"
        id="second-box"
        style={{ ...style, top, left }}
        // style={{
        //   position: "absolute",
        //   top,
        //   left,
        //   background: "green",
        // }}
      ></div>
      <div
        className="section-primary"
        style={{ ...style, top: `${topSecond}vh`, left: `${leftSecond}vw` }}
      ></div>
      <label htmlFor="login">Login</label>
      <input type="text" id="login" minLength={10} maxLength={maxLength} />
    </>
  );
};

export { App };

// style inline - np. dla drag and drop
