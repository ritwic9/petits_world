import React from "react";

//assets
import Age from "../images/svg/age.svg";
import image1 from "../images/playgroup.jpg";

const ProgramCard = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-2 my-2">
      {/* Play Group */}
      <div className="flex flex-col">
        <div className="flex flex-col bg-primary rounded-md py-1">
          <img className="p-2 rounded-sm" src={image1} alt="Play group image" />
          <p className="self-center font-semibold text-md">PLAY GROUP</p>
        </div>
        <div className="py-2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-medium">1.1 YEARS - 3 YEARS</p>
          </div>
          <ul class="list-disc m-2 font-medium">
            <li>Introduction to basic concepts and language</li>
            <li>Creative expression through art and music</li>
            <li>Socialization & communication skills</li>
            <li>Fine motor & gross motor skills development</li>
          </ul>
        </div>
      </div>
      {/* Nursery */}
      <div className="flex flex-col">
        <div className="flex flex-col bg-primary rounded-md py-1">
          <img className="p-2 rounded-sm" src={image1} alt="Play group image" />
          <p className="self-center font-semibold text-md">NURSERY</p>
        </div>
        <div className="py-2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-medium">3 YEARS - 4 YEARS</p>
          </div>
          <ul class="list-disc m-2 font-medium">
            <li>Activity & play based learning</li>
            <li>Introduction to basic math, science and nature</li>
            <li>
              Encouraging independence, self expression & creative skill
              development
            </li>
          </ul>
        </div>
      </div>
      {/* Early Learning Years */}
      <div className="flex flex-col">
        <div className="flex flex-col bg-primary rounded-md py-1">
          <img className="p-2 rounded-sm" src={image1} alt="Play group image" />
          <p className="self-center font-semibold text-md">
            EARLY LEARNING YEARS
          </p>
        </div>
        <div className="py-2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-medium">4 YEARS - 6 YEARS</p>
          </div>
          <ul class="list-disc m-2 font-medium">
            <li>
              Formal curriculum aligned with present educational standards
            </li>
            <li>Advanced literacy and numeracy development</li>
            <li>
              Critical thinking, problem solving techniques, reading, writing,
              math, science and EVS concepts
            </li>
            <li>
              Overall preparedness for higher grades & other extracurricular &
              outdoor activities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
