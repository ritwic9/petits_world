import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const LayoutWithoutBg = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="overflow-x-hidden mt-5 mb-5 lg:mt-11 lg:mb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWithoutBg;
