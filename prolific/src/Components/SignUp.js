import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/SignUpBg.png';
import logoImage from '../assets/logo 2.png';

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hasAWSAccount, setHasAWSAccount] = useState(true);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    // email: yup.string().required('Email is required').email('Email is invalid'),
    // password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    context: { hasAWSAccount }
  });

  const onSubmit = async (data) => {
    if (!hasAWSAccount) {
      navigate("/Boarding", { state: { email: data.email } }); // Pass email to Boarding
      return;
    }
  
    const formData = {
      email: data.email,
      pass: data.password, // Change 'password' to 'pass'
      aws: data.aws || '' // Include aws only if it exists, otherwise set it to an empty string
    };
  
    const response = await fetch("http://127.0.0.1:5000/SignUp", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  
    const responseData = await response.json();
    if (response.ok) {
      toast.success('Sign up successful, letting you in!', {
        position: "top-center",
        transition: Slide
      });
      reset();
      setSubmitted(true);
    } else {
      window.alert(responseData.message); // Show the error message from the backend
    }
  };
  
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/SignIn");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <ToastContainer />
      
      <div className="bg-white border border-black p-8 mt-12 rounded-xl shadow-lg max-w-md w-full">
        <img src={logoImage} alt="Logo" className="h-9 w-40 mx-auto mb-0" />
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark mt-0">Sign Up</h2>
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
          <div className="mb-4">
            <span className='font-normal'>Do you have an AWS Account?</span>
            <div className='flex'>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="awsAccount"
                  value="yes"
                  className="mr-2"
                  checked={hasAWSAccount}
                  onChange={() => setHasAWSAccount(true)}
                />
                Yes
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="awsAccount"
                  value="no"
                  className="mr-2"
                  checked={!hasAWSAccount}
                  onChange={() => setHasAWSAccount(false)}
                />
                No
              </label>
            </div>
          </div>
          {hasAWSAccount && (
            <div className="mb-4">
              <input
                type="text"
                id="aws"
                placeholder='AWS Account No.'
                className="w-full border border-gray-300 rounded-md p-2"
                {...register('aws')}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary bg-black text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Sign Up
          </button>
          <div className="mt-2 text-center ">
          <p className="text-gray-500">Already have an account? <Link to="/SignIn" className="text-blue-500">Sign in</Link></p>
         
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
