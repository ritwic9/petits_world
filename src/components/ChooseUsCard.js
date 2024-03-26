import React from "react";

const ChooseUsCard = ({ img, title, alt }) => {
  return (
    <div className="flex flex-col align-center bg-primary rounded-full mx-2 px-5 py-6 w-1/5">
      <img src={img} alt={alt} />
      <p
        dangerouslySetInnerHTML={{ __html: title }}
        className="mt-2 text-center font-semibold"
      ></p>
    </div>
  );
};

export default ChooseUsCard;
