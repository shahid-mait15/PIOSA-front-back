import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import logoImg from "../assets/IOSA-crisp-logo-v3.png";
import Form from './Form';
import Downloadable from './Downloadable';

function DynamicScript() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  return (
    <>
      <div className='h-screen'>
        <div className="flex h-screen text-4xl text-black justify-center">
          {/* Sidebar */}
         <h1> DynamicScript</h1>


        </div>
      </div>
    </>
  );
}

export default DynamicScript;
