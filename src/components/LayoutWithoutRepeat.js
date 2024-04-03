import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const LayoutWithoutRepeat = ({ children }) => {
  return (
    <div className="bg-[url('../images/svg/bg.svg')] bg-auto lg:bg-contain">
      <Header />
      <main className="overflow-x-hidden mt-5 mb-5 lg:mt-11 lg:mb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWithoutRepeat;
