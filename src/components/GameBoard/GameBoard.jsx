import React, { useContext } from "react";
import "./GameBoard.css";
import Player from "../Player/Player";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dice from "../Dice/Dice";
import Message from "../Message/Message";
import { diceContext } from "../../context/diceContext";

export default function GameBoard() {
  const {
    message,
    targetScore,
    diceArr,
    turn,
    firstRoundScore,
    secondRoundScore,
    firstTotalScore,
    secondTotalScore,
    disableBtn,
    rolledOnce,
    totalWins,
    setMessage,
    setTargetScore,
    setDiceArr,
    setTurn,
    setGameStarted,
    setFirstRoundScore,
    setSecondRoundScore,
    setFirstTotalScore,
    setSecondTotalScore,
    setDisableBtn,
    setRolledOnce,
    setTotalWins,
  } = useContext(diceContext);

  const handleInputChange = ({ target }) => {
    setTargetScore(target.value);
  };
  const handleClick = (e) => {
    switch (e.target.name) {
      case "New Game":
        handleNew();
        break;
      case "Roll":
        handleRoll();
        break;
      case "Hold":
        handleHold();
        break;
      default:
        break;
    }
  };
  const handleNew = () => {
    setTargetScore(100);
    setDiceArr([0, 0]);
    setTurn(() => Math.round(Math.random()));
    setGameStarted(false);
    setFirstRoundScore(0);
    setSecondRoundScore(0);
    setFirstTotalScore(0);
    setSecondTotalScore(0);
    setMessage("New Game");
    setDisableBtn(false);
    setRolledOnce(false);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleRoll = () => {
    setDisableBtn(true);
    setGameStarted(true);
    setRolledOnce(true);
    setMessage("");

    setTimeout(() => {
      const firstDice = Math.floor(Math.random() * 6) + 1;
      const secondDice = Math.floor(Math.random() * 6) + 1;
      const result = firstDice + secondDice;
      setTimeout(() => {
        setDiceArr([firstDice, secondDice]);
      }, 0);
      if (firstDice === 6 && secondDice === 6) {
        handleDoubleSix();
        setDisableBtn(false);
        return;
      }
      checkGameFinished(result);
      if (turn) {
        setSecondRoundScore(secondRoundScore + result);
      } else {
        setFirstRoundScore(firstRoundScore + result);
      }
      setDisableBtn(false);
    }, 500);
  };

  const checkGameFinished = (diceResult) => {
    if (turn) {
      if (secondTotalScore + secondRoundScore + diceResult === targetScore) {
        secondPlayerWins();
        return;
      } else if (
        secondTotalScore + secondRoundScore + diceResult >
        targetScore
      ) {
        firstPlayerWins();
        return;
      }
    } else {
      if (firstTotalScore + firstRoundScore + diceResult === targetScore) {
        firstPlayerWins();
        return;
      } else if (firstTotalScore + firstRoundScore + diceResult > targetScore) {
        secondPlayerWins();
        return;
      }
    }
  };

  const firstPlayerWins = () => {
    setMessage("Congratulations! Player 0 wins!");
    setTotalWins([totalWins[0] + 1, totalWins[1]]);
    setTimeout(() => {
      setMessage("");
      setTimeout(() => {
        handleNew();
      }, 500);
    }, 2500);
  };

  const secondPlayerWins = () => {
    setMessage("Congratulations! Player 1 wins!");
    setTotalWins([totalWins[0], totalWins[1] + 1]);
    setTimeout(() => {
      setMessage("");
      setTimeout(() => {
        handleNew();
      }, 500);
    }, 2500);
  };

  const handleDoubleSix = () => {
    if (turn) {
      setMessage("Double Six! Player 1 round score will reset!");
      setSecondRoundScore(0);
      setTurn(0);
      setRolledOnce(false);
    } else {
      setMessage("Double Six! Player 0 round score will reset!");
      setFirstRoundScore(0);
      setTurn(1);
      setRolledOnce(false);
    }
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleHold = () => {
    if (turn) {
      setSecondTotalScore(secondRoundScore + secondTotalScore);
      setSecondRoundScore(0);
      setTurn(0);
      setRolledOnce(false);
    } else {
      setFirstTotalScore(firstRoundScore + firstTotalScore);
      setFirstRoundScore(0);
      setTurn(1);
      setRolledOnce(false);
    }
  };

  return (
    <>
      {message !== "" ? <Message text={message} /> : ""}
      <div className="container">
        <div id="board">
          <Player
            name="PLAYER 0"
            turn={turn === 0 ? "current0" : ""}
            totalScore={firstTotalScore}
            roundScore={firstRoundScore}
            totalWins={totalWins[0]}
          />
          <div className="btn-container">
            <Button name="New Game" onClick={handleClick} />
            <Dice name="First" result={diceArr[0]} />
            <Dice name="Second" result={diceArr[1]} />
            <Button name="Roll" onClick={handleClick} disabled={disableBtn} />
            <Button
              name="Hold"
              onClick={handleClick}
              visibility={rolledOnce}
              disabled={!rolledOnce}
            />
            <Input onChange={handleInputChange} />
          </div>
          <Player
            name="PLAYER 1"
            turn={turn === 1 ? "current1" : ""}
            totalScore={secondTotalScore}
            roundScore={secondRoundScore}
            totalWins={totalWins[1]}
          />
        </div>
      </div>
    </>
  );
}
