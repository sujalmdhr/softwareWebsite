import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronLeft,
  FaBold,
  FaBolt,
  FaUser,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Sildebar = () => {

  const navigate=useNavigate()

  const handleLogout=()=>{
    navigate('/')
  }
  return (
    <div className="bg-[#4E73DF] h-screen px-[25px]">
      <div className="px-[15px] py-[30px] items-center justify-center border-b-[1px]  border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Admin Panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          DashBoard
        </p>
      </div>
      
       

      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
      <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          LISTS
        </p>
        
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Status
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegChartBar color="white" />
            <Link className="text-[14px] leading-[20px] font-normal text-white" to="/ProgressBar">Progress Bar</Link>
           
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="white" />
            <Link className="text-[14px] leading-[20px] font-normal text-white" to="/Setting">Setting</Link>
          </div>
          <FaChevronRight color="white" />
          
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegCalendarAlt color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Tables
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          USER
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaUser color="white" />
            
              <Link className="text-[14px] leading-[20px] font-normal text-white" to="/User">User</Link>
          
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <MdLogout color="white" />
            <button onClick={handleLogout} className="text-[14px] leading-[20px] font-normal text-white">
              Logout
            </button>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

     
    </div>
  );
};

export default Sildebar;
