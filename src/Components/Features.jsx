import React from "react";
import featureImg from "../assets/featureImg.png";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why We are Better than Others
          </h3>
          <p className="text-justify  text-tertiary">
            Our software company distinguishes itself from competitors through a
            combination of expertise, innovation, and a customer-centric
            approach. With a specialized focus on cutting-edge technologies and
            industries, we deliver solutions tailored to meet the unique needs
            of our clients. Our robust technology stack ensures scalable and
            high-performance software products, backed by a proven track record
            of successful projects and satisfied clients. We prioritize customer
            satisfaction through transparent pricing, personalized solutions,
            and ongoing support.
          </p>
        </div>
        {/* features card */}
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-10">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary  px-5 text-center">
                Develops software products.
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary  px-5 text-center">
                Offers a variety of products.
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary  px-5 text-center">
                Provides customer support.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
