import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleIds, flipCard, selectMatchId } from "../../boardSlice";

let cardLogo =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  const visibleId = useSelector(selectVisibleIds);
  const matchedId = useSelector(selectMatchId);
  const dispatch = useDispatch();
  const flipHandler = (id) => {
    dispatch(flipCard(id));
  };

  let cardStyle = "resting";
  let click = () => flipHandler(id);
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  if (visibleId.includes(id)) {
    cardText = contents;
    click = () => {};
    
  }

  if (matchedId.includes(id) || visibleId.includes(id)) {
    cardStyle = "matched";
    
  }

  if (visibleId.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
