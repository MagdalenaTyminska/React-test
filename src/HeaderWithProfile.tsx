import { Header } from "./Header";
import { UserData } from "./UserData";

export const HeaderWithProfile = () => {
  return (
    <Header>
      <UserData userEmail="a@gamil.com" />
    </Header>
  );
};
