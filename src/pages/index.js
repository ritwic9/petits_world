import * as React from "react";
import { Link } from "gatsby";

//components
import Layout from "../components/Layout";
import Button from "../components/Button";
import ChooseUsCard from "../components/ChooseUsCard";
import { TestimonialCard } from "../components/TestimonialCard";

//assets
import wc1 from "../images/svg/wc1.svg";
import wc2 from "../images/svg/wc2.svg";
import wc3 from "../images/svg/wc3.svg";
import wc4 from "../images/svg/wc4.svg";
import wc5 from "../images/svg/wc5.svg";
import img1 from "../images/main1.jpg";
import img2 from "../images/main2.jpg";
import img3 from "../images/main3.jpg";

export default function Home() {
  const title1 = "SAFE, SECURE & <br> MONITORED PREMISE";
  const title2 = "CHILDPROOFING <br> MEASURES IN PLACE";
  const title3 = "CARING & TRAINED <br> STAFF";
  const title4 = "AGE APPROPRIATE <br> TOYS";
  const title5 = "STRUCTURED <br> SCHEDULE";

  return (
    <Layout>
      {/* Hero */}
      <section className="mx-2 lg:mx-12">
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col py-2 lg:py-0">
            <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
              BOOST YOUR CHILD’S FUTURE
            </h1>
            <p className="text-md lg:text-lg lg:text-center">
              Make the journey of learning truly a joyous and an impactful
              experience!
            </p>
          </div>
          <div className="py-2 grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2">
            <img className="rounded-md h-full w-full" src={img1} alt="" />
            <img
              className="rounded-md hidden lg:block h-full w-full"
              src={img2}
              alt=""
            />
            <img
              className="rounded-md hidden lg:block h-full w-full"
              src={img3}
              alt=""
            />
          </div>
        </div>
        <Link to="/sayhello" className="flex justify-center">
          <Button
            styles="my-2 text-white bg-button rounded-full px-10 py-2 shadow-lg font-semibold text-md border-2 border-button hover:bg-primary hover:text-button hover:border-2 focus:ring focus:ring-button"
            label="Join Now!"
          />
        </Link>
      </section>

      {/* Why Choose Us? */}
      <section className="px-2 my-6 bg-white shadow-inner pt-2 pb-11 h-full lg:rounded-full lg:-mx-10">
        <div className=" lg:my-4 lg:mx-13 ">
          <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
            WHY CHOOSE US?
          </h2>
          <p className="mt-2 text-md lg:text-lg font-medium pb-5 lg:pb-10">
            We are three enthusiasts who are passionate about teaching and
            caring for children. All three of us hold college/professional
            degree qualification on different fields, but we have discovered
            over the period of time, that our heart and minds are with the kids!
          </p>
        </div>
        <div className="mx-2 lg:mx-13 my-5 lg:my-0 flex flex-col lg:flex-row lg:justify-around items-center">
          <ChooseUsCard img={wc1} title={title1} />
          <ChooseUsCard img={wc2} title={title2} />
          <ChooseUsCard img={wc3} title={title3} />
          <ChooseUsCard img={wc4} title={title4} />
          <ChooseUsCard img={wc5} title={title5} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="my-2 lg:mx-12">
        <h3 className="py-2 text-center text-lg lg:text-xl font-semibold">
          TESTIMONIALS
        </h3>
        <div className="bg-white py-3 px-1 rounded-tr-3xl rounded-bl-3xl">
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
