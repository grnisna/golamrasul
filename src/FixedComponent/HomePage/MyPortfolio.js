import React from "react";

import { AiOutlineMinus } from "react-icons/ai";
import dortors_portal from "../../Assets/portfolioImage/doctors_portal.png";
import gr_caster from "../../Assets/portfolioImage/gr_caster.png";
import cathedicHouse from "../../Assets/portfolioImage/cathedicHouse.png";

const MyPortfolio = () => {
  return (
    <div className="lg:mt-28 mt-5 px-5">
      <h1 className="lg:text-3xl text-center text-xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
        MY PORTFOLIO
        <AiOutlineMinus size={36} className="mx-auto" />
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={dortors_portal} class="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://doctor-portal-64aa6.firebaseapp.com/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster-server"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Doctors Chamber</h3>
        </div>
        <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={cathedicHouse} class="max-w-5xl" alt="doctors portal" />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://doctor-portal-64aa6.firebaseapp.com/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster-server"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Doctors Chamber</h3>

        </div>
        <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={gr_caster} class="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://doctor-portal-64aa6.firebaseapp.com/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/gr-caster-server"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">GR Caster</h3>

        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
