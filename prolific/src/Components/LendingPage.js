import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the custom styles

const Navigation = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (item) => {
    setSelected(item);
  };

  const handleRegisterClick = () => {
    navigate('/SignUp'); // Navigate to /SignUp page
  };

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img
              src={require("../assets/logo 2.png")}
              alt="Logo"
              className="h-9 w-40 transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          {/* Services */}
          <div className="mr-10 flex gap-x-5">
          <Link to="/"
              
              className={`mx-2 font-medium mt-1 ${selected === 'Home' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Home')}
            >
              Home
            </Link>
            <a
              href="#"
              className={`mx-2 font-medium mt-1 ${selected === 'service1' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('service1')}
            >
              Products
            </a>
            <a
              href="#"
              className={` mx-2 mt-1 font-medium ${selected === 'service2' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('service2')}
            >
              Services
            </a>
            <a
              href="#"
              className={` mx-2 mt-1 font-medium ${selected === 'Insights' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Insights')}
            >
              Insights
            </a>
            <Link
              to="/ContactUs"
              className={` mx-2 mt-1 font-medium ${selected === 'Contact Us' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Contact Us')}
            >
              Contact Us
            </Link>
            {/* <a
              href="#"
              className={` mt-1 mx-2 font-medium ${selected === 'About Us' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('About Us')}
            >
              About Us
            </a> */}

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded"
             
            ><Link to="/SignUp"> Register</Link>
             
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
