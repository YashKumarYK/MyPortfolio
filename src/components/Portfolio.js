import React from "react";
import excelClone from "../assets/portfolioImg/excelClone.png";
import nQueens from "../assets/portfolioImg/nQueens.png";
import passwordGenerator from "../assets/portfolioImg/passwordGenerator.png";
import shopsee from "../assets/portfolioImg/shopsee.png";
import tictactoe from "../assets/portfolioImg/tictactoe.png";
import weatherApp from "../assets/portfolioImg/weatherApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shopsee,
    },
    {
      id: 2,
      src: nQueens,
    },
    {
      id: 3,
      src: weatherApp,
    },
    {
      id: 4,
      src: passwordGenerator,
    },
    {
      id: 5,
      src: excelClone,
    },
    {
      id: 6,
      src: tictactoe,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my projects that I have done</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* image card */}

          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" h-[70%] object-cover rounded-md duration-200 hover:scale-105"
              />
              {/* card button */}
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
