import React, { useState, useEffect, useRef } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown, true);
    return () => {
      document.removeEventListener('click', closeDropdown, true);
    };
  }, []);

  return (
    <header className='flex items-center justify-between p-2 bg-white shadow-md relative'>
      {/* Right Icons */}
      <div className='ml-auto flex items-center space-x-4 gap-6 relative'>
        <BsFillBellFill className='text-3xl cursor-pointer' />
        <BsFillEnvelopeFill className='text-3xl cursor-pointer' />
        
        <div className="relative" ref={dropdownRef}>
          <BsPersonCircle
            className='text-3xl cursor-pointer'
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li> {/* Logout Button */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
