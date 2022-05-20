import React, { Component } from "react";
import "./GameBoard.css";
import Player from "../Player/Player";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dice from "../Dice/Dice";
import Message from "../Message/Message";

class GameBoard extends Component {
  state = {
    targetScore: 100,
    diceArr: [0, 0],
    turn: Math.round(Math.random()),
    gameStarted: false,
    firstRoundScore: 0,
    secondRoundScore: 0,
    firstTotalScore: 0,
    secondTotalScore: 0,
    message: "",
    disableBtn: false,
    rolledOnce: false,
    totalWins: [0, 0],
  };
  handleInputChange = ({ target }) => {
    this.setState({ targetScore: target.value });
  };
  handleClick = (e) => {
    switch (e.target.name) {
      case "New Game":
        this.handleNew();
        break;
      case "Roll":
        this.handleRoll();
        break;
      case "Hold":
        this.handleHold();
        break;
      default:
        break;
    }
  };
  handleNew = () => {
    this.setState({
      targetScore: 100,
      diceArr: [0, 0],
      turn: Math.round(Math.random()),
      gameStarted: false,
      firstRoundScore: 0,
      secondRoundScore: 0,
      firstTotalScore: 0,
      secondTotalScore: 0,
      message: "New Game",
      disableBtn: false,
      rolledOnce: false,
    });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2500);
  };
  handleRoll = () => {
    this.setState({
      disableBtn: true,
      gameStarted: true,
      rolledOnce: true,
      message: "",
    });
    setTimeout(() => {
      const firstDice = Math.floor(Math.random() * 6) + 1;
      const secondDice = Math.floor(Math.random() * 6) + 1;
      const result = firstDice + secondDice;
      setTimeout(() => {
        this.setState({ diceArr: [firstDice, secondDice] });
      }, 0);
      if (firstDice === 6 && secondDice === 6) {
        this.handleDoubleSix();
        this.setState({ disableBtn: false });
        return;
      }
      this.checkGameFinished(result);
      this.setState((state) => {
        if (state.turn) {
          return {
            secondRoundScore: state.secondRoundScore + result,
          };
        } else {
          return {
            firstRoundScore: state.firstRoundScore + result,
          };
        }
      });
      this.setState({ disableBtn: false });
    }, 500);
  };
  checkGameFinished = (diceResult) => {
    if (
      this.state.secondTotalScore + this.state.secondRoundScore + diceResult ===
        this.state.targetScore ||
      this.state.firstTotalScore + this.state.firstRoundScore + diceResult >
        this.state.targetScore
    ) {
      this.setState({
        message: "Congratulations! Player 1 wins!",
        totalWins: [this.state.totalWins[0], this.state.totalWins[1] + 1],
      });
      setTimeout(() => {
        this.setState({ message: "" });
        setTimeout(() => {
          this.handleNew();
        }, 500);
      }, 2500);
      return;
    }

    if (
      this.state.firstTotalScore + this.state.firstRoundScore + diceResult ===
        this.state.targetScore ||
      this.state.secondTotalScore + this.state.secondRoundScore + diceResult >
        this.state.targetScore
    ) {
      this.setState({
        message: "Congratulations! Player 0 wins!",
        totalWins: [this.state.totalWins[0] + 1, this.state.totalWins[1]],
      });
      setTimeout(() => {
        this.setState({ message: "" });
        setTimeout(() => {
          this.handleNew();
        }, 500);
      }, 2500);
      return;
    }
  };

  handleDoubleSix = () => {
    this.setState((state) => {
      if (state.turn) {
        return {
          message: "Double Six! Player 1 round score will reset!",
          secondRoundScore: 0,
          turn: 0,
          rolledOnce: false,
        };
      }
      return {
        message: "Double Six! Player 0 round score will reset!",
        firstRoundScore: 0,
        turn: 1,
        rolledOnce: false,
      };
    });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2500);
  };
  handleHold = () => {
    this.setState((state) => {
      if (state.turn) {
        return {
          secondTotalScore: state.secondRoundScore + state.secondTotalScore,
          secondRoundScore: 0,
          turn: 0,
          rolledOnce: false,
        };
      }
      return {
        firstTotalScore: state.firstRoundScore + state.firstTotalScore,
        firstRoundScore: 0,
        turn: 1,
        rolledOnce: false,
      };
    });
  };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("state"))) {
      this.setState(JSON.parse(window.localStorage.getItem("state")));
    }
  }
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  render() {
    return (
      <>
        {this.state.message !== "" ? <Message text={this.state.message} /> : ""}
        <div className="container">
          <div id="board">
            <Player
              name="PLAYER 0"
              turn={this.state.turn === 0 ? "current0" : ""}
              totalScore={this.state.firstTotalScore}
              roundScore={this.state.firstRoundScore}
              totalWins={this.state.totalWins[0]}
            />
            <div className="btn-container">
              <Button name="New Game" onClick={this.handleClick} />
              <Dice name="First" result={this.state.diceArr[0]} />
              <Dice name="Second" result={this.state.diceArr[1]} />
              <Button
                name="Roll"
                onClick={this.handleClick}
                disabled={this.state.disableBtn}
              />
              <Button
                name="Hold"
                onClick={this.handleClick}
                visibility={this.state.rolledOnce}
                disabled={!this.state.rolledOnce}
              />
              <Input
                value={this.state.targetScore}
                onChange={this.handleInputChange}
                visibility={this.state.gameStarted}
              />
            </div>
            <Player
              name="PLAYER 1"
              turn={this.state.turn === 1 ? "current1" : ""}
              totalScore={this.state.secondTotalScore}
              roundScore={this.state.secondRoundScore}
              totalWins={this.state.totalWins[1]}
            />
          </div>
        </div>
      </>
    );
  }
}

export default GameBoard;
