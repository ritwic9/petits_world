import React from "react";
import { Link } from "gatsby";

//components
import navLogo from "../images/svg/nav.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="mx-12 sticky top-3 flex justify-between bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow-lg">
      <div className="px-5 py-1">
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="px-5 py-1 content-center">
        <Link to="/poppinsClub" className="text-md mr-5">
          Poppins Club
        </Link>
        <Link to="/programs" className="text-md mr-5">
          Programs
        </Link>
        <Link to="/aboutUs" className="text-md mr-5">
          About Us
        </Link>

        {/* Navbar button */}
        <Link className="" to="/sayHello">
          <Button
            styles="text-md text-white bg-button rounded-full px-5 py-1 shadow-lg font-semibold"
            label="Say Hello!"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
