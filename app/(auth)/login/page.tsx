'use client'
import InputField from '@/app/components/InputField'
import CheckBox from '@/app/components/CheckBox'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full px-8'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '', password: ''
  })

  const handleChange = (fieldName: string, value: string) => {
    setLoginData((prevState) => ({
      ...prevState, [fieldName]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
    
  }

  return (
    <main className='min-h-3/4 md:w-[50%] lg:w-1/3 w-[90%] box-shadow py-4'>
      <div className='w-full h-1/4 text-center text-white'>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
        <p className='font-light py-3'>Complete your details to kick-start your experience with the ultimate fund tracking app!</p>
      </div>
      <div className='bg-white rounded-[24px] shadow-lg h-3/4 px-10 py-10'>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button styling='bg-[#ffff] border border-gray-300 text-gray-500 py-2 px-4 mt-2  rounded-lg' value='Continue with Google' icon='/flat-color-icons_google.svg' />
        </div>
        <div className='flex px-[40px] items-center justify-center gap-[40px] self-stretch my-[10px]'>
          <div className='w-[100px] h-[1px] bg-[#CAD4E0]'/>
          <h1 className='text-[#4D5E80] text-center text-[15px] font-[700] leading-normal'>OR</h1>
          <div className='w-[100px] h-[1px] bg-[#CAD4E0]'/>
        </div>
        <div className='py-3'>
          <InputField
            value={loginData?.email}
            placeholder='Enter your email here'
            required={false}
            type='text'
            className='text-xs'
            label='Email'
            onChange={(value) => handleChange('email', value)}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='py-3'>
          <InputField
            value={loginData?.password}
            placeholder='Enter your password here'
            required={false}
            type='text'
            className='text-xs'
            label='Password'
            onChange={(value) => handleChange('password', value)}
            {...inputFieldStylingProps}
          />
        </div>

        <div className='flex justify-between px-9'>
          <CheckBox />
          <Link href='/forgot-password' className='text-base cursor-pointer'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button styling='bg-[#00133B] text-white py-2 px-4 mt-2  rounded-[12px] ' value='Log in' />
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
          <Link href='/' className='text-[#A0AEC0] font-[jost] text-[14px] cursor-pointer font-[400] leading-[140%]'>Don’t have an account? <span className='text-[#00133B] font-[jost] text-[14px] font-[700] leading-[140%]'>Create account</span></Link>
        </div>
      </div>
    </main>
  )
}
