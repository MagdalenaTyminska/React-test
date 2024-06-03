import { useEffect, useState } from "react";

export const First = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (counter % 2 === 0) return <h1>Hello!</h1>;
  // return null; - nie trzeba zwracać null
};
