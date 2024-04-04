import React, { useState } from "react";

//components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ContactCard from "../components/ContactCard";

//assets
import image from "../images/contact.jpg";
import img2 from "../images/main2.jpg";
import img3 from "../images/main3.jpg";
import contact1 from "../images/svg/location.svg";
import contact2 from "../images/svg/call.svg";
import contact3 from "../images/svg/email.svg";

const SayHello = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");

  //Content
  const content1 =
    "'Shree Para'<br> Malemar Road <br> Derebail, Konchady <br> Mangaluru-575006";
  const content2 = "0824-7968118 <br> +91-6366052831";
  const content3 = "petitsworld@gmail.com <br> sayhello@petitsworld.com";

  //List of groups
  const groups = [
    "Play Group",
    "Nursery",
    "Early Learning 1",
    "Early Learning 2",
    "Day Care",
  ];

  // Event handlers to handle changes
  const handleGroupChange = (e) => {
    setGroup(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  //Submit async function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "6dacf15f-39e8-442f-8a8c-15129a7817e3");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setMessage(
        "Thankyou for contacting Petits World. We'll schedule a call with you shortly!"
      );
      console.log("Success", res);
    } else {
      setMessage("Sorry we're facing some issues. Please try again later!");
      console.log("Error", res);
    }
  };

  return (
    <Layout>
      {/* Seo added below */}
      <Seo
        title="Say Hello"
        description="We are a place away from home, designed keeping in mind your child's safety and comfort!"
        article="false"
      />
      {/* Hero */}
      <section className="m-2 lg:mx-12">
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col py-2">
            <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
              PETITS WORLD IS A PLACE AWAY FROM HOME, DESIGNED KEEPING IN MIND
              YOUR CHILD'S SAFETY AND COMFORT!
            </h1>
          </div>
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-2 lg:h-15">
            <img
              className="rounded-md h-full w-full"
              src={image}
              alt="Play based learning"
            />
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
      </section>

      {/* Form */}
      <section className="px-2 my-2 py-5 h-full lg:mx-12 lg:my-5">
        <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
          CONTACT US
        </h2>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="lg:flex lg:flex-row lg:w-full">
            <InputField
              placeholder="Name*"
              name="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <InputField
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="lg:flex lg:flex-row lg:w-full">
            <InputField
              name="phoneNumber"
              placeholder="Phone Number*"
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <select
              id="group"
              name="group"
              value={group}
              onChange={handleGroupChange}
              className="my-2 lg:m-2 rounded-md p-2 w-full shadow-lg"
            >
              <option value="">Select a group*</option>
              {groups.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          {message && (
            <span className="my-1 text-sm font-semibold text-button">
              {message}
            </span>
          )}
          <div className="text-center">
            <Button
              styles="mt-2 text-white bg-button rounded-full px-10 py-2 shadow-lg font-semibold text-md border-2 border-button hover:bg-primary hover:text-button hover:border-2 focus:ring focus:ring-button"
              label="Submit"
              type="submit"
            />
          </div>
        </form>
      </section>

      {/* Map */}
      <section className="p-2 mx-2 bg-white shadow-inner h-full rounded-tr-3xl rounded-bl-3xl lg:mx-12">
        <div className="lg:flex lg:justify-between">
          <ContactCard img={contact1} content={content1} />
          <ContactCard img={contact2} content={content2} />
          <ContactCard img={contact3} content={content3} />
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.0251986664534!2d74.84360117507534!3d12.906101187403243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzIyLjAiTiA3NMKwNTAnNDYuMiJF!5e0!3m2!1sen!2sfr!4v1712258739212!5m2!1sen!2sfr"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default SayHello;
