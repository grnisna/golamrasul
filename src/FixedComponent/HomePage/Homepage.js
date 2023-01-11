import React from "react";
import MenuSection from "../../SharedComponent/MenuSection/MenuSection";
import "../../StyleCss/Homepage.css";

import Banner from "./Banner";

const Homepage = () => {
  return (
    <section className="flex justify-items-center">

      <div className="w-[20%] bg-accent"><MenuSection/></div>

      <div className="w-[80%] "><Banner /></div>
      
    </section>
  );
};

export default Homepage;
