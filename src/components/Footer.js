import React from "react";
import { Link } from "gatsby";

//components
import navLogo from "../images/svg/nav.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-white rounded-full shadow-lg">
      <div className="px-5 py-1">
        <img src={navLogo} alt="Logo" />
        <p>TIMINGS - 9:15AM TO 6:00PM</p>
      </div>
      <div className="px-5 py-1 content-center">
        {/* Navbar button */}
        <Link className="" to="/sayHello">
          <Button label="Say Hello!" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
