import React, { Component } from "react";
import "./TotalScore.css";

class TotalScore extends Component {
  render() {
    return <div className="total">TOTAL: {this.props.value}</div>;
  }
}

export default TotalScore;
