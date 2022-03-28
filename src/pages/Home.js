import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
