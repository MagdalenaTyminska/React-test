import { Component, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export class Container extends Component<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
