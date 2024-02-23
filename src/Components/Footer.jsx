import React from "react";
import logo from "../assets/logo.png";
import Features from "./Features";

const Footer = () => {
  return (
    <div className="bg-[#EE6800]  md:px-14 p-4 max-w-screen-3xl mx-auto text-white items-start"id="footer">
      <div className="my-12  flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-3xl font-semibold flex items-center space-x-3 text-black-700"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">Kutumba Tech</span>
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste
            voluptate maxime nesciunt dolor mollitia reiciendis fugit
            reprehenderit! Provident, labore.
          </p>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#FFFFF] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-red-600 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-black duration-300 transition-all"
            />
          </div>
        </div>

        {/* footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8">
          <div className="space-y-4  mt-5">
            <h4 className="text-xl"> Platfrom</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                OverView
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>

          <div className="space-y-4  mt-5">
            <h4 className="text-xl"> Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask Question?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to join?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What is the requirement for this?
              </a>
            </ul>
          </div>

          <div className="space-y-4  mt-5">
            <h4 className="text-xl"> Contacts</h4>
            <ul className="space-y-3">
              <p className="block hover:text-gray-300">+977-9814277220</p>
              <p className="block hover:text-gray-300">057-520589</p>
              <p className="block hover:text-gray-300">Hetauda-10</p>
              <p className="block hover:text-gray-300">Makwanpur,Main Road</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <p>Kutumba Tech@Hetauda-branch. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
