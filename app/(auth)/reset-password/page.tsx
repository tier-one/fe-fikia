'use client'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../../../public/arrow.svg'
import InputField from '@/app/components/InputField'
import { useState } from 'react'
import Button from '@/app/components/Button' 
import { useFormik } from "formik";
import * as Yup from "yup";

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('New Password is required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
      confirmPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Confirm Password is required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
      
    },
  });
  
  return (
    <main className='bg-white rounded-[24px] shadow-lg min-h-1/2 md:w-[50%] lg:w-1/3 w-[90%] px-16 py-4'>
      <Link href='/login' className='pt-8 flex'>
        <Image src={Arrow} alt='arrow' className='transform rotate-90' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-5'>
        <h1 className='text-4xl font-bold text-[#475569]'>Change password?</h1>
        <p className='text-base py-3 text-[#475569] text-center'>Do not disclose your new password to anyone to avoid a cyber attacks.</p>
        <div className='py-2'>
          <InputField
              value={formik.values.newPassword}
              placeholder='Enter your new password here'
              required={false}
              type='text'
              name="newPassword"
              className='text-xs'
              label='New Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...inputFieldStylingProps}
          />
        </div>
        <div className='py-3'>
          <InputField
            value={formik.values.confirmPassword}
            placeholder='Confirm your new password here'
            required={false}
            type='text'
            name="confirmPassword"
            className='text-xs'
            label='Confirm Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='flex flex-col space w-full  py-3'>
          <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Change password' />
        </div>
      </div>
    </main>
  )
}
