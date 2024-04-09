import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//assets
import Age from "../images/svg/age.svg";

const ProgramCard = () => {
  return (
    <div className="flex flex-col mx-2 my-2">
      {/* Play Group */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:py-5">
        <div className="flex flex-col lg:w-2/5 lg:mr-5 bg-primary py-1 rounded-tr-3xl rounded-bl-3xl">
          <StaticImage
            className="lg:h-15 px-2 rounded-tr-3xl"
            src="../images/playgroup.jpg"
            alt="Playgroup"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
          <p className="self-center font-semibold text-md">PLAY GROUP</p>
        </div>
        <div className="py-2 lg:w-1/2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-semibold lg:text-md">
              1 YEAR 10 MONTHS - 3 YEARS
            </p>
          </div>
          <ul class="list-disc m-2 font-medium lg:text-md">
            <li>Introduction to basic concepts and language</li>
            <li>Creative expression through art and music</li>
            <li>Socialization & communication skills</li>
            <li>Fine motor & gross motor skill development</li>
          </ul>
        </div>
      </div>

      {/* Nursery */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:py-5">
        <div className="flex flex-col lg:w-2/5 lg:mr-5 bg-primary py-1 rounded-tr-3xl rounded-bl-3xl">
          <StaticImage
            className="lg:h-15 px-2 rounded-tr-3xl"
            src="../images/nursery.jpg"
            alt="Playgroup"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
          <p className="self-center font-semibold text-md">NURSERY</p>
        </div>
        <div className="py-2 lg:w-1/2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-semibold lg:text-md">
              3 YEARS - 4 YEARS
            </p>
          </div>
          <ul class="list-disc m-2 font-medium lg:text-md">
            <li>Activity & play based learning</li>
            <li>Introduction to basic math, science and nature</li>
            <li>
              Encouraging independence, self expression & creative skill
              development
            </li>
            <li>Enhance vocabulary and language skills</li>
          </ul>
          <p className="font-semibold lg:text-sm text-button">
            To aid these programs, we embrace best practices of Montessori,
            Waldorf &amp; Glen Domans methods of teaching.
          </p>
        </div>
      </div>

      {/* Early Learning Years */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:py-5">
        <div className="flex flex-col lg:w-2/5 lg:mr-5 bg-primary rounded-md py-1 rounded-tr-3xl rounded-bl-3xl">
          <StaticImage
            className="lg:h-15 px-2 rounded-tr-3xl"
            src="../images/elf.jpg"
            alt="Playgroup"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
          <p className="self-center font-semibold text-md text-center px-3">
            EARLY YEARS FOUNDATION PROGRAM 1 & 2
          </p>
        </div>
        <div className="py-2 lg:w-1/2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-semibold lg:text-md">
              4 YEARS - 6 YEARS
            </p>
          </div>
          <ul class="list-disc m-2 font-medium lg:text-md">
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

      {/* Daycare and after school daycare */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:py-5">
        <div className="flex flex-col lg:w-2/5 lg:mr-5 bg-primary rounded-md py-1 rounded-tr-3xl rounded-bl-3xl">
          <StaticImage
            className="lg:h-15 px-2 rounded-tr-3xl"
            src="../images/daycare.jpg"
            alt="Playgroup"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
          <p className="self-center font-semibold text-md text-center">
            DAYCARE AND AFTER SCHOOL DAYCARE
          </p>
        </div>
        <div className="py-2 lg:w-1/2">
          <div className="flex">
            <img src={Age} alt="Age icon" />
            <p className="self-center px-2 font-semibold lg:text-md">
              1 YEAR 10 MONTHS - 10 YEARS
            </p>
          </div>
          <ul class="list-disc m-2 font-medium lg:text-md">
            <li>Safe, secure & monitored premise</li>
            <li>Childproof measures in place t</li>
            <li>Structured schedule for meal, nap & activities</li>
            <li>
              Professional, homely and fun environment for early years
              development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
