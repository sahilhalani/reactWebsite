import React from "react";
import img from "../src/img/support.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        text="Grow your business with "
        img={img}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
