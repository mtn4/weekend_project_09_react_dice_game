// import React, { Component } from "react";
import "./RoundScore.css";

// class RoundScore extends Component {
//   render() {
//     return <div className="round">CURRENT: {this.props.value}</div>;
//   }
// }

// export default RoundScore;

import React from "react";

export default function RoundScore(props) {
  return <div className="round">CURRENT: {props.value}</div>;
}
