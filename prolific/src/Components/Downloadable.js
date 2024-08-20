import React from 'react'
import Img from "../assets/image (8).png"
import Tvideo from "../assets/White and Blue Minimalist Cloud Service Provider Logo.mp4"
function Downloadable() {
  return (
    <>
    <div className=' px-16 mt-16 '>
      <h1 className=' text-2xl font-semibold mx-52'>Download PIOSA Package</h1>
    </div>
   <div className=' flex justify-center gap-5'>
   <div>
        <img src={Img}/>
        <h1 className=' text-center border py-2 mx-10 bg-black text-white'>All IN ONE PLACE</h1>
    </div>

<div>
<video
        src={Tvideo}
        className="h-full w-full "
        muted
        autoPlay
        loop
        playsInline
      ></video>
</div>


   </div>
    </>
  )
}

export default Downloadable
