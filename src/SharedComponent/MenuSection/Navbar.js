import React from "react";
import { AiOutlineControl, AiTwotoneHome } from "react-icons/ai";
import { CgNotes, CgProfile } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  return (
    <div class=" lg:hidden navbar ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" id="my-drawer" class="btn btn-ghost lg:hidden">
            <FcMenu />
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 bg-success rounded-box w-52"
          >
            <li>
              <a
                className="flex justify-items-center text-sm my-3 text-xl font-mono border-b-2 hover:text-accent"
                href="#home"
              >
                <AiTwotoneHome className="mt-1 mx-4" />
                Home
              </a>
            </li>

            <li>
              <a
                className="flex justify-items-center text-sm my-3 text-xl font-mono  border-b-2  hover:text-accent"
                href="#aboutMe"
              >
                <CgProfile className="mt-1 mx-4 " />
                About Me
              </a>
            </li>

            <li>
              <a
                className="flex justify-items-center text-sm my-3 text-xl font-mono border-b-2  hover:text-accent"
                href="#services"
              >
                <AiOutlineControl className="mt-1 mx-4" />
                Services
              </a>
            </li>
            <li>
              <a
                className="flex justify-items-center text-sm my-3 text-xl font-mono border-b-2  hover:text-accent"
                href="#myPortfolio"
              >
                <CgNotes className="mt-1 mx-4" />
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="flex justify-items-center text-sm my-3 text-xl font-mono border-b-2  hover:text-accent"
                href="#contactMe"
              >
                <MdOutlineContactMail className="mt-1 mx-4" />
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
