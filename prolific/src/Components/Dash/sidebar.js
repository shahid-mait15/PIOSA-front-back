import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillGearFill,
  BsChevronLeft, BsChevronRight
} from 'react-icons/bs';
 
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  const activePath = location.pathname;
 
  return (
    <aside id="sidebar" className={`${openSidebarToggle ? "w-64" : "w-16"} transition-width duration-300 fixed h-full bg-gray-900 text-white overflow-hidden`}>
      {/* Sidebar Toggle Button */}
      <div className='p-4 flex justify-end'>
        <button
          className='text-xl bg-gray-800 p-2 rounded-md focus:outline-none hover:bg-gray-700'
          onClick={OpenSidebar}
        >
          {openSidebarToggle ? <BsChevronLeft /> : <BsChevronRight />}
        </button>
      </div>
 
      <ul className={`mt-4 ${!openSidebarToggle ? 'pl-2' : ''}`}>
        <li
          className={`px-4 py-3 font-bold hover:bg-gray-700 ${activePath === '/' ? 'bg-gray-700' : ''}`}
        >
          <Link to="/Dashboard2" className='flex items-center space-x-3'>
            <BsGrid1X2Fill className='text-lg' />
            {openSidebarToggle && <span>Deployment Options</span>}
          </Link>
        </li>
        <li
          className={`px-4 py-3 font-bold hover:bg-gray-700 ${activePath === '/dashboard' ? 'bg-gray-700' : ''}`}
        >
          <Link to="/UserDashboard" className='flex items-center space-x-3'>
            <BsFillArchiveFill className='text-lg' />
            {openSidebarToggle && <span>Dashboard</span>}
          </Link>
        </li>
        <li
          className={`px-4 py-3 font-bold hover:bg-gray-700 ${activePath === '/faq' ? 'bg-gray-700' : ''}`}
        >
          <Link to="/faq" className='flex items-center space-x-3'>
            <BsFillGrid3X3GapFill className='text-lg' />
            {openSidebarToggle && <span>FAQ</span>}
          </Link>
        </li>
        <li
          className={`px-4 py-3 font-bold hover:bg-gray-700 ${activePath === '/settings' ? 'bg-gray-700' : ''}`}
        >
          <Link to="/settings" className='flex items-center space-x-3'>
            <BsFillGearFill className='text-lg' />
            {openSidebarToggle && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
}
 
export default Sidebar;
 
 