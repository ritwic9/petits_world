import * as React from "react";

//components
import Layout from "../layout/layout";
import Button from "../components/Button";
import ChooseUsCard from "../components/ChooseUsCard";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div>
        <div className="flex">
          <img src="" alt="" />
          <div className="flex flex-column">
            <h1>BOOST YOUR CHILD’S FUTURE</h1>
            <h2>
              Make the journey of learning truly a joyous and an impactful
              experience.
            </h2>
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <Button label="Join Now!" />
          <img src="" alt="" />
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="bg-white rounded-full">
        <div>
          <h2>WHY CHOOSE US?</h2>
          <p>
            We at Petits World provide day care and after school care facilities
            for kids during both day time and after school hours.
          </p>
        </div>
        <div>
          <ChooseUsCard img={safe} />
        </div>
      </div>

      {/* Testimonials */}
      <div></div>
    </Layout>
  );
}

export const Head = () => <title>Petits World</title>;
