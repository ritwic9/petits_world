import React from "react";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <main className="lg:mx-max lg:my-3">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
