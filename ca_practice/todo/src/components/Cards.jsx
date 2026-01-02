import React from "react";
const Cards = ({ url, title, description }) => {
  return (
    <div className="bg-slate-700">
      <div className="p-4">
        <img className="mx-auto" src={url} alt="" />
      </div>
      <h1 className="text-3xl text-center">{title} </h1>
      <p className="text-2xl text-center">{description}</p>
    </div>
  );
};
export default Cards;
