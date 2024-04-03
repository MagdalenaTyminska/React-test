// interface Props {
//   name: string;
// }

// export const Hello = (props: Props) => {
//   return <h1>Hello{props.name}</h1>;
// };

import { Component } from "react";

interface Props {
  name: string;
}

export class Hello extends Component<Props> {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
