import React, { useState } from "react";
import { Link } from "gatsby";

//components
import Button from "./Button";
import MobileSidebar from "./MobileSidebar";

//assets
import navLogo from "../images/svg/logo.svg";
import hamburger from "../images/svg/hamburger.svg";

const Header = () => {
  const [MobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <header className="z-10 flex lg:mx-12 sticky top-0 lg:top-3 justify-between bg-white lg:bg-opacity-90 hover:bg-opacity-100 lg:rounded-full shadow-lg items-center">
      {MobileSidebarOpen === true ? (
        <MobileSidebar
          isOpen={MobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      ) : (
        <>
          <div className="px-2 lg:px-5 py-1">
            <Link to="/">
              <img className="h-5 lg:h-7 w-full" src={navLogo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex px-5 py-1 items-center">
            <Link
              to="/programs"
              activeClassName="active"
              activeStyle={{ color: "#F15956", fontWeight: "600" }}
              className="text-md mr-5 hover:text-button"
            >
              Programs
            </Link>
            <Link
              to="/ourmission"
              activeClassName="active"
              activeStyle={{ color: "#F15956", fontWeight: "600" }}
              className="text-md mr-5 hover:text-button"
            >
              Our Mission
            </Link>

            {/* Navbar button */}
            <Link to="/sayhello">
              <Button
                styles="text-md text-white bg-button rounded-full px-5 py-1 shadow-lg font-semibold border-2 border-button hover:bg-primary hover:text-button hover:border-button"
                label="Say Hello!"
              />
            </Link>
          </div>
          <div className="lg:hidden px-2 py-1">
            <button
              className="p-3 bg-button flex bg-secondary self-center rounded-full shadow-lg"
              onClick={() => setMobileSidebarOpen(!MobileSidebarOpen)}
            >
              <img src={hamburger} alt="hamburger" />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
