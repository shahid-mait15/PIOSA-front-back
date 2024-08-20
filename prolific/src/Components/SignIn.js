import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../assets/SignUpBg.png';
import logoImage from '../assets/logo 2.png'

const SignIn = () => {
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
      const response = await fetch("http://127.0.0.1:5000/SignIn", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const responseBody = await response.json(); // Capture response JSON
  
      console.log('Response Status:', response.status);
      console.log('Response Body:', responseBody);
  
      if (response.ok) {
        localStorage.setItem('userEmail', responseBody.email); // Storing only the email
        toast.success('Sign in successful!', {
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
  


  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/Dashboard2");
      }, 3000); // 3 seconds delay for the toast to be displayed
      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [submitted, navigate]);

  
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
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark mt-0">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              type="password"
              id="password"
              placeholder='Password'
              className="w-full border border-gray-300 rounded-md p-2"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
        
          <button
            type="submit"
            className="w-full bg-primary bg-black text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Sign In
          </button>
          <div className="mt-2 text-center ">
            <p className="text-gray-500">Don't have an account? <Link to="/SignUp" className="text-blue-500">Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
