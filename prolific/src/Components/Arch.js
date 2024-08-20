// Arch.js
import React from 'react';
import videoFile from "../assets/Architure.mp4";

function Arch() {
  return (
    <div className="h-full">
      <video
        className="w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Arch;
