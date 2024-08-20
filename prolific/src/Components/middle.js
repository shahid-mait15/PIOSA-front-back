import React from 'react'

import videoFile from '../assets/video1.mp4';
import videoFile2 from '../assets/hight demond.mp4';
import videoFile3 from '../assets/human.mp4';
function Middle() {
  return (
    <div>
       <div className="flex justify-center items-center mt-10 gap-20 bg-neutral-800 rounded-lg">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 w-full  ">
          {/* Video 1 */}
          <div className="rounded-md group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[30rem] w-72">
              <video className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" muted autoPlay loop playsInline>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Costly Spikes</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-5">
                IOPS experience spikes for limited periods, which can lead to increased costs if high IOPS are maintained constantly.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[30rem] w-72">
              <video className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" muted autoPlay loop playsInline>
                <source src={videoFile2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">High Demand</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 mt-5 group-hover:opacity-100">
                Some customers have workloads on-premise which need 2M+ IOPS for their block storage and 10Gbps+ peak throughput.
              </p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[30rem] w-72">
              <video className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" muted autoPlay loop playsInline>
                <source src={videoFile3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Optimized Performance</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 mt-5 group-hover:opacity-100">
                To reduce this, Prolific I/O can boost throughput and IOPS during peak times while maintaining baseline performance at other times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
