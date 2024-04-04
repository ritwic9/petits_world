import React from "react";

//components
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const LayoutWithoutBg = ({ children }) => {
  return (
    <div className="">
      <SEO />
      <Header />
      <main className="overflow-x-hidden mt-5 mb-5 lg:mt-11 lg:mb-10">
        {children}
      </main>
      <Footer />
      <div className="bg-white">
        <p className="text-center text-bd2 font-medium">
          Crafted with {"\u2665"} by{" "}
          <a
            className="underline"
            href="https://bugboxmedia.in/"
            target="_blank"
            rel="noreferrer"
          >
            Bugbox Media
          </a>
        </p>
      </div>
    </div>
  );
};

export default LayoutWithoutBg;
