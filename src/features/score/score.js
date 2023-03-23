import React from "react";
import { useSelector } from "react-redux";
import { selectMatchId } from "../board/boardSlice";

export const Score = () => {
  const cardsMatched = useSelector(selectMatchId);

  return <div className="score-container">Matched: {cardsMatched.length}</div>;
};
