import React from "react";
import { Card } from "./card/card";

export const CardRow = ({ cards }) => {
  const content = cards.map((card) => (
    <Card key={card.id} id={card.id} contents={card.contents} />
  ));

  return <>{content}</>;
};
