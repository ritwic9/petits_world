import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-repeat-y bg-[url('../images/svg/bg.svg')] bg-auto lg:bg-contain">
      <Header />
      <main className="overflow-x-hidden mt-5 mb-5 lg:mt-10 lg:mb-10">
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

export default Layout;
