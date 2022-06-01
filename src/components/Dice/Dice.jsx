import React from "react";
import "./Dice.css";

export default function Dice(props) {
  return <div className={`dice dice-${props.result}`}></div>;
}
