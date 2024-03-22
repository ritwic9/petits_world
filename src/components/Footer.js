import React from "react";
import { Link } from "gatsby";

//components
import navLogo from "../images/svg/nav.svg";
import insta from "../images/svg/instagram.svg";
import facebook from "../images/svg/facebook.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-white rounded-full shadow-lg">
      <div className="px-5 py-1 flex items-center">
        <img src={navLogo} alt="Logo" />
        <p className="px-3 font-semibold text-sm">TIMINGS - 9:15AM TO 6:00PM</p>
      </div>
      {/* Social media buttons */}
      <div className="flex mr-5">
        <div className="flex items-center mr-3">
          <a
            href="https://instagram.com/suyashafacilityventures?igshid=MWZjMTM2ODFkZg=="
            target="_blank"
            rel="noreferrer"
            className=" "
          >
            <img src={insta} alt="instagram" className="w-9 h-9" />
          </a>
          <a
            href="https://www.facebook.com/people/Suyasha-Facility-Ventures/61550851400187/?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <img src={facebook} alt="facebook" className="w-9 h-9" />
          </a>
        </div>

        <Link
          to="/privacy-policy"
          className="content-center text-md font-semibold"
        >
          PRIVACY POLICY
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
