import React from "react";
import AboutMeBG from "../../Assets/aboutMeBG.png";
import golamrasul from "../../Assets/golamrasul.png";
import { AiOutlineMinus } from "react-icons/ai";
import computerProjects from "../../Assets/computerProjects.png";
import teamProjects from "../../Assets/teamProjects.png";
const AboutMe = () => {
  return (
    <div className="lg:flex justify-items-center lg:mt-24 mt-5">
      {/* --------------------photo area --------------- */}
      <div
        style={{
          background: `url(${AboutMeBG})`,
          backgroundSize: "cover",
        }}
        className="photoArea lg:w-[30%] lg:ml-14 lg:p-5 "
      >
        <div className="grid grid-cols-2 gap-2">
          <img
            className="w-28 bg-success mx-auto   p-0 m-0 rounded-full"
            src={golamrasul}
            alt=""
          />
          <img
            className="w-28 bg-neutral  mx-auto  p-0 m-0 rounded-full"
            src={golamrasul}
            alt=""
          />
          <img
            className="w-28 bg-error  mx-auto  p-0 m-0 rounded-full"
            src={golamrasul}
            alt=""
          />
          <img
            className="w-28 bg-info  mx-auto p-0 m-0 rounded-full"
            src={golamrasul}
            alt=""
          />
        </div>
      </div>

      {/* --------------------text area --------------- */}

      <div className="textAria lg:w-[70%]">
        <h1 className="lg:text-5xl text-3xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
          ABOUT ME <AiOutlineMinus size={36} />{" "}
        </h1>
        <h2 className="text-xl font-bold font-sans lg:ml-10  px-5 lg:px-0">
          I'm Front-End Developer with over 1.5 years of experience
        </h2>
        <h2 className="text-xl font-sans lg:ml-5 text-justify lg:px-5 px-5">
          As a enthusiast, I explore new thing. Base on my interst, i explore
          programming language. I really like JavaScirpt. It's easy to learn and
          has library, framework that cab be done big big web application. I
          done severals projects with JavaScript library, framework like React
          Js, Node Js, Express Js, database tools like firebase, MongoDB etc.
          I'm also expert in WordPress Web Development. Here I work as a
          Freelancer in different Market-place like "Fiverr, Upwork, People Per
          Hours, Freeelancer.com ".
        </h2>
        <div className="flex justify-center items-center lg:ml-10 px-5">
          <div className="mx-auto ">
            <img className=" p-5" src={computerProjects} alt="" />
            <h3 className="font-bold">20+ Projects</h3>
            <h4>Frontend + Backend</h4>
          </div>
          <div className="divider divider-horizontal h-32 mt-5"></div>
          <div className="mx-auto"> 
            <img className="p-5" src={teamProjects} alt="" />
            <h3 className="font-bold">1+ Team Projects</h3>
            <h3>Role: Member</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
