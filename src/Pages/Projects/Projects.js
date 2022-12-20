import React from "react";
import learnig from "../../assets/projects/learnig.png";
import doctors from "../../assets/projects/doctorsportal.png";
import review from "../../assets/projects/review.png";
import mobile from "../../assets/projects/mobilemela.png";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className=" mt-10 mx-10 lg:mx-auto">
      <h1 className=" font-bold text-2xl lg:text-4xl text-[#42446E] text-center ">
        {" "}
        Projects
      </h1>
      <p className=" text-center text-[#666666] text-base lg:text-xl">
        {" "}
        Here some project what I build
      </p>

      <div className=" mt-10 lg:mx-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={learnig} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-[#42446E]">The Learnig Home!</h2>
            <p className="text-[#666666] text-base">
              It is a demo project for online learning platform
            </p>
            <p className=" text-[#42446E] text-sm">
              Tech Stack:{" "}
              <span className=" font-extralight">
                {" "}
                React, Node, Express, MongoDB
              </span>
            </p>
            <div className="card-actions justify-between">
              <a
                href="https://the-learning-home.web.app/"
                target="_blank"
                className="  flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
              >
                {" "}
                <FaLink></FaLink>{" "}
                <span className=" underline">Live Preview</span>
              </a>
              <a
                href="https://github.com/AzadHossenMasud/E-Learning"
                target="_blank"
                className="  flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
                
              >
                
                {" "}
                <FaGithub></FaGithub>{" "}
                <span className=" underline">View Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={review} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-[#42446E]">A Review Website</h2>
            <p className="text-[#666666] text-base">
              In this project I try to explore review system in a project
            </p>
            <p className=" text-[#42446E] text-sm">
              Tech Stack:{" "}
              <span className=" font-extralight">
                {" "}
                React, Node, Express, MongoDB
              </span>
            </p>
            <div className="card-actions justify-between">
              <a
                href="https://service-review-f012e.firebaseapp.com/"
                target="_blank"
                className="  flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
              >
                {" "}
                <FaLink></FaLink>{" "}
                <span className=" underline">Live Preview</span>
              </a>
              <a
                href="https://github.com/AzadHossenMasud/Review-Site"
                target="_blank"
                className=" flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
              >
                {" "}
                <FaGithub></FaGithub>{" "}
                <span className=" underline">View Code</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={mobile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-[#42446E]">A Resale Phone Website!</h2>
            <p className="text-[#666666] text-base">
              In this project , where you can sell your phone and buy new 
            </p>
            <p className=" text-[#42446E] text-sm">
              Tech Stack:{" "}
              <span className=" font-extralight">
                {" "}
                React, Node, Express, MongoDB
              </span>
            </p>
            <div className="card-actions justify-between">
              <a
                href="https://phone-mela-6a1c7.web.app/"
                target="_blank"
                className="  flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
              >
                {" "}
                <FaLink></FaLink>{" "}
                <span className=" underline">Live Preview</span>
              </a>
              <a
                href="https://github.com/AzadHossenMasud/Mobile-Mela"
                target="_blank"
                className="  flex items-center gap-x-2 text-[#42446E] font-semibold text-sm"
              >
                {" "}
                <FaGithub></FaGithub>{" "}
                <span className=" underline">View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
// service_qash59l