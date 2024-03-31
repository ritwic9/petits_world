import React from "react";

//components
import LayoutWithoutRepeat from "../components/LayoutWithoutRepeat";

//assets
import programBg from "../images/svg/programs.svg";
import ProgramCard from "../components/ProgramCard";
import PoppinsCard from "../components/PoppinsCard";
import img1 from "../images/svg/age.svg";
import img2 from "../images/svg/batch.svg";
import img3 from "../images/svg/clock.svg";

const programs = () => {
  const imgAlt1 = "Age group icon";
  const title1 = "AGE GROUP";
  const content1 = "3 YEARS - 4 YEARS";

  const imgAlt2 = "Batch icon";
  const title2 = "BATCH 1";
  const content2 = "MON, WED & FRI";

  const title3 = "BATCH 2";
  const content3 = "TUE, THU & FRI";

  const imgAlt4 = "Clock icon";
  const title4 = "TIMINGS";
  const content4 = "4:30PM TO 6:00PM";

  return (
    <LayoutWithoutRepeat>
      {/* Hero Section */}
      <section className="m-2 lg:mx-12 h-full pt-10">
        <div className="w-full justify-center">
          <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
            DISCOVER THE MAGIC OF PLAY BASED LEARNING
          </h1>
        </div>
        <div className="mt-5 h-1/2">
          <img src={programBg} alt="Play based learning" />
        </div>
      </section>
      {/* Our Programs */}
      <section className="bg-white mx-1 rounded-tr-md rounded-bl-md">
        <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
          OUR PROGRAMS & CURRICULUM
        </h2>
        <ProgramCard />
      </section>
      {/* Poppins Club */}
      <section className="m-2">
        <div>
          <h3 className="lg:text-center text-lg lg:text-xl font-semibold">
            REAL WORLD, REAL ENJOYMENT!
          </h3>
          <p className="text-md lg:text-lg lg:text-center">
            Where the creativity is unleashed!
          </p>
        </div>
        <div className="mt-2 bg-white p-2 rounded-tr-md rounded-bl-md">
          <p className="font-medium">
            At our Poppins club, we blend learning with entertainment to create
            an overall enriching experience for your kids. Our after school
            activities are going to be fun and trust us….its the best way to
            reduce your child’s screen time!
          </p>
          <ul className="list-disc m-2 font-medium text-button">
            <li>
              Exploring art & Inspiring creativity: Dive into the world of
              colors and nurture child’s creativity through our art & craft
              activities.
            </li>
            <li>
              Social interactions & Life skills: Let kids interact with their
              peers and also different age groups, hence develop their social
              and emotional skills which will help in their personality
              development as well.
            </li>
            <li>
              Story time adventures: Immerse into the magic of stories,
              fostering a love for literature.
            </li>
            <li>
              Dance, group games & outdoor play: A must for child’s overall
              physical, cognitive, emotional and social skill development.
            </li>
          </ul>
          <div className="flex flex-col">
            <PoppinsCard
              img={img1}
              imgAlt={imgAlt1}
              title={title1}
              content={content1}
            />
            <PoppinsCard
              img={img2}
              imgAlt={imgAlt2}
              title={title2}
              content={content2}
            />
            <PoppinsCard
              img={img2}
              imgAlt={imgAlt2}
              title={title3}
              content={content3}
            />
            <PoppinsCard
              img={img3}
              imgAlt={imgAlt4}
              title={title4}
              content={content4}
            />
          </div>
          <h4 className="text-center text-md lg:text-xl font-semibold text-button">
            DAY CARE AND AFTER SCHOOL DAY CARE
          </h4>
        </div>
      </section>
    </LayoutWithoutRepeat>
  );
};

export default programs;