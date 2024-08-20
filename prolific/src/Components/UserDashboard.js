import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Header from "./Dash/Header";
import Sidebar from "./Dash/sidebar";
 
function UserDashboard() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];
 
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
 
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
 
  return (
    <div className="flex flex-col h-screen">
      <Header />
 
      <div className="flex flex-1">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
 
        <main
          className={`flex-1 p-5 bg-gray-100 transition-margin duration-300 ${
            openSidebarToggle ? "ml-64" : "ml-16"
          }`}
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800">Dashboard</h3>
          </div>
 
          {/* Box section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <BsFillArchiveFill className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">IOPS Threshold </h3>
              <h1 className="text-4xl font-bold">80K</h1>
            </div>
 
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <BsFillGrid3X3GapFill className="text-4xl text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Count of EBS Volumes
              </h3>
              <h1 className="text-4xl font-bold">6</h1>
            </div>
 
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <BsPeopleFill className="text-4xl text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">EBS Volume Size</h3>
              <h1 className="text-4xl font-bold">250GB</h1>
            </div>
 
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <BsFillBellFill className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                CPU Threshold for IOPS
              </h3>
              <h1 className="text-4xl font-bold">75%</h1>
            </div>
          </div>
 
          {/* Additional boxes section */}
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <BsFillGrid3X3GapFill className="text-4xl text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Peak IOPS:</h3>
                <h1 className="text-4xl font-bold">1M</h1>
              </div>
 
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <BsPeopleFill className="text-4xl text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Dynamic IOPS Schedule Time
                </h3>
                <h1 className="text-4xl font-bold">No</h1>
              </div>
            </div>
          </div>
 
          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
 
            <div className="bg-white p-6 rounded-lg shadow-md h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
 
export default UserDashboard;