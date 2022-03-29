import React from "react";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Sponsor from "../components/Sponsor";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Sponsor />
      <Reviews />
    </div>
  );
};

export default Home;
