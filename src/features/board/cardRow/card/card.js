import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleIds,
  flipCard,
  selectMatchId,
  resetCards,
} from "../../boardSlice";

export const Card = ({ id, contents }) => {
  const visibleId = useSelector(selectVisibleIds);
  const matchedId = useSelector(selectMatchId);
  const dispatch = useDispatch();
  const flipHandler = (id) => {
    dispatch(flipCard(id));
  };

  let cardStyle = "resting";
  let click = () => flipHandler(id);
  let cardText = "";

  if (visibleId.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  if (matchedId.includes(id)) {
    cardStyle = "matched";
    cardText = contents;
    click = () => {};
  }
  if (visibleId.length === 2) {
    setTimeout(() => {
      dispatch(resetCards());
    }, "1000");
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
