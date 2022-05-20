import React, { Component } from "react";
import RoundScore from "../RoundScore/RoundScore";
import TotalScore from "../TotalScore/TotalScore";
import TotalWins from "../TotalWins/TotalWins";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <div id="player" className={`${this.props.turn}`}>
        <div className="top">
          <p>{this.props.name}</p>
          <TotalScore value={this.props.totalScore} />
        </div>
        <RoundScore value={this.props.roundScore} />
        <TotalWins value={this.props.totalWins} />
      </div>
    );
  }
}

export default Player;
