import React from "react";

//components
import SEO from "../components/SEO";
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
      {/* Seo added below */}
      <SEO
        title="Our Mission"
        description="At Petits World, we focus on each child’s need and pace individually!"
        article="false"
      />
      {/* Hero section */}
      <section className="mx-2 lg:mx-12 mb-5 lg:mb-0">
        <div className="flex flex-col w-full justify-center lg:mb-5">
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
      <section className="px-2 my-2 bg-white shadow-inner h-full lg:rounded-[800px] lg:-mx-12">
        <div className="lg:pt-4 lg:mx-14">
          <h2 className="text-center text-lg lg:text-xl font-semibold text-button lg:p-5">
            OUR MISSION
          </h2>
          <p className="mt-2 text-md lg:text-lg font-medium">
            At Petits world, we believe in providing an environment which is
            safe, hygienic, enriching and a stimulating one. Our dedicated and
            compassionate educators are committed in fostering skills such as
          </p>
        </div>
        <div className="lg:mx-14 py-4 lg:pb-10">
          <div className="py-2 ">
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
      <section className="lg:mx-12">
        <p className="m-2 text-sm py-2 lg:text-lg font-medium">
          We are three enthusiasts who are passionate about teaching and caring
          for children. All three of us hold college/professional degree
          qualification on different fields, but we have discovered over the
          period of time, that our heart and minds are with the kids! We are
          localities of Mangaluru who are certified teachers &amp; wish to make
          a difference in lives of kids here in our own small way. Kids are the
          best gift that God can bestow in anyone’s life. Caring &amp; nurturing
          in early stages of their life is divine! Nothing gives us more
          satisfaction, than watching a bunch of young kids walk into our school
          every morning &amp; start the day with their own innocent ways. Early
          years of schooling is most important part, when kids start their
          academic journey in this world. They deserve all the love, care safety
          &amp; learning of earthly ways. And this is what we three take pride
          doing day in &amp; day out! Started Petits World in 2012 in the
          Lalbagh area, our passion &amp; experience made us believe in our
          dream even more! Thanks to the patronage, love &amp; support provided
          by our parent community all these years &amp; here we are in our new
          premise! Do discover your child’s new nurturing &amp; safe place and
          share your thoughts &amp; let us together make a difference in your
          kid’s life. <br />
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
