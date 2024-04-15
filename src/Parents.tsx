import { Child } from "./Child";

export const Parents = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <Child callback={handleClick} />;
};
