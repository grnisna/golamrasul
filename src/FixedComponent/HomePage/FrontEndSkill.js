import React from "react";
import Certificate from "../../Assets/Certification.png";
import Html from "../../Assets/html-5.png";
import css from "../../Assets/Icons/css3.png";
import bootstrap from "../../Assets/Icons/bootstrap.png";
import tailwind from "../../Assets/Icons/tailwind.png";
import javascript from "../../Assets/Icons/javascript.png";
import express from "../../Assets/Icons/express.png";
import firebase from "../../Assets/Icons/firebase.png";
import redux from "../../Assets/Icons/redux.png";
import jwt from "../../Assets/Icons/jwt.png";
import mongodb from "../../Assets/Icons/mongodb.png";
import node from "../../Assets/Icons/node-js.png";
import react from "../../Assets/Icons/react.png";
import { AiOutlineMinus } from "react-icons/ai";

const FrontEndSkill = () => {
  return (
    <div className="lg:flex justify-items-center lg:flex-row-reverse lg:mt-28 mt-5">
      <div>
        <h1 className="lg:text-3xl text-xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
          TECHNICAL SKILLS<AiOutlineMinus size={36} />{" "}
        </h1>
        <img src={Certificate} alt="" />
      </div>

      <div className="lg:ml-14 px-3 lg:w-[70%]">
        <div className="grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-5 text-center">
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={Html} alt="" />
            <h2 className="text-center font-bold ">HTML</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={css} alt="" />
            <h2 className="text-center font-bold ">CSS</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={bootstrap} alt="" />
            <h2 className="text-center font-bold ">BOOTSTRAP</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={tailwind} alt="" />
            <h2 className="text-center font-bold ">TAILWIND</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={javascript} alt="" />
            <h2 className="text-center font-bold ">JS</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={react} alt="" />
            <h2 className="text-center font-bold ">REACT JS</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={redux} alt="" />
            <h2 className="text-center font-bold ">REACT</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={firebase} alt="" />
            <h2 className="text-center font-bold ">FIREBASE</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={node} alt="" />
            <h2 className="text-center font-bold ">NODE JS</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={mongodb} alt="" />
            <h2 className="text-center font-bold ">MONGODB</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={express} alt="" />
            <h2 className="text-center font-bold ">EXPRESS JS</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={jwt} alt="" />
            <h2 className="text-center font-bold ">JWT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndSkill;
