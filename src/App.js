import "./App.css";
import React from "react";
import { Score } from "./features/score/score";
import { Board } from "./features/board/board";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, resetCards, wonChecked } from "./features/board/boardSlice";

const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard());
  };

  const wonCheck = useSelector(wonChecked);

  let wonPhrase = "Congratulations, you won!";

  if (wonCheck == true) {
    return (
      <div className="App">
        <div className="score-container">
          <p>{wonPhrase}</p>
        </div>
        <footer className="footer">
          <button onClick={startGameHandler} className="start-button">
            Start Again
          </button>
        </footer>
      </div>
    );
  } else
    return (
      <div className="App">
        <Score />
        <br></br>
        <div className="board">
          <Board />
        </div>
        <br></br>
        <footer className="footer">
          <button onClick={startGameHandler} className="start-button">
            Start Game
          </button>
        </footer>
      </div>
    );
};

export default App;
