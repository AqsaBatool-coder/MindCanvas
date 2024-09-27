'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TextInput from '@/components/ui/text-input/page';

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
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
      [name]: value,
      passwordValid: name === 'newPassword' ? value.length >= 8 : prevState.passwordValid,
      passwordsMatch: name === 'confirmPassword' ? value === formData.newPassword : formData.confirmPassword === value,
    }));

    setError(''); 
  };

  const isValid =  formData.newPassword.length >= 8 && formData.passwordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isValid) {
      setLoading(false);
      setError('Please fill the form correctly.');
      return;
    }

    try {
      setTimeout(() => {
        console.log('Form submitted:', formData);

        setFormData({
          newPassword: '',
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
      <div className='flex flex-col items-center justify-center rounded-[10px] md:px-[80px] px-[20px] xl:px-[150px] py-[64px] lg:py-[114px] mx-auto md:my-[200px] my-[90px] w-[80%] lg:w-[60%] bg-white shadow-custom-white'>
        <h1 className='text-black text-center md:font-[400] font-[500] text-[35px] md:text-[50px] leading-[30px] mb-[34px]'>
          Reset Password
        </h1>
        <p className='text-[16px] leading-[30px] text-black/50 text-center mb-[30px]'>
          Reset your password to regain access and secure your account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md space-y-[36px] w-full">
           <div className='flex flex-col w-[95%] gap-y-[16px]'>
                <div className='flex flex-col md:flex-row justify-start md:gap-[24px] gap-[6px] w-full md:items-center relative'>
                    <TextInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="New password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        name="newPassword"
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
            {loading ? 'Please wait...' : 'Reset Password'}
          </button>
        </form>

        {error && <small className="text-red-500 mt-4">{error}</small>}
      </div>
  );
};

export default ResetPasswordPage;
