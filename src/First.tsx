import { useState, MouseEventHandler } from "react";

// type mousePosition = {
//   mouseX: number;
//   mouseY: number;
// };

// export const First = () => {
//   const [position, setPosition] = useState<mousePosition>({
//     mouseX: 0,
//     mouseY: 0,
//   });

export const First = () => {
  const [position, setPosition] = useState<{ mouseX: number; mouseY: number }>({
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setPosition({ mouseX, mouseY });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        style={{
          width: 500,
          height: 500,
          border: "1px solid red",
        }}
      >
        X: {position.mouseX} {""}
        Y: {position.mouseY}
      </div>
    </>
  );
};
