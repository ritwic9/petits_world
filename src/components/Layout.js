import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-repeat-y bg-[url('../images/svg/bg.svg')] bg-auto lg:bg-contain">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
