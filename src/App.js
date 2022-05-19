import React, { Component } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <GameBoard />
      </div>
    );
  }
}

export default App;
