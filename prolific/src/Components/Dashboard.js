import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./LendingPage";
import DashBG from "../assets/bg-dash.png"; 
import op1 from "../assets/Untitled design.png"
import op2 from "../assets/op2 (2).png"
import op3 from "../assets/op33.png"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div
       style={{ backgroundImage: `url(${DashBG})`, marginTop: 1 }}

        className="min-h-screen flex items-center  justify-center bg-cover bg-center"
      >
        <div className="w-full h-full flex flex-col items-end justify-end  mr-24 mt-16 ">
         
        <div className="flex justify-end gap-10">

              <Link to="/OptionInnerPage" className="no-underline mt-5   text-inherit  items-center justify-center">
                <img src={op1} alt="Option 1" className="h-32 mx-5 w-36 rounded-lg object-contain mt-3" />
                <h1 className=" text-white font-semibold mt-2  text-center">Direct Downloadable Link</h1>
                <FaRegArrowAltCircleRight  className=" text-green-400 w-full text-center h-7 mt-4 "/>
              </Link>

              <Link to="/OptionInnerPage2" className="no-underline mx-10   text-inherit  items-center justify-center">
                <img src={op2} alt="Option 2" className="h-40 w-40 object-contain mx-5" />
                <h1 className=" text-white font-semibold mt-2  text-center">Dynamic Scaling Script </h1>
                <FaRegArrowAltCircleRight  className=" text-green-400 w-full text-center h-7 mt-4 "/>
              </Link>
              <Link to="/OptionInnerPage3" className="no-underline   mt-1 text-inherit items-center justify-center">
                <img src={op3} alt="Option 3" className="h-36 w-26 mt-3 object-contain mx-6" />
                <h1 className=" text-white font-semibold mt-2  text-center">Fill Form, We Deploy</h1>
                <FaRegArrowAltCircleRight  className=" text-green-400 w-full text-center h-7 mt-4 "/>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;