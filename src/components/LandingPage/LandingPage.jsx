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
      <>
        <div style={{ display: "none" }} className="rotate">
          <span>Please rotate the screen to play 🔥</span>
        </div>
        <div id="landing">
          <div className="logo">Dice Game!</div>
          <div className="landing-page__rules">
            <span className="game-rules">Game Rules:</span>
            <br />
            <br />
            The game has 2 players, playing in rounds. <br />
            In each turn, a player rolls 2 dices as many times as he wishes, at
            least once. <br />
            Each result will get added to his temporary score, but if the player
            rolls a double six all his temporary score gets lost, and the turn
            goes to the next player. <br />
            The player can choose to ‘Hold’, which means that his temporary
            score gets added to his global score. After that, its the next
            players turn. <br />
            Winner of the game: <br />
            ● The first player to reach 100 points. <br />● The opposing player
            passed 100 points in his total score.
          </div>
          <button className="btn" onClick={this.onClickLanding}></button>
        </div>
      </>
    );
  }
}

export default LandingPage;
