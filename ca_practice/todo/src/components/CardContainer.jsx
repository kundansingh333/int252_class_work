import React from "react";
import Cards from "./Cards";
const CardContainer = ({ cardData }) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {cardData.map((item, index) => (
        <Cards
          key={index}
          url={item.url}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default CardContainer;
