type Props = {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh?: number;
};

const ManyValues = ({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh = 10,
}: Props) => {
  const sum = first + second + third + fourth + fifth + sixth + (seventh || 0);
  return <h1>{sum}</h1>;
};

export { ManyValues };

// import { Component } from "react";

// type Props = {
//   first: number;
//   second: number;
//   third: number;
//   fourth: number;
//   fifth: number;
//   sixth: number;
//   seventh?: number;
// };

// class ManyValues extends Component<Props> {
//   render() {
//     const { first, second, third, fourth, fifth, sixth } = this.props;
//     const sum = first + second + third + fourth + fifth + sixth;
//     return <h1>{sum}</h1>;
//   }
// }

// export { ManyValues };
