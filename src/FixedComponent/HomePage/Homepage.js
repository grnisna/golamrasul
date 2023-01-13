import React from "react";
import MenuSection from "../../SharedComponent/MenuSection/MenuSection";
import menuBG from "../../Assets/menuBG.png";
import "../../StyleCss/Homepage.css";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <section className="flex justify-items-center">

      <div style={{
          background:`url(${menuBG})`,
          backgroundSize:"cover"
        }} className="w-[20%]"><MenuSection/></div>

      <div className="w-[80%] "><Banner /></div>
      
    </section>
  );
};

export default Homepage;
