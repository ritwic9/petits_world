import React from "react";

//components
import LayoutWithoutBg from "../components/LayoutWithoutBg";
import ImageCarousel from "../components/ImageCarousel";
import OurMissionCard from "../components/OurMissionCard";
import img1 from "../images/svg/cognitive.svg";
import img2 from "../images/svg/message.svg";
import img3 from "../images/svg/emotions.svg";
import img4 from "../images/svg/motivation.svg";
import img5 from "../images/svg/light-bulb.svg";

const OurMission = () => {
  const content1 = "Physical and cognitive development";
  const content2 = "Language and communication development";
  const content3 = "Personal, social and emotional development";
  const content4 = "Self motivation and confidence";
  const content5 = "Creative knowledge & basic understanding of the world";

  return (
    <LayoutWithoutBg>
      {/* Hero section */}
      <section className="p-2 lg:mx-12 pt-8">
        <div className="flex flex-col w-full justify-center">
          <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
            EXPERIENCE INDIVIDUALISED & GUIDED APPROACH!
          </h1>
          <p className="text-md lg:text-lg lg:text-center">
            We focus on each child’s need and pace individually!
          </p>
        </div>
        <ImageCarousel />
      </section>
      {/* Our Mission */}
      <section className="px-2 my-2 bg-white shadow-inner h-full">
        <div className="lg:py-6 lg:mx-12">
          <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
            OUR MISSION
          </h2>
          <p className="mt-2 text-md lg:text-lg font-medium">
            At Petits world, we believe in providing an environment which is
            safe, hygienic, enriching and a stimulating one. Our dedicated and
            compassionate educators are committed in fostering skills such as
          </p>
        </div>
        <div>
          <div className="py-2">
            <OurMissionCard img={img1} alt="Cognitive" content={content1} />
            <OurMissionCard img={img2} alt="Language" content={content2} />
            <OurMissionCard img={img3} alt="Emotions" content={content3} />
            <OurMissionCard img={img4} alt="Motivation" content={content4} />
            <OurMissionCard img={img5} alt="Creative" content={content5} />
          </div>
          <p className="my-2 text-md lg:text-lg font-medium">
            With giving individual attention love and care to each child, we aim
            to make the journey of learning truly a joyous and an impactful
            experience as they embark their tiny steps to the world of
            education.
          </p>
        </div>

        <h3 className="text-center text-lg lg:text-xl font-semibold text-button">
          {" "}
          ABOUT US
        </h3>
      </section>
      {/* About Us */}
      <section>
        <p className="m-2 text-sm py-2 lg:text-lg font-medium">
          We are localities of Mangaluru who are certified teachers & wish to
          make a difference in lives of kids here in our own small way. Kids are
          the best gift that God can bestow in anyone’s life. Caring & nurturing
          in early stages of their life is divine! Nothing gives us more
          satisfaction, than watching a bunch of young kids walk into our school
          every morning & start the day with their own innocent ways. Early
          years of schooling is most important part, when kids start their
          academic journey in this world. They deserve all the love, care safety
          & learning of earthly ways. And this is what we three take pride doing
          day in & day out! We started Petits World in 2012 and operated at a
          rented place in the Lalbagh area, our passion & experience made us
          believe in our dream even more! Thanks to the patronage, love &
          support provided by our parent community all these years & here we are
          in our own premise! Do discover your child’s new nurturing & safe
          place and share your thoughts & let us together make a difference in
          your kid’s life. <br />
          <br />
          Aparna, Smitha & Vinitha <br />
          <br />
          Team Petits world
        </p>
      </section>
    </LayoutWithoutBg>
  );
};

export default OurMission;
