import { useEffect, useState } from "react";

export const Fifth = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getHighestDivider = (value: number) => {
    for (let i = Math.floor(value / 2); i > 1; i--) {
      if (value % i === 0) return i;
    }

    return 1;
  };

  const dividesBy235 = (value: number) => {
    return value % 2 === 0 || value % 3 === 0 || value % 5 === 0;
  };

  return (
    <ul>
      <div>{counter}</div>
      <li>{counter % 2 === 0 ? "parzysta" : "nieparzysta"}</li>
      {counter > 0 && (
        <li> Najwyższy dzielnik: {getHighestDivider(counter)}</li>
      )}
      {dividesBy235(counter) ? (
        <li>Liczba dzieli się przez 2, 3 lub 5</li>
      ) : (
        <li>Liczba nie dzieli się przez 2, 3 ani 5</li>
      )}
    </ul>
  );
};
