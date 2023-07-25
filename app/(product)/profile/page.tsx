'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col items-start self-stretch w-full'
  },
  inputlabel: {
    className: 'text-base text-[12px] font-[500] leading-[20px] text-gray-600 font-light'
  },
  input: {
    className: 'flex py-[12px] px-[16px] flex-col items-start self-stretch rounded-[8px] w-full mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}


const Profile = () => {
  const {data: session} = useSession();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
      firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .required('Your first name is required'),
      lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .required('Your last name is required'),
    }),

    onSubmit: async(values) => {

     console.log(values);
     
    },
  });

  return (
    <div className='bg-[#EAEAED] h-[88vh] p-[40px]'>
      <h1 className='text-[#475569] font-[jost] text-[32px] font-[500] leading-normal'>Profile</h1>
      <div className='flex w-full py-[40px] px-[24px] flex-col items-start gap-[24px] rounded-[8px] bg-[#FFF]'>
        <div className='flex justify-center items-center gap-5'>
          <div className='rounded-[72px]'>
            <Image
              src='/Ellipse 2.svg'
              width={72}
              height={72}
              alt='profile'
            />
          </div>

          {session?.user && !session?.user?.bankDetails && <div className='bg-red-200 px-[10px] py-[2px] text-[10px] rounded-[50px]'>Not Verifyed</div>}
          {session?.user && session?.user?.bankDetails && <div className='bg-green-200 px-[10px] py-[2px] text-[10px] rounded-[50px]'>Verified</div>}
        </div>

        <div className='flex w-full sm:w-[350px] flex-col items-start gap-[8px]'>
          <div className='py-3 w-full'>
            <InputField
              value={formik.values.firstName}
              placeholder='Enter your first name here'
              required={false}
              type='text'
              name="firstName"
              className='text-xs'
              label='First Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...inputFieldStylingProps}
            />
          </div>

          <div className='py-3 w-full'>
            <InputField
              value={formik.values.lastName}
              placeholder='Enter your last name here'
              required={false}
              type='text'
              name="lastName"
              className='text-xs'
              label='Last Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...inputFieldStylingProps}
            />
          </div>

          <div className='py-3 w-full'>
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
          </div>

          <div className='flex flex-col space w-full py-3'>
            <Link href='/application'><Button styling='bg-[#002674] text-white py-[10px] px-[8px] mt-2  rounded-[12px] w-full' value='Update Profile' isDisabled={true} /></Link>
            <Button styling='bg-[#002674] text-white py-[10px] px-[8px] mt-2  rounded-[12px] ' value='Save changes' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
