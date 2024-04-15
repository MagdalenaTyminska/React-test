type Props = {
  callback: () => void;
};

export const Child = ({ callback }: Props) => {
  callback();

  return null;
};
