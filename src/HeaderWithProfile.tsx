import { Header } from "./Header";
import { UserProfile } from "./UserProfile";

export const HeaderWithProfile = () => {
  const userEmail = "alamakota@gamil.com";

  return (
    <>
      <Header
        title={`Piotruś Pan`}
        children={<UserProfile email={userEmail} />}
      />
    </>
  );
};
