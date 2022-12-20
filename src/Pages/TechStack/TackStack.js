import React from "react";
import htmlIcon from '../../assets/tech/html5-icon-1.png';
import cssIcon from '../../assets/tech/css.png';
import jsIcon from '../../assets/tech/js.png';
import bootstrapIcon from '../../assets/tech/bootstrap.png';
import tailwindIcon from '../../assets/tech/tailwindcss.png';
import reactIcon from '../../assets/tech/React-icon.svg.png';
import nodeIcon from '../../assets/tech/node.jpg';
import expressIcon from '../../assets/tech/express.png';
import mongodb from '../../assets/tech/mongobd.jpg';
import git from '../../assets/tech/Git-Icon-1788C.png';

const TackStack = () => {

  const images = [
    {
      id: 1,image: htmlIcon
    },
    {
      id: 2,image: cssIcon
    },
    {
      id: 3,image: git
    },
    {
      id: 4,image: jsIcon
    },
    {
      id: 5,image: bootstrapIcon
    },
    {
      id: 6,image: tailwindIcon
    },
    {
      id: 7,image: reactIcon
    },
    {
      id: 8,image: nodeIcon
    },
    {
      id: 9,image: expressIcon
    },
    {
      id: 10,image: mongodb
    },
  ]

  return (
    <div id="tech-stack" className=" mt-10 mx-10 lg:mx-auto">
      <h1 className=" font-bold text-2xl lg:text-4xl text-[#42446E] text-center "> My Tech Stack</h1>
      <p className=" text-center text-[#666666] text-base lg:text-xl"> Technologies I’ve been working with recently</p>
      <div className="mt-10 mx-auto lg:w-9/12  grid grid-cols-5  gap-y-8 justify-between items-center">
            
            {
              images.map(imgItem => <img key={imgItem.id} className=" h-10 w-10 lg:h-[104px] lg:w-[100px]" src={imgItem.image} alt="" /> )
            }
      </div>
    </div>
  );
};

export default TackStack;
