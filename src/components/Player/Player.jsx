import React, { Component } from "react";
import RoundScore from "../RoundScore/RoundScore";
import TotalScore from "../TotalScore/TotalScore";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <div id="player" className={`${this.props.turn}`}>
        <div className="top">
          <h1>{this.props.name}</h1>
          <TotalScore value={this.props.totalScore} />
        </div>
        <RoundScore value={this.props.roundScore} />
      </div>
    );
  }
}

export default Player;
