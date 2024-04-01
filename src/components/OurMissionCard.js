import React from "react";

const OurMissionCard = ({ img, alt, content }) => {
  return (
    <div className="w-full flex my-2">
      <div className="flex ">
        <img
          className="bg-primary w-10 h-10 rounded-full p-2"
          src={img}
          alt={alt}
        />
        <p className="text-sm text-button font-medium ml-2">{content}</p>
      </div>
    </div>
  );
};

export default OurMissionCard;
