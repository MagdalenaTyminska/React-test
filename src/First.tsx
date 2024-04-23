import { useEffect } from "react";

export const First = () => {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return null;
};
