import React from "react";

import { AiOutlineMinus } from "react-icons/ai";
import taskManagement from "../../Assets/portfolioImage/taskManagement.png";
import carService from "../../Assets/portfolioImage/carService.png";
import gr_caster from "../../Assets/portfolioImage/gr_caster.png";
import doctors_chamber from "../../Assets/portfolioImage/doctors_chamber.png";
import cathedicHouse from "../../Assets/portfolioImage/cathedicHouse.png";
import poyshaPay from "../../Assets/portfolioImage/poyshaPay.png";

const MyPortfolio = () => {
  return (
    <div id="myPortfolio" className="lg:mt-28 mt-5 px-5">
      <h1 className="lg:text-3xl text-center text-xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
        MY PORTFOLIO
        <AiOutlineMinus size={36} className="mx-auto" />
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        
        
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={doctors_chamber} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
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
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={gr_caster} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://gr-caster.firebaseapp.com/"
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
          <h3 className="text-xl font-bold font-mono text-center">Gr Caster</h3>

        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={cathedicHouse} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://warehouse-electrics-70.web.app/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/warehouse-management-client-11"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/warehouse-server-11"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Cathedic House</h3>

        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={poyshaPay} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://poysha-pay.web.app/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/POYSHA-pay"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/POYSHA-pay-server"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Poysha Pay (Team Projects)</h3>

        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={carService} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://genious-car-services-78c0c.web.app/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/genius-car-client-68"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/genius-car-server-68"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Car Services</h3>

        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xl ">
          <img src={taskManagement} className="lg:max-w-xl max-w-l" alt="doctors portal" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-90 transition duration-300 ease-in-out bg-neutral flex justify-center items-center gap-4">
            <a
              href="https://task-management-d2dae.web.app/"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Live site
            </a>
            <a
              href="https://github.com/grnisna/Daily-task-management"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Client site
            </a>
            <a
              href="https://github.com/grnisna/taskmanagementServer"
              className="text-center font-bold btn glass  hover:bg-white hover:text-black font-mono rounded-none "
            >
              Server site
            </a>
          </div>
          <h3 className="text-xl font-bold font-mono text-center">Task Management</h3>

        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
