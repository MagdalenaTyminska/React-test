import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

export const Shop = () => {
  return (
    <>
      <Container>
        <PageHeader title={"Shop"} left={<button>Go to cart</button>} />
        This is a shop page
      </Container>
    </>
  );
};
