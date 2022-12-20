import React from "react";
import "./Banner.css";
import bannerImg from "../../assets/images/banner-image.png";
import resume from  '../../assets/doc/Azad-resume.pdf'

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" mx-auto">
          <img
            src={bannerImg}
            className=" w-40 h-40 lg:h-auto lg:w-auto lg:max-w-sm shadow-2xl float-right rounded-full"
            alt=""
          />
        </div>
        <div className="mx-auto float-left">
          <p className=" banner-des font-bold text-3xl lg:text-5xl lg:leading-[60px] text-[#42446E]">
            Hi 👋,
            <br />
            My name is <br />
            <span className="banner-my-name">Azad Hossen</span> <br />I am
            Junior Web Developer.
          </p>
          
          <a href={resume} download>
         <button className=" my-3 btn btn-sm bg-slate-900 ">  Resume</button>
       </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;


