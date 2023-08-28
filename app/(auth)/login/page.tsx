'use client'
import InputField from '@/app/components/InputField'
import CheckBox from '@/app/components/CheckBox'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Your password is required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
      
    },
  });

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
            value={formik.values.email}
            placeholder='Enter your email here'
            required={false}
            type='text'
            name="email"
            className='text-xs'
            label='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="flex  text-[10px] text-center text-red-600 self-stretch px-8">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className='py-3'>
          <InputField
            value={formik.values.password}
            placeholder='Enter your password here'
            required={false}
            type='text'
            name="password"
            className='text-xs'
            label='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="flex text-[10px] text-center text-red-600 self-stretch px-8">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className='flex justify-between px-9'>
          <CheckBox />
          <Link href='/forgot-password' className='text-base cursor-pointer'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button 
            onClick={formik.handleSubmit}
            styling='bg-[#00133B] text-white py-2 px-4 mt-2  rounded-[12px] ' 
            value='Log in' 
            isDisabled={true}
          />
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
          <Link href='/' className='text-[#A0AEC0] font-[jost] text-[14px] cursor-pointer font-[400] leading-[140%]'>Don’t have an account? <span className='text-[#00133B] font-[jost] text-[14px] font-[700] leading-[140%]'>Create account</span></Link>
        </div>
      </div>
    </main>
  )
}
