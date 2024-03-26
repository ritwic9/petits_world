import React from "react";

//components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" bg-repeat-y  bg-[url('../images/bg.png')] bg-cover bg-opacity-20 h-screen w-screen">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
