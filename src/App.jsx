import { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "false",
    };
  }
  click() {
    this.setState({
      name: "hello",
    });
  }

  render() {
    return (
      <div>
        <h1></h1>
        <button onClick={this.click.bind(this)}>{this.state.name}</button>
      </div>
    );
  }
}

export default App;
