import { Child } from "./Child";

export const Parents = () => {
  const handleClick = () => {
    console.log("Clicked from parent");
  };

  return <Child callback={handleClick} />;
};
