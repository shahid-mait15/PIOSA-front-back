import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tvideo from '../assets/ThankYou.mp4';
 
const ThankYou = () => {
  const [showThankYou, setShowThankYou] = useState(false);
 
  const handleVideoEnd = () => {
    setShowThankYou(true);
  };
 
  useEffect(() => {
    const videoElement = document.getElementById('thankYouVideo');
    videoElement.addEventListener('ended', handleVideoEnd);
 
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);
 
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-500 p-4 overflow-hidden">
      <video
        id="thankYouVideo"
        src={Tvideo}
        muted
        autoPlay
        className="absolute inset-0 w-full h-full object-cover z-0"
      ></video>
      {showThankYou && (
        <div className="relative bg-slate-100 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl z-10">
          <h1 className="text-4xl font-bold mb-6">Thanks for Submitting details!</h1>
          <h1 className="text-4xl font-bold mb-6">One of our experts will contact you shortly</h1>
 
          {/* <p className="text-lg mb-6">Thanks for Submitting details! One of our experts will contact you shortly</p> */}
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/my-orders" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Download Your Response
            </Link>
            <Link to="/" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              HOME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default ThankYou;
 
