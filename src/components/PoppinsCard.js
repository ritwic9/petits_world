import React from "react";

const PoppinsCard = ({ title, content, img, imgAlt }) => {
  return (
    <div className="bg-primary p-2 m-1 rounded-tr-md rounded-bl-md lg:rounded-tr-lg lg:rounded-bl-lg flex flex-col lg:justify-between items-center lg:w-full">
      <img className="w-1/3 h-1/3" src={img} alt={imgAlt} />
      <p className="font-semibold lg:text-md p-1">{title}</p>
      <p className="font-semibold  lg:text-md">{content}</p>
    </div>
  );
};

export default PoppinsCard;
