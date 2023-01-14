import React from "react";
import "../../StyleCss/Homepage.css";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import FrontEndSkill from "./FrontEndSkill";
import ToolsSkill from "./ToolsSkill";

const Homepage = () => {
  return (
    <section className="lg:flex justify-items-center">

      <div className="lg:w-[20%]" ></div>

      <div className="lg:w-[80%] ">
        <Banner />
        <AboutMe/>
        <FrontEndSkill/>
        <ToolsSkill/>   
        
        </div>
      
    </section>
  );
};

export default Homepage;
