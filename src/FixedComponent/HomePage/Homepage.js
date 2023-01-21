import React from "react";
import "../../StyleCss/Homepage.css";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import FrontEndSkill from "./FrontEndSkill";
import ToolsSkill from "./ToolsSkill";
import Services from "./Services";
import MyPortfolio from "./MyPortfolio";
import ContactMe from "./ContactMe";

const Homepage = () => {
  return (
    <section className="lg:flex justify-items-center mb-10">

      <div className="lg:w-[20%]" ></div>

      <div className="lg:w-[80%] ">
        <Banner />
        <AboutMe/>
        <FrontEndSkill/>
        <ToolsSkill/>
        <Services/>
        <MyPortfolio/>
        <ContactMe/>
        
        </div>
      
    </section>
  );
};

export default Homepage;
