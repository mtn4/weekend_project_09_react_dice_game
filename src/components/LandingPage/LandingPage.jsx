import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  onClickLanding = (e) => {
    e.target.parentElement.style.opacity = "0%";
    e.target.parentElement.style.scale = "2";
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 1000);
  };
  render() {
    return (
      <div id="landing">
        <div className="logo">Dice Game!</div>
        <div className="landing-page__rules">
          <span className="game-rules">Game Rules:</span>
          <br />
          The game has 2 players, playing in rounds. In each turn, a player
          rolls 2 dices as many times as he wishes. Each result will get added
          to his round’s score. But if the player rolls a double six all his
          round’s score gets lost. After that, its the next player’s turn. A
          player can choose to ‘Hold’, which means that his round’s score gets
          added to his global score. After that, its the next players turn. The
          first player to reach 100 points wins.
        </div>
        <button className="btn" onClick={this.onClickLanding}></button>
      </div>
    );
  }
}

export default LandingPage;
