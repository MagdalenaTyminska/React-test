import { Foo } from "./Foo";
import { SingleElement } from "./types";

const Parent = () => {
  const result: SingleElement[] = [];

  for (let i = 0; i < 10; i++) {
    result.push({
      id: i,
      value: `Value: ${Math.round(Math.random() * 1000)}`,
    });
  }
  return <Foo elements={result} />;
};

export { Parent };
