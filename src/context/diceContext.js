import { createContext, useState } from "react";

export const diceContext = createContext();

function ContextProvider({ children }) {
  const [message, setMessage] = useState("");
  const [targetScore, setTargetScore] = useState(100);
  const [diceArr, setDiceArr] = useState([0, 0]);
  const [turn, setTurn] = useState(() => Math.round(Math.random()));
  const [gameStarted, setGameStarted] = useState(false);
  const [firstRoundScore, setFirstRoundScore] = useState(0);
  const [secondRoundScore, setSecondRoundScore] = useState(0);
  const [firstTotalScore, setFirstTotalScore] = useState(0);
  const [secondTotalScore, setSecondTotalScore] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const [rolledOnce, setRolledOnce] = useState(false);
  const [totalWins, setTotalWins] = useState([0, 0]);

  return (
    <diceContext.Provider
      value={{
        message,
        targetScore,
        diceArr,
        turn,
        gameStarted,
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
      }}
    >
      {children}
    </diceContext.Provider>
  );
}

export default ContextProvider;
