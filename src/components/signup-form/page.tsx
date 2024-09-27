'use client';
import React, { useState } from 'react';
import TextInput from '../ui/text-input/page';
import { emailValidator } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    nameValid: true, 
    email: '',
    emailValid: true,   
    password: '',
    confirmPassword: '',
    passwordValid: true,
    passwordsMatch: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,  // Update the input value
      nameValid: name === 'name' ? value.length >= 3 : prevState.nameValid,
      emailValid: name === 'email' ? emailValidator(value) : prevState.emailValid,
      passwordValid: name === 'password' ? value.length >= 8 : prevState.passwordValid,
      passwordsMatch: name === 'confirmPassword' ? value === formData.password : formData.confirmPassword === value,
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
      setError('Please fill in the required information');
      return;
    }

    try {
      setTimeout(() => {
        console.log('Form submitted:', formData);

        setFormData({
          name: '',
          nameValid: true, 
          email: '',
          emailValid: true,   
          password: '',
          confirmPassword: '',
          passwordValid: true,
          passwordsMatch: true,
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
      <h1 className='text-black text-center md:font-[400] font-[500] text-[35px] md:text-[50px] leading-[30px] mb-[40px]'>
        Sign Up
      </h1> 
      <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md mx-auto pb-[20px] gap-[34px] w-full">
        <div className='flex flex-col w-[90%] md:gap-[24px] gap-[10px]'>
                <TextInput
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  error={formData.nameValid ? '' : 'Please enter your name'}
                />
                <TextInput
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  error={formData.emailValid ? '' : 'Please enter a valid email'}
                  className=''
                />
                <div className='flex w-full md:items-center relative'>
                    <TextInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create password"
                        value={formData.password}
                        onChange={handleInputChange}
                        name="password"
                        error={formData.passwordValid ? '' : 'Password must be at least 8 characters'}
                    />
                    <div
                        className="absolute right-0 pr-3 top-[12px] flex items-center text-sm leading-5 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword
                        ? <Image src='/icons/eye-icon.svg' alt="" height={20} width={20} />
                        : <Image src='/icons/eye-slash-icon.svg' alt="" height={20} width={20} />}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-start md:gap-[24px] gap-[6px] w-full md:items-center relative'>
                    <TextInput
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    name="confirmPassword"
                    error={formData.passwordsMatch ? '' : 'Passwords do not match'}
                    />
                    <div
                        className="absolute right-0 pr-3 top-[12px] flex items-center text-sm leading-5 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword
                        ? <Image src='/icons/eye-icon.svg' alt="" height={20} width={20} />
                        : <Image src='/icons/eye-slash-icon.svg' alt="" height={20} width={20} />}
                    </div>
                </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary w-[60%] text-white text-sm min-h-[43px] items-center flex flex-col justify-center rounded-[100px]"
        >
          {loading ? 'Please wait...' : 'Sign Up'}
        </button>
      </form>
      <p className='text-[14px] md:text-[16px] leading-[20px] text-black/50 text-center'>
        Already have an account? <Link href='/login' className='text-sky-500'>Log In</Link>
      </p>
      {error && <small className="text-red-500 mt-4">{error}</small>}
    </div>
  );
};

export default SignupForm;