import { CartItem } from "./types";

type Props = {
  elements: CartItem[];
};

const CartSummary = ({ elements }: Props) => {
  const total = elements.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <tfoot>
      <tr>
        <td>Łącznie</td>
        <td></td>
        <td>{total.toFixed(2)} zł</td>
      </tr>
    </tfoot>
  );
};

export { CartSummary };
