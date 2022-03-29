import React from "react";
import Banner from "../components/Banner";
import Sponsor from "../components/Sponsor";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Sponsor />
    </div>
  );
};

export default Home;
