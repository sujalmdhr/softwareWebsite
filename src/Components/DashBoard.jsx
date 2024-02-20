import React from "react";
import {
  FaEllipsisV,
  FaEnvelope,
  FaRegBell,
  FaRegCalendarMinus,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import ProfileImg from "../assets/ProfileImg.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
} from "recharts";
import { useEffect } from "react";
import axios from "axios";
import PieData from "./PieData";


let a = 1000;

const data = [
  {
    name: "Page A",
    uv: a,
    pv: 4000,
    amt: 2000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 138,
    amt: 210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 980,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 900,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 300,
    amt: 500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 400,
    amt: 9100,
  },
];

const DashBoard = () => {
  const [user, setUser] = React.useState("");

  const handleProfileNameChange = (newName) => {
    setProfileName(newName);
  };

  const handleProfileImageChange = (image) => {
    // Logic to handle profile image change
  };

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:3000/users/1");
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <div className="flex flex-cols md:flex-row items-center justify-between h-[60px] shadow-lg px-[10px]">
        <div className="flex items-center rounded-[5px] mb-[10px] md:mb-0 md:mr-5">
          <input
            type="text"
            className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-full md:w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
            placeholder="Search For..."
          />
          <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-md rounded-br-[5px]">
            <FaSearch color="white" />
          </div>
        </div>
        <div className="flex items-end justify-end   gap-[15px] ">
          <div className="flex items-end gap-[15px] justify-end border-r-[1px] pr-[10px] lg:ml-[60vh]">
            <FaRegBell />
            <FaEnvelope />
          </div>
        </div>
        <div className="flex items-center gap-[10px] relative">
          <p>{user.email}</p>
          <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer  flex items-center justify-center relative">
            <img
              src={ProfileImg}
              alt="Profile"
              className="h-full w-full rounded-full"
            />
          </div>
          {

          }
        </div>
      </div>

      {/* /////////////////content//////////// */}
      <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal  cursor-pointer">
            Dashboard
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
          {/* Your dashboard content here */}
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-linear">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                TOTAL USER
              </h2>
              <h1 className="text-[20px] font-bold leading-[24px] text-[#5a5c69] mt-[5px]">100</h1>
            </div>
            <FaUser fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-linear">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                EARNINGS(Monthly)
              </h2>
              <h1 className="text-[20px] font-bold leading-[24px] text-[#5a5c69] mt-[5px]">$27860</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-linear">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                TASK
              </h2>
              <h1 className="text-[20px] font-bold leading-[24px] text-[#5a5c69] mt-[5px]">5</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-linear">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                TOTAL REVENUE
              </h2>
              <h1 className="text-[20px] font-bold leading-[24px] text-[#5a5c69] mt-[5px]">5</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>
        </div>

        <div className="flex mt-[22px] w-full gap-[30px]">
          <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
              <h2>Earning OverView</h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <ResponsiveContainer  width="100%" aspect={4 / 2}>
              <LineChart
              width={1150}
              height={500}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv"stroke="#8884d8" activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2>Revenue Resources</h2>
            <FaEllipsisV color="gray" className="cursor-pointer"/>
          </div>
          <div>
            <PieData/>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default DashBoard;
