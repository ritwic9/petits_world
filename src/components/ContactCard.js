import React from "react";

const ContactCard = ({ img, alt, content }) => {
  return (
    <div className="flex my-2">
      <div className="bg-primary rounded-full p-2">
        <img src={img} alt={alt} />
      </div>
      <div className="px-2 content-center">
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className="font-semibold text-sm"
        ></p>
      </div>
    </div>
  );
};

export default ContactCard;
