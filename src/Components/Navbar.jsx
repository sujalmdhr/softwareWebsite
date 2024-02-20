import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import link from react scrollbars
import { Link } from "react-scroll";


const Navbar = () => {
  const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSignUp=()=>{
    navigate("/signup")
    
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Contact", path: "footer" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white h-[7vh] md:px-14 p-4 max-w-screen-2xl mx-auto text-black fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-black-700"
            >
              <img
                src={logo}
                alt=""
                className="w-8 inline-block items-center"
              />
              <span>Kutumba Tech</span>
            </a>
            {/* showing navitems using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-purple-600 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* language and signup */}
          <div className="space-x-12 hidden md:flex items-center md:px-9">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-purple-600"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            
  <button onClick={handleSignUp} className="  bg-blue-400 py-2 px-2 md:w-[100px] transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
    Sign Up
  </button>

          </div>
          {/* menu btn only for mobile */}
          <div className="md:hidden">
            <button className="text-black" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-black hover:cursor-pointer" />
              ) : (
                <FaBars className="w-6 h-6 text-black hover:cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`absolute z-100 mt-2 w-full h-[90vh] flex flex-col px-4 bg-slate-200 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            key={link}
            to={path}
            className=" block text-2xl my-2 w-full hover:text-purple-600"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
