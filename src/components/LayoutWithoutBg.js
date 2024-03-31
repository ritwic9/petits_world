import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const LayoutWithoutBg = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWithoutBg;
