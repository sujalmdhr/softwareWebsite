import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      discription:
        "Dive into fundamentals for beginners and expand our creativity.",green: "src/assets/gDot.png",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      discription:
        "Take skills to the next level with intermediate to advanced courses.",green: "src/assets/gDot.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      discription:
        "Experience ultimate learning with exclusive resources and personalized mentorship.",
      green: "src/assets/gDot.png",
    },
  ];
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertiary md:w-1/1 mx-auto px-4">
          "Join us for software classes—pick physical or remote. Learn in-person
          with experts or from anywhere online. Your choice, your convenience,
          your success."
        </p>

        {/* toggle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      {/* pricing cards */}

      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tertiary text-center my-5 ">{pkg.discription}</p>
            <p className="mt-5 text-center text-orange-600 text-4xl font-bold">
              {isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}
              <span className="text-base text-tertiary font-medium ">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Video of Lessons
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                15 days trail
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                24/7 Customer Services
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                License key
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Automatic Update
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className=" p-2 rounded-md hover:bg-red-600 bg-orange-600 text-white font-semibold">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
