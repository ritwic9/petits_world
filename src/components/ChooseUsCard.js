import React from "react";

const ChooseUsCard = ({ img, title, alt }) => {
  return (
    <div className="bg-primary flex flex-col align-center justify-center my-1 mx-2 p-4 h-15 w-13 rounded-full ">
      <img className="h-3/5" src={img} alt={alt} />
      <p
        dangerouslySetInnerHTML={{ __html: title }}
        className="mt-2 text-center font-semibold"
      ></p>
    </div>
  );
};

export default ChooseUsCard;
