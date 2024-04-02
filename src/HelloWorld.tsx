import { Component } from "react";
import { LoremIpsum } from "./LoremIpsum";

class HelloWorld extends Component {
  render() {
    return (
      <>
        <h1>Hello world!</h1>
        <LoremIpsum />
      </>
    );
  }
}

export { HelloWorld };
