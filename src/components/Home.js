import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-2">


        <div className="flex flex-col justify-center h-full">
          
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Devloper
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-poointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
            </button>
          </div>
        </div>


        {/* image container */}
        <div>
            <img src={HeroImage} alt="my profile"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mx-auto w-2/3 border-r-[6px] border-b-[6px] border-white-500 md:w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
