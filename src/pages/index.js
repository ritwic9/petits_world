import * as React from "react";

//components
import Layout from "../components/Layout";
import Button from "../components/Button";
import ChooseUsCard from "../components/ChooseUsCard";
import wc1 from "../images/svg/wc1.svg";
import wc2 from "../images/svg/wc2.svg";
import wc3 from "../images/svg/wc3.svg";
import wc4 from "../images/svg/wc4.svg";
import wc5 from "../images/svg/wc5.svg";
//images
import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";

import ImageSlider from "../components/ImageSlider";

export default function Home() {
  const title1 = "SAFE, SECURE & <br> MONITORED PREMISE";
  const title2 = "CHILDPROOFING <br> MEASURES IN PLACE";
  const title3 = "CARING & TRAINED <br> STAFF";
  const title4 = "AGE APPROPRIATE <br> TOYS";
  const title5 = "STRUCTURED <br> SCHEDULE";
  return (
    <Layout>
      {/* Hero */}
      <div className="mx-12 h-screen pt-12">
        <div className="flex w-full h-1/3 justify-between">
          <img src={main1} alt="kids1" className="w-1/5 rounded-md" />
          <div className="flex flex-col self-end">
            <h1 className="text-center text-xl font-semibold">
              BOOST YOUR CHILD’S FUTURE
            </h1>
            <p className="text-lg text-center">
              Make the journey of learning truly a joyous and an impactful
              experience.
            </p>
          </div>
          <img src={main2} alt="kids2" className="w-1/5 rounded-md" />
        </div>
        <div className="mt-2 flex w-full h-1/3 justify-around">
          <img src={main3} alt="" className="w-1/5 rounded-md" />
          <div className="w-1/4 flex flex-col self-center">
            <Button
              styles="text-white bg-button rounded-full px-10 py-2 shadow-lg font-semibold text-lg"
              label="Join Now!"
            />
          </div>
          <img src={main4} alt="" className="w-1/5 rounded-md" />
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="mb-10 w-screen h-screen bg-white shadow-inner">
        <div className="mx-12 py-10">
          <h2 className="text-center text-xl font-semibold text-button">
            WHY CHOOSE US?
          </h2>
          <p className="mt-2 text-lg text-center">
            We at Petits World provide day care and after school care facilities
            for kids during both day time and after school hours.
          </p>
        </div>
        <div className="mx-12 flex justify-between ">
          <ChooseUsCard img={wc1} title={title1} />
          <ChooseUsCard img={wc2} title={title2} />
          <ChooseUsCard img={wc3} title={title3} />
          <ChooseUsCard img={wc4} title={title4} />
          <ChooseUsCard img={wc5} title={title5} />
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-center text-xl font-semibold ">TESTIMONIALS</h3>
        <div>
          <p></p>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <title>Petits World</title>;
