import React, { useState } from "react";
import axios from "axios";

const Menu = () => {
  const [design, setDesign] = useState("");
  const [development, setDevelopment] = useState("");
  const [marketing, setMarketing] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [eCommerce, setECommerce] = useState("");
  const [maintenance, setMaintenance] = useState("");

  const handleSubmit = async (e, category) => {
    e.preventDefault();
    let description = "";
    switch (category) {
      case "design":
        description = design;
        break;
      case "development":
        description = development;
        break;
      case "marketing":
        description = marketing;
        break;
      case "socialMedia":
        description = socialMedia;
        break;
      case "eCommerce":
        description = eCommerce;
        break;
      case "maintenance":
        description = maintenance;
        break;
      default:
        break;
    }

    if (description.length > 0) {
      try {
        const response = await axios.put(`http://localhost:3000/${category}/1`, {
          'description':description
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, "design")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">Design:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setDesign(e.target.value);
              }}
              value={design}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, "development")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">Development:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setDevelopment(e.target.value);
              }}
              value={development}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, "marketing")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">Marketing:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setMarketing(e.target.value);
              }}
              value={marketing}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, "socialMedia")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">Social Media:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setSocialMedia(e.target.value);
              }}
              value={socialMedia}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <form onSubmit={(e) => handleSubmit(e, "eCommerce")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">eCommerce:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setECommerce(e.target.value);
              }}
              value={eCommerce}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <form onSubmit={(e) => handleSubmit(e, "maintenance")}>
        <div className="max-w-screen gradientBg md:p-9 px-4 py-9">
          <div className="flex flex-col ">
            <label className="text-3xl font-semibold gap-10">Maintenance and Support:-</label>
            <textarea
              className="border-2 w-auto"
              type="text"
              onChange={(e) => {
                setMaintenance(e.target.value);
              }}
              value={maintenance}
            />
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="flex bg-blue-600 font-semibold text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      
    </>
  );
};

export default Menu;
