import { Component } from "react";

type State = {
  counter: number;
};

class ClassLifecycle extends Component<{}, State> {
  state = {
    counter: 0,
  };

  interval: number | null = null;

  componentDidMount(): void {
    console.log("Zamontowano");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    console.log("Poprzedni licznik", prevState.counter);
    console.log("Obecny licznik", this.state.counter);
  }

  componentWillUnmount(): void {
    if (this.interval === null) return;
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;
    return <h1>{counter}</h1>;
  }
}

export { ClassLifecycle };
