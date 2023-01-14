import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import toolsImg from "../../Assets/toolsImg.png";
import VScode from "../../Assets/Icons/toolsSkill/Vscode.png"
import github from "../../Assets/Icons/toolsSkill/github.png"
import heroku from "../../Assets/Icons/toolsSkill/heroku.png"
import figma from "../../Assets/Icons/toolsSkill/figma.png"
import chrome from "../../Assets/Icons/toolsSkill/chrome.png"
import wordpress from "../../Assets/Icons/toolsSkill/wordpress.png"
import trello from "../../Assets/Icons/toolsSkill/trello.png"
import photoshop from "../../Assets/Icons/toolsSkill/photoshop.png"
import microsoft from "../../Assets/Icons/toolsSkill/microsoft.png"


const ToolsSkill = () => {
  return (
    <div className="lg:flex justify-items-center lg:flex-row-reverse lg:mt-28 mt-5">
      <div>
        <h1 className="lg:text-5xl text-3xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
          TOOL'S SKILLS
          <AiOutlineMinus size={36} />{" "}
        </h1>
        <img src={toolsImg} alt="" />
      </div>

      <div className="lg:ml-14 px-3 lg:w-[70%]">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 text-center">
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={VScode} alt="" />
            <h2 className="text-center font-bold ">VScode</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={github} alt="" />
            <h2 className="text-center font-bold ">github</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={heroku} alt="" />
            <h2 className="text-center font-bold ">heroku</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={figma} alt="" />
            <h2 className="text-center font-bold ">figma</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={chrome} alt="" />
            <h2 className="text-center font-bold ">Chrome Dev</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={wordpress} alt="" />
            <h2 className="text-center font-bold ">WordPress</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={trello} alt="" />
            <h2 className="text-center font-bold ">Trello</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={photoshop} alt="" />
            <h2 className="text-center font-bold ">Photoshop</h2>
          </div>
          <div className="m-2">
            <img className="lg:w-16 w-14  mx-auto " src={microsoft} alt="" />
            <h2 className="text-center font-bold ">Microsoft 365</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ToolsSkill;
