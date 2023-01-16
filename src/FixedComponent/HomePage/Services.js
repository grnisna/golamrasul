import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { SlScreenDesktop, SlSpeedometer } from "react-icons/sl";
import { RiBug2Line } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="lg:mt-28 mt-5 px-5">
      <h1 className="lg:text-3xl text-center text-xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
        WHAT DO I DO ?
        <AiOutlineMinus size={36} className="mx-auto" />
      </h1>

      <div class=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 ">
        <div class=" lg:flex lg:justify-items-center lg:p-8 p-3 bg-gray-100 hover:bg-success rounded-xl">
          <div class="">
            <SlScreenDesktop size={40} className="lg:mx-none mx-auto" />
          </div>
          <div class="lg:ml-10">
            <h2 class="lg:text-left text-center font-bold">Web Development</h2>
            <p className="text-justify">
              I can build any type of website like your business, portfolio,
              e-commerce website, blog site etc. Build a webstie is my passion.
              So, I really happy to create a website as you need.
            </p>
          </div>
        </div>
        <div class=" lg:flex lg:justify-items-center lg:p-8 p-3 bg-gray-100 hover:bg-success rounded-xl">
          <div>
            <RiBug2Line
              size={50}
              class="rounded-full bg-white lg:mx-none mx-auto"
            />
          </div>
          <div class="lg:ml-10">
            <h2 class=" lg:text-left  text-center font-bold">Bug Fixing</h2>
            <p className="text-justify">
              It's a common problem for every website is bugs .I can find your
              bugs and solved it easily. I can fix any type of problems & bugs
              for any website.
            </p>
          </div>
        </div>
        <div class=" lg:flex lg:justify-items-center lg:p-8 p-3 bg-gray-100 hover:bg-success rounded-xl">
          <div class="p-5">
            <SlSpeedometer
              size={40}
              class="rounded-full bg-white lg:mx-none mx-auto"
            />
          </div>
          <div class="lg:ml-10">
            <h2 class=" lg:text-left  text-center font-bold">
              Speed Optimization
            </h2>
            <p>
              If your website is slow loading don't worry. I can solved this
              problem.
            </p>
          </div>
        </div>
        <div class="  lg:flex lg:justify-items-center lg:p-8 p-3 bg-gray-100 hover:bg-success rounded-xl">
          <div class="">
            <FaWordpressSimple
              size={40}
              class="rounded-full bg-white lg:mx-none mx-auto"
            />
          </div>
          <div class="lg:ml-10">
            <h2 class=" lg:text-left  text-center font-bold">
              WordPress Web Development
            </h2>
            <p>
              I'm freelancer for WordPress Web Developer. Any type of website if
              you need I can create easily and short time.
            </p>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Services;
