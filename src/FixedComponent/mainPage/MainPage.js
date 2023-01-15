import React from "react";

import menuBG from "../../Assets/menuBG.png";
import MenuSection from "../../SharedComponent/MenuSection/MenuSection";
import Homepage from "../HomePage/Homepage";

const MainPage = () => {
  return (
    <section className="lg:flex justify-items-center scroll-smooth">
      {/* Menu Aread */}
      <div
        style={{
          background: `url(${menuBG})`,
          backgroundSize: "cover",
        }}
        className="lg:w-[20%] hidden lg:block fixed min-h-screen"
      >
        <MenuSection />
      </div>
      {/* content Area */}
      <div>
        <Homepage/>
      </div>
    </section>
  );
};

export default MainPage;
