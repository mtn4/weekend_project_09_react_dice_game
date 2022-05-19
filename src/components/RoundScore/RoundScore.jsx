import React, { Component } from "react";
import "./RoundScore.css";

class RoundScore extends Component {
  render() {
    return <div className="round">CURRENT: {this.props.value}</div>;
  }
}

export default RoundScore;
