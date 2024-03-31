import React from "react";

const PoppinsCard = ({ title, content, img, imgAlt }) => {
  return (
    <div className="bg-primary p-2 m-1 rounded-tr-md rounded-bl-md flex flex-col items-center">
      <img className="w-1/2 h-1/2" src={img} alt={imgAlt} />
      <p className="font-medium p-1">{title}</p>
      <p className="font-medium ">{content}</p>
    </div>
  );
};

export default PoppinsCard;
