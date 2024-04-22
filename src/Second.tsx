import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

type SingleBox = {
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  borderRadius: number;
  id: string;
};

export const Second = () => {
  const [boxes, setBoxes] = useState<SingleBox[]>([]);

  const addBox = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    const newBox: SingleBox = {
      size: Math.round(Math.random() * 500),
      x: Math.round(Math.random() * 1000),
      y: Math.round(Math.random() * 1000),
      rotation: Math.round(Math.random() * 360),
      borderRadius: Math.round(Math.random() * 50),
      color: `rgb(${r}, ${g}, ${b})`,
      id: nanoid(),
    };

    setBoxes((prevBox) => [...prevBox, newBox]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addBox();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div style={{ position: "relative", width: 1000, height: 1000 }}>
        {boxes.map((box) => (
          <div
            key={box.id}
            style={{
              backgroundColor: box.color,
              width: box.size,
              height: box.size,
              borderRadius: `${box.borderRadius}%`,
              position: "absolute",
              top: box.y,
              left: box.x,
              transform: `translate(-50%) rotate(${box.rotation}deg)`,
              transformOrigin: "50%",
            }}
          />
        ))}
      </div>
    </>
  );
};
