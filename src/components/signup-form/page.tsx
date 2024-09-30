'use client';
import React, { useState } from 'react';
import TextInput from '../ui/text-input/page';
import { emailValidator } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';
import { register } from '@/actions/register';
import { useRouter } from 'next/navigation';


const SignupForm: React.FC = () => {
  const router = useRouter();

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
  const [successMessage, setSuccessMessage] = useState('');

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the input value
      nameValid: name === 'name' ? value.length >= 3 : prevState.nameValid,
      emailValid: name === 'email' ? emailValidator(value) : prevState.emailValid,
      passwordValid: name === 'password' ? value.length >= 8 : prevState.passwordValid,
      passwordsMatch:
        name === 'confirmPassword'
          ? value === prevState.password
          : name === 'password'
          ? value === prevState.confirmPassword
          : prevState.passwordsMatch,
    }));

    setError('');
  };
  

  const isValid = formData.emailValid && formData.passwordValid &&  formData.passwordsMatch && formData.email && formData.password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isValid) {
      setLoading(false);
      setError('Please fill in the required information correctly.');
      return;
    }

    try {
      const res:any = await register ({
        name: formData.name,
          email: formData.email,
          password: formData.password,
      })


      if (res.status === 200) {
        setSuccessMessage(res.message); 

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
      
      } else {
        setLoading(false);
        const errorMessage = await res.json();
        setError(`Registration failed: ${errorMessage.message}`);
      }
    } catch (err: any) {
      setLoading(false);
      setError('User already exists');
    }
  };


  return (
    <div className='flex flex-col items-center justify-center rounded-[10px] md:px-[80px] px-[20px] xl:px-[150px] py-[64px] lg:py-[114px] mx-auto md:my-[200px] my-[90px] w-[80%] bg-white shadow-custom-white border-t-4 border-primary'>
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
      {successMessage && 
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white rounded-lg p-12 max-w-md w-full">
          <div className="flex justify-end">
            <button onClick={() => setSuccessMessage('')}>
              <Image src='/icons/red-cross.svg' alt='close' width={20} height={20} />
            </button>
          </div>
            <div className="flex flex-col items-center justify-center gap-[14px]">
              <Image src='/icons/success-icon.svg' alt='success' width={100} height={100} />
              <h2 className="text-[20px] leading-[34px] font-[600] text-center mt-[20px]">{successMessage}</h2>
              <p className="text-[16px] leading-[34px] font-[400] text-center">You can now <Link href='/login' className='text-blue-500 underline'>log In</Link></p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SignupForm;