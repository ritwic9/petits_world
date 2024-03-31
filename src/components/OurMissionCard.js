import React from "react";

const OurMissionCard = ({ content }) => {
  return (
    <div className="w-full flex my-2">
      <div className="bg-button rounded-full">
        <img src="" alt="" />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default OurMissionCard;
