import react from "react";

import PropTypes from "prop-types";
import React, { Component } from "react";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hello",
    };
  }
  click() {
    this.setState({
      name: "hello",
    });
  }

  render() {
    return <button onClick={click}>{this.state.name}</button>;
  }
}

export default Nav;
