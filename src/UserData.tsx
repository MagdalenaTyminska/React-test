type UserDataProps = {
  userEmail: string;
};

export const UserData = ({ userEmail }: UserDataProps) => {
  return (
    <div>
      <span>{userEmail}</span>
    </div>
  );
};
