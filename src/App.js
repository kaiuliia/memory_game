import "./App.css";
import React from "react";
import { Score } from "./features/score/score";
import { Board } from "./features/board/board";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, resetCards } from "./features/board/boardSlice";

const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard());
  };

  // const tryAgainHandler = () => {
  //   dispatch(resetCards());
  // };

  
// if (initialState.win === false) { return everything below
// } else {render pharase "youve win"}
  return (

    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        {/* <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button> */}
      </footer>
    </div>
  );
};

export default App;
