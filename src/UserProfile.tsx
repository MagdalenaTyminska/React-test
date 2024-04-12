type Props = {
  email: string;
};

export const UserProfile = ({ email }: Props) => {
  return <p>{email}</p>;
};
