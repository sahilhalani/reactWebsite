import React from "react";
import img from "../src/img/about.png";
import Common from "./Common";

const About = () => {
  return (
    <>
       <Common
        text="Welcome to about page "
        img={img}
        visit="/contact"
        btname="Contact now"
      />
    </>
  );
};

export default About;
