import React from "react";
import { Link } from "gatsby";

//components
import navLogo from "../images/svg/nav.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex lg:mx-12 sticky top-0 lg:top-3 justify-between bg-white lg:bg-opacity-90 hover:bg-opacity-100 lg:rounded-full shadow-lg items-center">
      <div className="px-2 lg:px-5 py-1">
        <Link to="/">
          <img src={navLogo} alt="Logo" />
        </Link>
      </div>
      <div className="hidden lg:flex px-5 py-1 items-center">
        <Link to="/poppinsClub" className="text-md mr-5 hover:text-button ">
          Poppins Club
        </Link>
        <Link to="/programs" className="text-md mr-5 hover:text-button">
          Programs
        </Link>
        <Link to="/ourmission" className="text-md mr-5 hover:text-button">
          About Us
        </Link>

        {/* Navbar button */}
        <Link to="/sayhello">
          <Button
            styles="text-md text-white bg-button rounded-full px-5 py-1 shadow-lg font-semibold hover:bg-primary hover:text-button"
            label="Say Hello!"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
