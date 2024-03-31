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

import ImageCarousel from "../components/ImageCarousel";
import { TestimonialCard } from "../components/TestimonialCard";

export default function Home() {
  const title1 = "SAFE, SECURE & <br> MONITORED PREMISE";
  const title2 = "CHILDPROOFING <br> MEASURES IN PLACE";
  const title3 = "CARING & TRAINED <br> STAFF";
  const title4 = "AGE APPROPRIATE <br> TOYS";
  const title5 = "STRUCTURED <br> SCHEDULE";
  return (
    <Layout>
      {/* Hero */}
      <section className="m-2 lg:mx-12 h-screen pt-10">
        <div className="flex w-full justify-center">
          <div className="flex flex-col self-end">
            <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
              BOOST YOUR CHILD’S FUTURE
            </h1>
            <p className="text-md lg:text-lg lg:text-center">
              Make the journey of learning truly a joyous and an impactful
              experience.
            </p>
          </div>
          {/* <ImageCarousel /> */}
        </div>
        <div className="mt-2 flex lg:justify-center">
          <Button
            styles="text-white bg-button rounded-full px-10 py-2 shadow-lg font-semibold text-lg"
            label="Join Now!"
          />
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="px-2 my-2 bg-white shadow-inner py-5 h-full">
        <div className=" lg:py-6 lg:mx-12 ">
          <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
            WHY CHOOSE US?
          </h2>
          <p className="mt-2 text-md lg:text-lg">
            We are three enthusiasts who are passionate about teaching and
            caring for children. All three of us hold college/professional
            degree qualification on different fields, but we have discovered
            over the period of time, that our heart and minds are with the kids!
          </p>
        </div>
        <div className="mx-2 lg:mx-12 my-5 lg:my-0 flex flex-col lg:flex-row lg:justify-around items-center">
          <ChooseUsCard img={wc1} title={title1} />
          <ChooseUsCard img={wc2} title={title2} />
          <ChooseUsCard img={wc3} title={title3} />
          <ChooseUsCard img={wc4} title={title4} />
          <ChooseUsCard img={wc5} title={title5} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="m-1">
        <h3 className="text-center text-lg lg:text-xl font-semibold">
          TESTIMONIALS
        </h3>
        <div className="bg-white p-1">
          <p className="text-sm text-button font-semibold text-center">
            See what others have to say about us!
          </p>
          <div className="">
            <TestimonialCard />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => <title>Petits World</title>;
