import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="scorebar">
    <nav className="navbar-nav fixed-top">
    <ul className="navbar">
      <li className="navbar-brand" id="game-name">Golden Girls Memory Game</li>
      <li className="navbar-brand" id="game-result">{props.gameStatus}</li>
      <li className="navbar-brand" id="game-score">Score: {props.currentScore} | Top Score: {props.highScore}</li>
    </ul></nav>
    </div>
  );
}


export default Title;
