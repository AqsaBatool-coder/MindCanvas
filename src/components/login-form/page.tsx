'use client';
import React, { useState } from 'react';
import TextInput from '../ui/text-input/page';
import { emailValidator } from '@/utils';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    emailValid: true,   
    password: '',
    passwordValid: true, 
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,  // Update the input value
      emailValid: name === 'email' ? emailValidator(value) : prevState.emailValid,
      passwordValid: name === 'password' ? value.length >= 8 : prevState.passwordValid,
    }));
  
    setError('');
  };
  

  const isValid = formData.emailValid && formData.passwordValid && formData.email && formData.password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isValid) {
      setLoading(false);
      setError('Enter valid email & password');
      return;
    }

    try {
      setTimeout(() => {
        console.log('Form submitted:', formData);

        setFormData({
          email: '',
          emailValid: true,
          password: '',
          passwordValid: true,
        });

        setLoading(false);
      }, 2000);  
    } catch (err: any) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center rounded-[10px] md:px-[80px] px-[20px] xl:px-[150px] py-[64px] lg:py-[114px] mx-auto md:my-[200px] my-[90px] w-[80%] bg-white shadow-custom-white z-[10]'>
      <h1 className='text-black md:font-[400] font-[500] text-center text-[30px] md:text-[50px] leading-[30px] mb-[40px]'>
        Log In
      </h1> 
      <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md mx-auto pb-[24px] gap-[34px] w-full">
        <div className='flex flex-col w-[90%]'>
                <TextInput
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  error={formData.emailValid ? '' : 'Please enter a valid email'}
                  className='md:mb-[24px] mb-[10px]'
                />
                <TextInput
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                  error={formData.passwordValid ? '' : 'Password must be at least 8 characters'}
                  className='mb-[6px]'
                />
                <Link href='/reset-password' className='no-underline text-black/50 text-right mr-2'>
                  Forgot Password?
                </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary w-[60%] text-white text-sm min-h-[43px] items-center flex flex-col justify-center rounded-[100px]"
        >
          {loading ? 'Please wait...' : 'Log In'}
        </button>
      </form>
      <p className='text-[14px] md:text-[16px] leading-[20px] text-black/50 text-center'>
        Don't have an account? <Link href='/signup' className='text-sky-500'>Sign Up</Link>
      </p>
      {error && <small className="text-red-500 mt-4">{error}</small>}
    </div>
  );
};

export default LoginForm;