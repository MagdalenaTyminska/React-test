import { CartItem } from "./types";

type Props = {
  element: CartItem;
};

const CartSingleElement = ({ element }: Props) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.quantity}</td>
      <td>{(element.price * element.quantity).toFixed(2)} zł</td>
    </tr>
  );
};

export { CartSingleElement };
