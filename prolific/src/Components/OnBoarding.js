import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../assets/SignUpBg.png';
import logoImage from '../assets/logo 2.png'

const OnBoarding = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();


  const schema = yup.object().shape({
    // email: yup.string().email("Invalid email format").required("Email is required"),
    // password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/Boarding", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const responseBody = await response.json(); // Capture response JSON
  
      console.log('Response Status:', response.status);
      console.log('Response Body:', responseBody);
  
      if (response.ok) {
        localStorage.setItem('userEmail', responseBody.email); // Storing only the email
        toast.success('One of Our Experts will contact you shortly!', {
          position: "top-center",
          transition: Slide
        });
        reset();
        setSubmitted(true);
      } else {
        const errorMessage = responseBody.message || 'Failed to sign in.';
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      toast.error(error.message || 'Failed to sign in.');
    }
  };
  

  const handleChatWithExpertClick = () => {
    navigate("/", { state: { showChatBot: true, hideSignUp: true } });
  };


  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <ToastContainer />
      
      <div className="bg-white border border-black p-8 mt-12 rounded-xl shadow-lg max-w-md w-full">
        <img src={logoImage} alt="Logo" className="h-9 w-40 mx-auto mb-0" />
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark mt-0">OnBoarding Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>


          <div className=' flex gap-5'>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder='full Name'
              className="w-full border border-purple-950 rounded-md p-2"
              {...register('name')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="organization"
              placeholder='Organization Name'
              className="w-full border border-purple-950 rounded-md p-2"
              {...register('OrganisationName')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          </div>
          <div className=' flex gap-5'>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder='Email address'
              className="w-full border border-purple-950 rounded-md p-2"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              placeholder='Phone'
              className="w-full border border-purple-950 rounded-md p-2"
              {...register('phone')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          </div>


        
          <button
            type="submit"
            className="w-full bg-primary bg-black text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Continue
          </button>
          

        
        </form>
        <div className="mt-4 w-full text-center">
          <div className="flex items-center justify-center w-full border-b border-gray-300 pb-2">
            <span className="mr-2">OR</span>
          </div>
          <button type='button' className=" bg-black text-white font-bold rounded-md p-2 mt-4 px-5 hover:bg-gray-300" onClick={handleChatWithExpertClick}>
            <Link to="/" className="text-white">Chat with an Expert</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
