import React from "react";
import { Link } from "gatsby";

//assets
import navLogo from "../images/svg/nav.svg";
import insta from "../images/svg/instagram.svg";
import facebook from "../images/svg/facebook.svg";

const Footer = () => {
  return (
    <footer className="hidden lg:flex lg:mx-12 mb-3 justify-between bg-white lg:bg-opacity-70 hover:bg-opacity-100 lg:rounded-full shadow-lg">
      <div className="px-5 py-1 flex items-center">
        <img src={navLogo} alt="Logo" />
        <p className="px-3 font-semibold text-sm">TIMINGS - 9:15AM TO 6:00PM</p>
      </div>
      {/* Social media buttons */}
      <div className="flex mr-5">
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
          to="/privacy-policy"
          className="content-center text-sm font-semibold underline"
        >
          PRIVACY POLICY
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
