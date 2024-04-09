import { CartHeader } from "./CartHeader";
import { CartElements } from "./CartElements";
import { CartSummary } from "./CartSummary";
import { CartItem } from "./types";
import { nanoid } from "nanoid";

const Cart = () => {
  const elements: CartItem[] = [
    { id: nanoid(), name: "kozaki", quantity: 1, price: 100 },
    { id: nanoid(), name: "sandały", quantity: 5, price: 60 },
    { id: nanoid(), name: "klapki", quantity: 10, price: 30 },
  ];

  return (
    <table>
      <CartHeader />
      <CartElements elements={elements} />
      <CartSummary elements={elements} />
    </table>
  );
};

export { Cart };
