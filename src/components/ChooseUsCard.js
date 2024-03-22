import React from "react";

const ChooseUsCard = ({ img, title }) => {
  return (
    <div className="bg-primary rounded-full">
      <img src={img} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

export default ChooseUsCard;
