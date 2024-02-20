// Home.jsx

import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaRegEdit,
  FaRegObjectGroup,
  FaRegPaperPlane,
  FaRegLightbulb,
  FaRegCreditCard,
  FaRegUserCircle,
} from "react-icons/fa";

import team3 from "../assets/team3.png"
import team2 from "../assets/team2.png"
import team1 from "../assets/team1.png"

const Home = () => {
  return (
    <div className=" md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 " id="home">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
        <div className="flex flex-col md:flex  justify-between items-center gap-9 ">
          <div className="text-xl md:text-3xl font-bold md:p-[7px] mb-2">
            We Build 
          </div>
          <h2 className="text-black  font-bold text-3xl md:text-[50px] md:p-[24px]">
            Your Software
          </h2>
          <div className="text-[30px] md:text-[35px] p-[7px]">
            
            <ReactTyped
              className="pl-2"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              typeSpeed={40}
              loop={true}
              backSpeed={50}
            />
          </div>
        </div>
        <div className="flex flex-col items-center pt-2">
          <button className=" bg-blue-600 font-semibold text-black p-2 rounded-md hover:bg-green-600 transition-all duration-300 ">
            Get Started
          </button>
        </div>
      </div>

      <div className="md:px-14 p-4 max-w-s mx-auto py-10">
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
            How can we help you?
          </h2>
          <p className="text-tertiary md:w-1/1 mx-auto px-4">
            "Join us for software classes—pick physical or remote. Learn
            in-person with experts or from anywhere online. Your choice, your
            convenience, your success."
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/1">
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-10">
          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className="text-start">
              <FaRegEdit className="text-5xl " />
              <h5 className=" text-start mt-2  text-2xl font-semibold text-primary ">
                Design
              </h5>
            </div>
            <div className="justify-center ">
              <p className=" mt-2 text-black text-lg mb-7 text-start ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                reiciendis ducimus voluptates alias. lorem20 
              </p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className=" text-start">
              <FaRegObjectGroup className="text-5xl text-left" />
              <h5 className="mt-2  text-start text-2xl font-semibold text-primary  ">
                Development
              </h5>
              <div className="justify-center ">
                <p className=" mt-2 text-black text-lg mb-7 text-start ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                  reiciendis ducimus voluptates alias. lorem20
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className=" text-start">
              <FaRegPaperPlane className="text-5xl text-left" />
              <h5 className="mt-2  text-start text-2xl font-semibold text-primary ">
                Marketing
              </h5>
              <div className="justify-center ">
                <p className=" mt-2 text-black text-lg mb-7 text-start ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                  reiciendis ducimus voluptates alias. lorem20
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second grid */}

        <div className=" mt-8 grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-10">
          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className=" text-start">
              <FaRegLightbulb className="text-5xl text-left" />
              <h5 className="mt-2  text-start text-2xl font-semibold text-primary  ">
                Social Media
              </h5>
              <div className="justify-center ">
                <p className=" mt-2 text-black text-lg mb-7 text-start ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                  reiciendis ducimus voluptates alias. lorem20
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className=" text-start">
              <FaRegCreditCard className="text-5xl text-left" />
              <h5 className="mt-2  text-start text-2xl font-semibold text-primary   ">
                eCommerce
              </h5>
              <div className="justify-center ">
                <p className=" mt-2 text-black text-lg mb-7 text-start ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                  reiciendis ducimus voluptates alias. lorem20
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] square-[10px] h-90 shadow-3xl p-8  flex flex-col  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className=" text-start">
              <FaRegUserCircle className="text-5xl text-left" />
              <h5 className="mt-2  text-start text-2xl font-semibold text-primary   ">
                Marketing
              </h5>
              <div className="justify-center ">
                <p className=" mt-2 text-black text-lg mb-7 text-start ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                  reiciendis ducimus voluptates alias. lorem20
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          className="md:px-14 p-4 max-w-screen-xl mx-auto space-y-10"
          
        >
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
              Meet Our Leadership
            </h2>

            <p className="text-tertiary md:w-1/1 mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue.​
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1  items-start md:gap-10">
        
          <div className="w-full md:w-1/1 mb-2 ">
            <img src={team1} alt="" className=" w-full h-auto " />
            <h2 className="text-center text-2xl font-semibold">Joanne Williams</h2>
        
        <p className="text-center text-xl"> Founder</p>
          </div>
          
          <div className="w-full md:w-1/1 m-2 ">
            <img src={team2} alt="" className=" w-full h-auto " />
            <h2 className="text-center text-2xl font-semibold">Fred Buster</h2>
            <p className="text-center text-xl"> Director OPS</p>
            
          </div>
          <div className="w-full md:w-1/1 m-2 ">
            <img src={team3} alt="" className=" w-full h-auto " />
            <h2 className="text-center text-2xl font-semibold">
Lisa Hoffman​</h2>
<p className="text-center text-xl"> Director HR</p>
          </div>
        
      </div>
    </div>
  );
};

export default Home;
