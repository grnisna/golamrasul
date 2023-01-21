import React from "react";
import golamrasul2 from "../../Assets/golam-rasul.jpg";
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineControl } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const MenuSection = () => {
  return (
    <div>
      <div className="card  ">
        <figure className=" py-3 avatar">
          <div className="w-24 mt-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={golamrasul2} alt="golam rasul" className="rounded-xl" />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="font-mono text-3xl font-bold mt-[-30px]">GR NISAN</h2>
        </div>
      </div>
      <div className="mx-auto w-[100%]">
        <a
          className="flex justify-items-center my-3 text-xl font-mono border-b-2 hover:text-accent"
          href="#home"
        >
          <AiTwotoneHome className="mt-1 mx-4" />
          Home
        </a>

        <a
          className="flex justify-items-center my-3 text-xl font-mono  border-b-2  hover:text-accent"
          href="#aboutMe"
        >
          <CgProfile className="mt-1 mx-4 " />
          About Me
        </a>

        <a
          className="flex justify-items-center my-3 text-xl font-mono border-b-2  hover:text-accent"
          href="#services"
        >
          <AiOutlineControl className="mt-1 mx-4" />
          Services
        </a>

        <a
          className="flex justify-items-center my-3 text-xl font-mono border-b-2  hover:text-accent"
          href="#myPortfolio"
        >
          <CgNotes className="mt-1 mx-4" />
          Portfolio
        </a>
        <a
          className="flex justify-items-center my-3 text-xl font-mono border-b-2  hover:text-accent"
          href="#contactMe"
        >
          <MdOutlineContactMail className="mt-1 mx-4" />
          Contact Me
        </a>
      </div>

      <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-5">
        <a href="/"><FaFacebookSquare  size={28 }/></a>
        <a href="/"><GrLinkedin  size={28 }/></a>
        <a href="/"><FaTwitterSquare  size={28 }/></a>
        <a href="/"><FaInstagramSquare  size={28 }/></a>
      </div>
    </div>
  );
};

export default MenuSection;
