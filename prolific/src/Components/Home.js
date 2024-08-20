import { React, useState } from "react";
import Navigatio from "./LendingPage";
import MainSection from "./MainSection";
import Footer from "./footer";
import Benefits from "./benefits";
import Arch from "./Arch";
import Questions from "../assets/backvidero.mp4";
import { useInView } from "react-intersection-observer";
import "animate.css";
import imageFile1 from "../assets/Black Aesthetic Cat Phone Wallpaper.png";
import imageFile2 from "../assets/Black and Orange, Abstract and Neon, Phone Wallpaper.png";
import { useEffect } from "react";
import imageFile3 from "../assets/Moon Phone Wallpaper .png";
import ChatBot from "./ChatBot";
import { useLocation } from "react-router";
import Img1 from "../assets/3.png"
import Img2 from "../assets/4.png"
import Img3 from "../assets/solution-explorer-customers.sm.webp"
import b1 from "../assets/Untitled design.mp4"
import b2 from "../assets/Untitled design (3).mp4"
import b3 from "../assets/Untitled design (2).mp4"
 
 
// import 'App.css'
 
function Home() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraph1Ref, inView: paragraph1InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraph2Ref, inView: paragraph2InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraph3Ref, inView: paragraph3InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [showChatBot, setShowChatBot] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    if (location.state && location.state.showChatBot) {
      setShowChatBot(true);
    }
  }, [location.state]);
 
 
 
  return (
    <>
      <div className=" h-screen bg-blue-600">
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
          <Navigatio />
        </div>
        {/* MainSection will be in the background */}
        <div>
          <MainSection />
        </div>
        {/* <div className=" h-5 bg-black "></div> */}
 
        <div>
 
         
          {/* <div className="relative z-10 mx-10 mr-0">
            <div className="flex flex-grow justify-start items-center mr-0">
              <div className="flex w-full items-start justify-start bg-white">
                <div className="flex py-5 h-[30rem] ">
                  <div className="flex gap-5 ml-0">
                    <div className="h-[35rem]">
                      <div className="rounded-lg  group mt-36 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-[20rem] w-48 relative">
                          <img
                            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                            src={imageFile1}
                            alt="Costly Spikes"
                          />
                         
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        </div>
                       
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 z-20">
                          <h1 className="font-dmserif text-3xl font-bold text-white">
                            Costly Spikes
                          </h1>
                          <p className="text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-5">
                            IOPS experience spikes for limited periods, which
                            can lead to increased costs if high IOPS are
                            maintained constantly.
                          </p>
                        </div>
                      </div>
                    </div>
 
                    <div className="h-[35rem]">
                      <div className="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-[20rem] w-48">
                          <img
                            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                            src={imageFile2}
                            alt="High Demand"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 z-20">
                          <h1 className="font-dmserif text-3xl font-bold text-white">
                            High Demand
                          </h1>
                          <p className="mb-3 text-sm  font-bold text-white opacity-0 transition-opacity duration-300 mt-5 group-hover:opacity-100">
                            Some customers have workloads on-premise which need
                            2M+ IOPS for their block storage and 10Gbps+ peak
                            throughput.
                          </p>
                        </div>
                      </div>
                    </div>
 
                    <div className="h-[35rem]">
                      <div className="rounded-lg group mt-36 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-[20rem] w-48">
                          <img
                            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                            src={imageFile3}
                            alt="Optimized Performance"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 z-20">
                          <h1 className="font-dmserif text-3xl font-bold text-white">
                            Optimized Performance
                          </h1>
                          <p className="mb-3 text-sm font-bold text-white opacity-0 transition-opacity duration-300 mt-5 group-hover:opacity-100">
                            To reduce this, Prolific I/O can boost throughput
                            and IOPS during peak times while maintaining
                            baseline performance at other times.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
 
                  <div className="  mx-12 mt-36 w-full">
                    <p className="pl-6 text-7xl font-bold font-myfont sm:pl-6">
                      Transform
                    </p>
                    <p className="pl-6 text-7xl font-bold font-myfont sm:pl-4 ">
                      and Modernize
                    </p>
                    <p className="pl-4 text-2xl mt-10 font-bold font-myfont text-center">
                      Enhance your applications,infrastructure, and processes
                      with greater agility by leveraging automation,AI,and cloud
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
 
<div className="container mx-auto mt-5 p-6">
        <h1 className=' text-4xl font-bold py-4 mx-5'>Transform your business with PIOSA</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
       
        {/* Employees Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img1} className="w-full h-52 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-2xl font-bold mb-4"> Costly Spikes</h2>
          <p className="text-gray-600 text-sm"> IOPS experience spikes for limited periods,<br/> which
                            can lead to increased costs if high  <br/>IOPS are
                            maintained constantly.</p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline ">Learn more</li>
          </ul>
        </div>
 
        {/* Customers Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img2} alt="Customers" className="w-full h-52 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-2xl font-bold mb-4"> High Demand</h2>
          <p className="text-gray-600 text-sm"> Some customers have workloads on-premise which need
                            2M+ IOPS for their block storage and 10Gbps+ peak
                            throughput.</p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline">Learn more</li>
          </ul>
        </div>
 
        {/* IT Operations Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img3} alt="IT Operations" className="w-full h-52 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-2xl font-bold mb-4"> Optimized Performance</h2>
          <p className="text-gray-600 text-sm"> To reduce this, Prolific I/O can boost throughput
                            and IOPS during peak times while maintaining
                            baseline performance at other times.</p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline">Learn more</li>
          </ul>
        </div>
      </div>
    </div>
 
 
 
 
 
        </div>
 
 
<div>
 
<div className="bg-white min-h-screen flex items-center justify-center">
     
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
        {/* Left Section */}
       
       
        <div className="w-full md:w-3/5 bg-blue-500 flex items-center justify-center p-44 md:rounded-r-full relative overflow-hidden">
  <div className="absolute inset-0">
    <video
      src={b1}
      className="h-full w-full object-cover"
      muted
      autoPlay
      loop
      playsInline
    ></video>
  </div>
</div>
 
 
 
 
 
 
        {/* Right Section */}
        <div className="w-full md:w-3/5 bg-white     flex items-center justify-center p-8 md:p-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Reduce AWS block storage cost</h2>
            <p className="text-gray-600 text-lg mb-6">
            Reduce AWS block storage TCO
            by 70% by scaling IOPS on demand
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
             Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
 
 
    <div className="bg-white min-h-screen flex items-center justify-center">
  <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
   
  <div className="w-full md:w-3/5 bg-yellow-400 flex items-center justify-center p-44 md:rounded-l-full relative overflow-hidden">
  <video
    src={b2}
    className="absolute inset-0 w-full h-full object-cover"
    muted
    autoPlay
    loop
    playsInline
  ></video>
 
  {/* Other content can go here */}
</div>
 
 
 
 
    <div className="w-full md:w-3/5 bg-white flex items-center justify-center  p-8 md:p-12">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">Experience enhanced performance</h2>
        <p className="text-gray-600 text-lg mb-6">
        Experience enhanced performance and
        cost-efficiency in IOPs by using PIOSA.
        </p>
        <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
         Learn more →
        </a>
      </div>
    </div>
  </div>
</div>
 
 
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
        {/* Left Section */}
 
        <div className="w-full md:w-3/5 bg-blue-500 flex items-center justify-center p-44 md:rounded-r-full relative overflow-hidden">
  <div className="absolute inset-0">
    <video
      src={b3}
      className="h-full w-full object-cover"
      muted
      autoPlay
      loop
      playsInline
    ></video>
  </div>
</div>
 
 
        {/* Right Section */}
        <div className="w-full md:w-3/5 bg-white     flex items-center justify-center p-8 md:p-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Achieve or exceed current on-premise IOPS</h2>
            <p className="text-gray-600 text-lg mb-6">
            Achieve or exceed current on-premise IOPS
            levels on AWS for these applications.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
             Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
 
</div>
 
 
        <div className="h-[620px] mt-5">
          <Arch />
        </div>
        {/* <div className=" w-full h-96 mt-10  ">
          <Benefits />
        </div> */}
<div className=" bg-white py-10"></div>
        <div className="relative w-full h-96 mt-20 ">
          <video
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={Questions} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center  py-5 ">
            <p className="text-white text-4xl font-bold  bg-opacity-50 px-4 py-2 rounded">
              <div className=" py-10">
                <div className="bg-gradient-to-b grid lg:grid-cols-2  py-10 text-black ">
                  <div className="col-span-1 mt-28">
                    <h1
                      className={`font-extrabold text-black font-consul text-center py-5 pt-5 ${
                        headingInView
                          ? "animate__animated animate__fadeInLeft"
                          : ""
                      }`}
                    >
                      <p className="font-extrabold mb-2 py-2 text-5xl text-black">
                        Try Prolific I/O
                      </p>
                      <p className="py-2 text-6xl">to Solve Your</p>
                      <p className="py-2 text-6xl">Business Problems</p>
                    </h1>
                  </div>
 
                  <div className="col-span-1 mt-7 mx-3">
                    <p
                      ref={paragraph1Ref}
                      className={`mb-6 mr-3 text-white text-3xl font-consul font-bold border-2 p-2 bg-black rounded-lg  border-black ${
                        paragraph1InView
                          ? "animate__animated animate__fadeInLeft"
                          : ""
                      }`}
                      style={{ animationDelay: "0.5s" }}
                    >
                      Are your throughput demands causing server performance
                      issues?
                    </p>
 
                    <p
                      ref={paragraph2Ref}
                      className={`mb-6 text-white mr-3 text-3xl font-consul font-bold border-2 p-2 bg-black rounded-lg border-black ${
                        paragraph2InView
                          ? "animate__animated animate__fadeInLeft"
                          : ""
                      }`}
                      style={{ animationDelay: "1s" }}
                    >
                      Are your workloads consuming 3 to 4 times the normal
                      storage IOPS for a few hours daily or a few days monthly?
                      {/* Are your workloads consuming 3 to 4 times the storage IOPS for several days a month? */}
                    </p>
 
                    <p
                      ref={paragraph3Ref}
                      className={`mb-6 text-white mr-3 text-3xl py-4 font-consul font-bold rounded-lg border-2 p-2 bg-black border-black ${
                        paragraph3InView
                          ? "animate__animated animate__fadeInLeft"
                          : ""
                      }`}
                      style={{ animationDelay: "1.5s" }}
                    >
                      Are your high storage IOPS increasing your cost on AWS?
                    </p>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
 
        <div className=" mt-14">
          <Footer />
        </div>
 
        {showChatBot && (
          <div className="fixed bottom-4 right-4">
            <ChatBot />
            {/* <ChatBot/> */}
          </div>
        )}
      </div>
    </>
  );
}
 
export default Home;
 
 