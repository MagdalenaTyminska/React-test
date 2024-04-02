import { LoremIpsum } from "./LoremIpsum";

const HelloWorld = () => {
  const isOk = false;

  if (!isOk) return null;

  return (
    <>
      <h1>Hello world!</h1>
      <LoremIpsum />
    </>
  );
};

export { HelloWorld };
