import React from "react";
import { Link } from "gatsby";

//components
import navLogo from "../images/svg/nav.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between bg-white rounded-full shadow-lg">
      <div className="px-5 py-1">
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="px-5 py-1 content-center">
        <Link to="/poppinsClub" className="w-full text-md mr-5">
          Poppins Club
        </Link>
        <Link to="/programs" className="w-full text-md mr-5">
          Programs
        </Link>
        <Link to="/aboutUs" className="w-full text-md mr-5">
          About Us
        </Link>

        {/* Navbar button */}
        <Link className="" to="/sayHello">
          <Button label="Say Hello!" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
