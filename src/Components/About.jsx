import React from "react";
import aboutHero from "../assets/aboutHero.png";


const About = () => {
  return (
    <>
      <div
        className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
        id="about"
      >
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
            About Us
          </h2>
          <h2 className="md:text-3xl font-bold text-primary mb-2">
            Welcome to The Kutumba Tech
          </h2>
          <p className="text-tertiary md:w-1/1 mx-auto px-4">
            "Join us for software classes—pick physical or remote. Learn
            in-person with experts or from anywhere online. Your choice, your
            convenience, your success."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[rgba(255,255,255,0.04)] h-90 shadow-3xl p-5 flex flex-col hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className="text-start">
              <h5 className="text-start mt-2 text-2xl font-bold text-primary">
                Who Are We
              </h5>
            </div>
            <div className="justify-center">
              <p className="mt-2 text-black text-lg mb-7 text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                reiciendis ducimus voluptates alias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas consectetur temporibus
              </p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] h-90 shadow-3xl p-8 flex flex-col hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className="text-start">
              <h5 className="mt-2 text-start text-2xl font-bold text-primary">
                Our Mission
              </h5>
            </div>
            <div className="justify-center">
              <p className="mt-2 text-black text-lg mb-7 text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                debitis veritatis blanditiis. Nemo, consequuntur. Iure ipsam
                reiciendis ducimus voluptates alias. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.04)] h-90 shadow-3xl p-8 flex flex-col hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div className="text-start">
              <h5 className="mt-2 text-start text-2xl font-bold text-primary">
                What We Do
              </h5>
            </div>
            <div className="justify-center">
              <ul className="custom-bullet mt-2 text-black text-lg mb-7 text-start">
                <li>UI UX Design</li>
                <li>Website Development</li>
                <li>Marketing</li>
                <li>Social Media</li>
                <li>eCommerce Store</li>
                <li>Tech Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-7">
          <div className="flex flex-col  justify-between items-center gap-8">
            <div className="w-full md:w-1/1 ">
              <img src={aboutHero} alt="" className=" w-full h-auto " />
            </div>
          </div>
          <div className="w-full md:w-1/1 ">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
              Why Choose Us?
              <span className="text-orange-600"> for many years.</span>
            </h2>
            <p className="flex flex-col text-black text-lg mb-7">
              Our commitment to product improvement spans many years, reflecting
              our dedication to delivering the best possible solutions to our
              clients. Through continuous refinement and innovation, we have
              evolved our products to meet the changing needs of the market and
              the ever-growing expectations of our customers. Our extensive
              experience in the industry has enabled us to identify
              opportunities for enhancement, whether it be through adding new
              features, optimizing performance, enhancing security measures, or
              improving user experience.
            </p>
            <div className="text-center">
              <button className="bg-orange-600 font-semibold text-white p-2 rounded hover:bg-red-600 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        
      </div>
      
    
      
      
    
    </>
  );
};

export default About;
