import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    return <div className={`dice dice-${this.props.result}`}></div>;
  }
}

export default Dice;
