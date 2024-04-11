import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

export const About = () => {
  return (
    <>
      <Container>
        <PageHeader title={"About"} left={<button>Go back</button>} />
        This is an about page
      </Container>
    </>
  );
};
