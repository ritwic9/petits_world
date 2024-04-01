import React, { useState } from "react";

//components
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import Button from "../components/Button";

//assets
import image from "../images/contact.jpg";
import ContactCard from "../components/ContactCard";
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
  const content1 = "Coming Soon";
  const content2 = "+91-6366052831";
  const content3 = "petitisworld@gmail.com <br> sayhello@petitsworld.com";

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
      {/* Hero */}
      <section className="m-2 lg:mx-12 pt-8">
        <div className="flex flex-col w-full justify-center">
          <h1 className="lg:text-center text-lg lg:text-xl font-semibold">
            PETITS WORLD IS A PLACE AWAY FROM HOME, DESIGNED KEEPING IN MIND
            YOUR CHILD'S SAFETY AND COMFORT!
          </h1>
        </div>
        <div className="py-2">
          <img src={image} alt="Children playing" />
        </div>
      </section>
      {/* Form */}
      <section className="px-2 my-2 py-5 h-full">
        <h2 className="text-center text-lg lg:text-xl font-semibold text-button">
          CONTACT US
        </h2>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div>
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
          <div>
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
              className="my-2 rounded-md p-2 w-full shadow-lg"
            >
              <option value="">Select a service*</option>
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
              styles="mt-2 text-white bg-button rounded-full px-10 py-2 shadow-lg font-semibold text-md hover:bg-primary hover:text-button focus:ring focus:ring-button"
              label="Submit"
              type="submit"
            />
          </div>
        </form>
      </section>
      {/* Map */}
      <section className="p-2 my-2 bg-white shadow-inner h-full rounded-tr-3xl rounded-bl-3xl">
        <div>
          <ContactCard img={contact1} content={content1} />
          <ContactCard img={contact2} content={content2} />
          <ContactCard img={contact3} content={content3} />
        </div>
      </section>
    </Layout>
  );
};

export default SayHello;

export const Head = () => <title>Contact Us | Book your service now!</title>;
