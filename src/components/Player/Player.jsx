import React from "react";
import RoundScore from "../RoundScore/RoundScore";
import TotalScore from "../TotalScore/TotalScore";
import TotalWins from "../TotalWins/TotalWins";
import "./Player.css";

export default function Player(props) {
  return (
    <div id="player" className={`${props.turn}`}>
      <div className="top">
        <p>{props.name}</p>
        <TotalScore value={props.totalScore} />
      </div>
      <RoundScore value={props.roundScore} />
      <TotalWins value={props.totalWins} />
    </div>
  );
}
