import React from "react";
import { Link } from "gatsby";

//components
import Button from "./Button";

//assets
import navLogo from "../images/svg/nav.svg";
import close from "../images/svg/close.svg";
import insta from "../images/svg/instagram.svg";
import facebook from "../images/svg/facebook.svg";

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={
        isOpen
          ? "w-full h-full bg-primary z-50 fixed top-0 left-0 transition-all duration-3000 ease-in-out overflow-y-hidden"
          : "w-full h-full bg-primary z-50 fixed top-0 -left-14 transition-all duration-3000 ease-in-out overflow-y-hidden"
      }
    >
      <div className="flex justify-between px-2 py-1">
        <Link to="/">
          <img src={navLogo} alt="Logo" />
        </Link>
        <button
          className="flex bg-white p-3 rounded-full h-1/4 self-center shadow-lg"
          onClick={onClose}
        >
          <img src={close} alt="close" />
        </button>
      </div>

      {/* Header part */}
      <div className="flex flex-col mt-10 items-center gap-4">
        <Link
          to="/programs"
          activeClassName="active"
          activeStyle={{ color: "#F15956", fontWeight: "600" }}
          className="text-md hover:text-button"
        >
          Programs
        </Link>
        <Link
          to="/ourmission"
          activeClassName="active"
          activeStyle={{ color: "#F15956", fontWeight: "600" }}
          className="text-md hover:text-button"
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

      {/* Footer part */}
      <div className="flex flex-col mt-13 items-center gap-4">
        <div className="">
          <p className="font-semibold text-sm">TIMINGS - 9:15AM TO 6:00PM</p>
        </div>
        {/* Social */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/petitsworld?igsh=MXhyN3p3eWVsY2xidw=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="instagram" className="w-9 h-9" />
            </a>
            <a
              href="https://www.facebook.com/share/FMsEUQnrdGWo6bFM/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="w-9 h-9" />
            </a>
          </div>

          <Link to="/privacypolicy" className="text-sm font-semibold underline">
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
