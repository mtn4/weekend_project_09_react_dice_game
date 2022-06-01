// import React, { Component } from "react";
import "./TotalWins.css";

// class TotalWins extends Component {
//   render() {
//     return <div className="wins">WINS: {this.props.value}</div>;
//   }
// }

// export default TotalWins;

import React from "react";

export default function TotalWins(props) {
  return <div className="wins">WINS: {props.value}</div>;
}
