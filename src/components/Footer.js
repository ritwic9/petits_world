import React from "react";
import { Link } from "gatsby";

//assets
import navLogo from "../images/svg/logo.svg";
import insta from "../images/svg/instagram.svg";
import facebook from "../images/svg/facebook.svg";

const Footer = () => {
  return (
    <footer className="hidden lg:flex lg:mx-12 mb-3 justify-between bg-white lg:bg-opacity-70 hover:bg-opacity-100 lg:rounded-full shadow-lg">
      <div className="py-1 flex items-center px-2">
        <img className="h-7 w-14 mr-5" src={navLogo} alt="Logo" />
        <p className="font-semibold text-sm">TIMINGS - 9:15AM TO 6:00PM</p>
      </div>

      {/* Social media buttons */}
      <div className="flex mr-4">
        <div className="flex items-center mr-3">
          <a
            href="https://www.instagram.com/petitsworld?igsh=MXhyN3p3eWVsY2xidw=="
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram" className="w-9 h-9 " />
          </a>
          <a
            href="https://www.facebook.com/share/FMsEUQnrdGWo6bFM/?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" className="w-9 h-9" />
          </a>
        </div>

        <Link
          to="/privacypolicy"
          className="content-center text-sm font-semibold underline"
        >
          PRIVACY POLICY
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
