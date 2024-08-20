import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigatio from "./LendingPage";
import backgroundImage from "../assets/Purple and Green Gradient Blur Minimalist Contact Us Desktop Prototype.png";

const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const pitchSchema = yup.object().shape({
    // name: yup.string().required("Name is required"),
    // email: yup
    //   .string()
    //   .required("Email is required")
    //   .email("Email is not valid"),
    //   phone: yup.string().required("Phone Number is required"),
    //   CompanyName: yup.string().required("Company Name is required"),
    //   country:yup.string().required("Country Name is required"),
    //   message:yup.string().required("message is required"),


  });

  

  const {
    register,
    handleSubmit: pitchHandleSubmit,
    formState: { errors },
    reset: pitchReset,
  } = useForm({
    resolver: yupResolver(pitchSchema),
  });

  

  const onSubmitPitch = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      phone:data.phone,
      CompanyName:data.CompanyName,
      country:data.country,
      message:data.message




    };

    try {
      const response = await fetch("http://127.0.0.1:5000/ContactUS", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success(
          "Thank you for the information. Our Sales Team will reach out to you",
          {
            position: "top-center",
            transition: Slide,
            autoClose: 2000, // Delay in milliseconds (2 seconds)
          }
        );
        pitchReset();
      } else {
        window.alert(responseData.message); // Show the error message from the backend
      }
    } catch (error) {
      console.error("Error in onSubmitPitch:", error);
      window.alert("An error occurred while submitting the form.");
    }
  };

  
  const handleClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <div className="w-full">
        <div className="">
          <Navigatio />
        </div>
        
<div  className="
min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-custom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <div className=" flex lg:col-span-2 justify-center gap-10">
          <div>
            <form onSubmit={pitchHandleSubmit(onSubmitPitch)}>
              <div className=" px-5 mt-5 mb-10">
                <p className="font-semibold text-lg text-white mt-7">Name</p>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full border border-white rounded-md p-2"
                  {...register("name")}
                />
       {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                <div className=" flex gap-10">
                  <div>
                    <p className="font-semibold text-lg text-white mt-7">Email</p>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email address"
                      className="w-full border border-purple-950 rounded-md p-2"
                      {...register("email")}
                    />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white mt-7">
                      Phone Number
                    </p>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full border border-purple-950 rounded-md p-2"
                      {...register("phone")}
                    />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className=" flex gap-10">
                  <div>
                    <p className="font-semibold text-lg text-white mt-7">Company Name</p>
                    <input
                      type="text"
                      id="Company Name"
                      placeholder="Company Name"
                      className="w-full border border-purple-950 rounded-md p-2"
                      {...register("CompanyName")}
                    />
                       {errors.CompanyName && <p className="text-red-500 text-sm">{errors.CompanyName.message}</p>}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white mt-7">
                      Country
                    </p>
                    <input
                      type="text"
                      id="country"
                      placeholder="Country"
                      className="w-full border border-purple-950 rounded-md p-2"
                      {...register("country")}
                    />
                      {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                  </div>
                </div>



                <div>
                  <p className="font-semibold text-lg text-white mt-7">Message</p>
                  <textarea
                    type="text"
                    id="message"
                    placeholder=""
                    className="w-full border border-purple-950 rounded-md p-2"
                    {...register("message")}
                  />
                     {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div className="flex justify-start mt-7">
                  <button
                    type="submit"
                    className="py-1 px-5 text-white font-semibold text-center border border-white bg-purple-900 rounded-full mt-2 mb-5"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h1 className="text-6xl flex text-purple-800 w-full  font-bold  mt-14">
              Contact <p className=" text-white mx-3"> Us</p>
            </h1>
            <p className=" text-lg text-white mt-7 font-semibold">
              Whether you're a new user seeking assistance or a GXI customer
              starting your
              <br />
              journey, we're here to help you find the answers.
            </p>
            <div className="mt-10">
              <div className=" px-5 mt-5 mb-5 bg-customBlue  text-lg">
                <p className="font-normal text-white flex gap-2 mt-7">
                  <FaPhoneAlt className="mt-1 bg-purple-800 text-lg  rounded-full text-white p-1" />
                  7991846291
                </p>
                <p className="font-normal text-white flex gap-2">
                  <MdOutlineMailOutline className="mt-1 text-lg bg-purple-800 rounded-full text-white p-1" />
                  omkarjaiswal646@gmail.com
                </p>
                <p className="font-normal text-white flex gap-2 mb-5">
                  <IoLocationOutline className="mt-1 text-lg bg-purple-800 rounded-full text-white p-1" />
                  902, Tower B, Urbtech Trade Center, Sector 132, Noida, Uttar
                  Pradesh 201304
                </p>
              </div>
            </div>
          </div>
        </div>


{/* location */}


        </div>
        

        <div className="mt-5 border-2 py-5 mx-4 sm:mx-8 md:mx-10 lg:mx-12 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56092.46188634249!2d77.30363488197325!3d28.5163001093417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7dc8f60e537%3A0x6143d8520c47bf41!2sGlobalXperts%20Inc%20%7C%20GXI%20Networks%20Private%20Limited!5e0!3m2!1sen!2sin!4v1719409755532!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      </div>
     


      
      <ToastContainer />
    </>
  );
};

export default ContactUs;
