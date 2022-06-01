import React, { useContext } from "react";
import { diceContext } from "../../context/diceContext";
import "./Input.css";

export default function Input(props) {
  const { targetScore, gameStarted } = useContext(diceContext);

  return (
    <>
      <input
        name={props.name}
        type="text"
        value={targetScore}
        onChange={props.onChange}
        style={{
          visibility: `${gameStarted}` === "false" ? "visible" : "hidden",
          width: `${props.width}` === "extra" ? 200 : "",
        }}
      />
    </>
  );
}
