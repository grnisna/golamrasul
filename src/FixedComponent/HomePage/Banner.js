import React from "react";
import "../../StyleCss/Homepage.css";
import golamrasul from "../../Assets/golamrasul.png";

const Banner = () => {

  const downloadResume = () =>{
    // href="https://drive.google.com/uc?export=download&id=1CN935nxs2mByw5AX6eXB6iwLyWXUOzml"
    fetch('https://drive.google.com/uc?export=download&id=1CN935nxs2mByw5AX6eXB6iwLyWXUOzml')
    .then( res => res.json())
    .then( data => {
      console.log(data)
    })
  }


  return (
    <div id="home" className=" lg:p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <img
          src={golamrasul}
          className="bg-success lg:mr-16  lg:w-full w-32 rounded-full"
          alt=""
        />
        <div className="">
          <h3 className="text-xl font-bold ml-1 text-deepBlack">Hello, I'm </h3>
          <h2 className="lg:text-5xl text-2xl font-bold text-deepBlack">MD.GOLAM RASUL</h2>
          <div className="">
            <div className="p p1  ml-1  pr-2">Front-End Developer</div>
            <div className="p p2  ml-1  pr-2">Front-End Developer</div>
            <div className="p p3  ml-1 pr-2">
              Front-End Developer <div className="cursor"></div>
            </div>
          </div>
          <p className="py-10 text-justify font-sans lg:text-xl ">
            I'm glad to having you on my portfolio. As a developer create a
            things complicated is my hobby.I would like to introduce my
            thinkings, knowledged and skills sets with you throw this
            portfolio.You can also know about me more by downloading my resume.
          </p>
          <a href="https://drive.google.com/uc?export=download&id=1CN935nxs2mByw5AX6eXB6iwLyWXUOzml"  className="btn rounded-none border-none boxShadow bg-success">
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
