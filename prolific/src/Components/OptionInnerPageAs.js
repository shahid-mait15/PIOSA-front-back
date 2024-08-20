  import React, { useState } from "react";
  import Form from "./Form"; // Adjust the import path as needed
  import OptionInnerPage2 from "./OptionInnerPage";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
  function OptionInnerPage() {
    const [activeSection, setActiveSection] = useState("form");

    const renderContent = () => {
      switch (activeSection) {
        case "form":
          return <Form />;
        case "downloadable":
          return <OptionInnerPage2 />;
        default:
          return null;
      }
    };

    return (
      <div className="bg-white p-8 rounded-lg  flex flex-col items-center ">
        
        <div className=" w-full">
        <h1 className=" text-start font-bold text-2xl"><Link to="/Dashboard2"><IoIosArrowBack /></Link></h1>
        </div>
        <h2 className="text-2xl font-bold mb-6">PIOSA Deployment Options</h2>
        <div className="flex border-b gap-24 border-gray-200 mb-6">
          <button
            className={`py-2 px-4 border-b-2 font-bold ${
              activeSection === "downloadable"
                ? "border-lime-600 text-lime-600"
                : "border-transparent text-gray-500"
            } hover:text-lime-600`}
            onClick={() => setActiveSection("downloadable")}
          >
            Do It Yourself
          </button>

          <button
            className={`py-2 px-4 border-b-2 font-bold ${
              activeSection === "form"
                ? "border-lime-600 text-lime-600"
                : "border-transparent text-gray-500"
            } hover:text-lime-600`}
            onClick={() => setActiveSection("form")}
          >
            Assisted Deployment
          </button>
        </div>
        <div>{renderContent()}</div>
      </div>
    );
  }

  export default OptionInnerPage;
