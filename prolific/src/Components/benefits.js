// Benefits.js
import React from 'react';
import 'tailwindcss/tailwind.css';
import video from '../assets/benefits2.mp4';

const Benefits = () => {
  return (
    <div className="relative w-full h-96">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="relative w-full py-10 text-center font-bold">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-white text-5xl font-serif font-bold">Benefits</h1>
        </div>

        {/* Text Boxes */}
        <div className="flex gap-5  justify-center mx-5 mt-10">
          {/* First Box */}
          <div className=" bg-white border-b-8 border-cyan-500 text-black  py-10 px-8 transition-all duration-300 hover:border-purple-400">
            <p className="text-black text-2xl transition-all duration-300">
              Reduce AWS block storage TCO<br />
              by 70% by scaling IOPS on demand
            </p>
          </div>

          {/* Second Box */}
          <div className="border-b-8  border-cyan-500 bg-white rounded-lg py-10 px-8 transition-all duration-300">
            <p className="text-black text-2xl transition-all duration-300">
              Experience enhanced performance and<br />
              cost-efficiency in IOPs by using PIOSA
            </p>
          </div>

          {/* Third Box */}
          <div className="border-b-8 bg-white border-cyan-500 rounded-lg py-10 px-8 transition-all duration-300 hover:border-cyan-600">
            <p className="text-black text-2xl transition-all duration-300">
              Achieve or exceed current on-premise IOPS<br />
              levels on AWS for these applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
