import React from "react";

import { AiOutlineMinus } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div id="contactMe" className="lg:mt-28 mt-5 px-5">
      <h1 className="lg:text-3xl text-center text-xl font-bold font-mono lg:ml-10 lg:px-0 px-5 lg:mt-0 mt-5">
        TOUCH ME ANY-TIME
        <AiOutlineMinus size={36} className="mx-auto" />
      </h1>

      <div className="">
        <div className="lg:flex lg:justify-around">
          <div className=" lg:w-96 shadow-xl lg:py-14 py-6 px-4 lg:px-8 rounded-xl bg-success">
            <div className=" items-center">
              <h2 className=" text-3xl font-bold font-mono">
                Say your Story! Get in Touch..
              </h2>
              <p className="text-l font-sarif ">
                I'm Always available. If you need or suggest me, Feel free to
                contact or mail.
              </p>

              <div className="flex  items-center mt-10 ">
                <FaAddressCard size={30} color="green" />
                <p className="ml-5 font-bold text-sm">
                  Bholail (Kashipur), Fatullah, Narayangnaj, Bangladesh.{" "}
                </p>
              </div>

              <div className="flex  items-center mt-2 ">
                <RiMailSendLine color="green" />
                <p className="lg:ml-5 font-bold  text-sm">
                  mdgolamrasul055@gmail.com
                </p>
              </div>

              <div className="flex items-center mt-2 ">
                <BsPhone color="green" />
                <p className="ml-5 font-bold  text-sm">+880 1811 509963</p>
              </div>
            </div>
          </div>

          <div className="bg-success w-full lg:ml-5 lg:mt-0 mt-5 rounded-xl lg:p-12 p-2">
            <h1 className="text-3xl font-bold font-mono">Tell Someting...</h1>
            <div>
              <form>
                <p htmlFor="name" className="font-bold  mt-5">
                  Your name
                </p>
                <input
                  type="text"
                  placeholder=""
                  className=" w-full  rounded-none border"
                  id="name"
                />

                <p htmlFor="email" className=" font-bold  mt-5">
                  Your Email
                </p>
                <input
                  type="email"
                  placeholder=""
                  className=" w-full  rounded-none border"
                  id="email"
                />
                <p htmlFor="subject" className=" font-bold mt-5">
                  Email Subject
                </p>
                <input
                  type="text"
                  placeholder=""
                  className=" w-full  rounded-none border"
                  id="subject"
                />
                <p htmlFor="textArea" className=" font-bold mt-5">
                  Your story
                </p>
                <input
                  type="text"
                  placeholder=""
                  className=" w-full textarea  rounded-none border"
                  id="textArea"
                />

                <button className="btn font-bold text-black rounded-none border-none boxShadow bg-white mt-5">
                  Send Now
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
