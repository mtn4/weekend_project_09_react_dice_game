// import React, { Component } from "react";
import "./TotalScore.css";

// class TotalScore extends Component {
//   render() {
//     return <div className="total">TOTAL: {this.props.value}</div>;
//   }
// }

// export default TotalScore;

import React from "react";

export default function TotalScore(props) {
  return <div className="total">TOTAL: {props.value}</div>;
}
