import React from "react";
import { FaBars, faBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Internships",
    },
    {
      id: 5,
      link: "Achievements",
    },
    {
      id: 6,
      link: "Contacts",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      
      {/* signature */}
      <div>
        <h1 className="text-5xl font-signature mt-2">Yash</h1>
      </div>

      {/* links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
            
          </li>
        ))}
      </ul>

      {/* Hamburger icon*/}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* navbar in vertical when hamburger icon clicked */}
      {nav&&(
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-4xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {link}
              
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default NavBar;
