'use client'
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg'
import Link from 'next/link';
import InputField from '@/app/components/InputField';
import { useState } from 'react';
import Button from '@/app/components/Button';
import { useFormik } from "formik";
import * as Yup from "yup";


const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full py-2'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  return (
    <main className='bg-white flex flex-col  justify-center  rounded-[24px] shadow-lg md:w-[50%] lg:w-1/3 w-[90%] px-16 py-10'>
      <Link href='/login' className='pt-5 flex cursor-pointer'>
        <Image src={Arrow} alt='arrow' className='transform rotate-90' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-3'>
        <h1 className='text-4xl font-bold text-[#475569]'>Forgot password?</h1>
        <p className='text-base py-3 text-[#475569]'>No worries, we&apos;ll send you reset instructions</p>
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
        <div className='flex flex-col space w-full  py-3'>
          <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Receive instructions' />
        </div>
      </div>
      
    </main>
  )
}
