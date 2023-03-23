import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleIds } from '../../boardSlice'

let cardLogo =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
const visibleId = useSelector(selectVisibleIds)

  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
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


  // 2nd if statement
  // implement card id array membership check
  if (false) {
    cardStyle = "matched";
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (false) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
