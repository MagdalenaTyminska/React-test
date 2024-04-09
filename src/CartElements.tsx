import { CartSingleElement } from "./CartSingleElement";
import { CartItem } from "./types";

type Props = {
  elements: CartItem[];
};

const CartElements = ({ elements }: Props) => {
  return (
    <tbody>
      {elements.map((element) => (
        <CartSingleElement key={element.id} element={element} />
      ))}
    </tbody>
  );
};

export { CartElements };
