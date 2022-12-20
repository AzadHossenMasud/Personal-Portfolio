import React from "react";
import { FaBuilding, FaCalendar } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about-me" className=" mb-3 mx-10 lg:mx-auto">
      <h1 className=" font-bold text-2xl lg:text-4xl text-[#42446E]">About Me</h1>
      <div className=" w-full md:w-4/5 lg:w-3/5 mt-7">
        <p className=" text-[#666666] text-sm lg:text-base">
          I am a B.Sc(Hons) student. Alogside with my aceademic education, I was
          trying to develop my skill. Then , I choose mern stack web
          development. . Now, I am able to develop simple mern stack website.
          Basically, I am working with React js, Node js, Exprss js & MongoDB
          database.
        </p>
      </div>
      <h1 className=" font-bold text-2xl lg:text-4xl text-[#42446E] my-8">Education</h1>
      <div className=" flex items-center">
        <div className="w-1/2">
          <p className=" text-[#666666] text-base lg:text-xl">B. Sc in Computer Science & Engineering</p>
          <p className=" flex items-center gap-x-2 text-xs text-[#A7A7A7]"><FaBuilding></FaBuilding> BGC Trust University Bangladesh</p>
        </div>
        <div className="w-1/2">
          <p className=" text-[#018C0F] rounded-2xl text-xs bg-[#D7FFE0] inline-block px-2 py-1">Under Graduate(Final year)</p>
          <p className="flex items-center gap-x-2 text-xs text-[#A7A7A7] mt-1"><FaCalendar></FaCalendar> Jan 2019 - Dec 2022</p>
        </div>
      </div>
      <div className=" flex items-center mt-5">
        <div className="w-1/2">
          <p className=" text-[#666666] text-base lg:text-xl">Complete Web Development</p>
          <p className=" flex items-center gap-x-2 text-xs text-[#A7A7A7]"><FaBuilding></FaBuilding> Programming Hero</p>
        </div>
        <div className="w-1/2">
          <p className=" text-[#018C0F] rounded-2xl text-xs bg-[#D7FFE0] inline-block px-2 py-1">Complete</p>
          <p className="flex items-center gap-x-2 text-xs text-[#A7A7A7] mt-1"><FaCalendar></FaCalendar> July 2022 - Dec 2022</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
