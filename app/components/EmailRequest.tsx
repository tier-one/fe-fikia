'use client'

import validator from "validator"
import Button from "./Button";
import InputField from "./InputField";
import { useState } from "react";
import apiQuery from '../api'
import { useFormik } from "formik";
import * as Yup from "yup";
import addToWaitList from "@/lib/actions/add_to_waitlist/addToWaitlist";

interface EmailRequestProps {
  value?: string
  // onClick?: () => void
}

export default function EmailRequest({ value }: EmailRequestProps) {
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

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
      if (value === 'Early Access') {
        handleWaitlist(values.email)
      } else {
        bookDemo()
      }
      
    },
  });

  const handleWaitlist = async (email: string) => {
    if (validator.isEmail(email)) {
      setIsLoading(true);
      const response = await addToWaitList(email);
      
      if (response.hasOwnProperty('email') && response.email === email) {
        setIsLoading(false);
        setResponseMessage("Congratulations!!! You have been added to the waitlist.")
        setTimeout(() => {
          setResponseMessage("")
        }, 5000)
      } else if (response.response.status === 422) {
        setIsLoading(false);
        setResponseMessage("Email already exists")
        setIsError(true)
        setTimeout(() => {
          setResponseMessage("")
          setIsError(false)
        }, 5000)
      }
    }

  }

  const bookDemo = () => {
    console.log('book demo', formik.values.email)
  }

  const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col space w-full'
    },
    input: {
      className: 'py-4 px-4 rounded-full mt-2 bg-slate-100 border border-gray-300 placeholder:text-gray-600'
    },
  }
  return (
    <div className="min-h-[6.7rem]" >
      <div className='relative  flex items-center  xl:w-3/4  '>
        <div className=' w-full'>
          <InputField
            value={formik.values.email}
            placeholder='Your email'
            required={false}
            type='text'
            name="email"
            className='text-sm text-[#475569] '
            label=''
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='absolute right-0'>
          <Button
            value={value}
            styling={`${!validator.isEmail(formik.values.email) ? 'bg-[#002674] bg-opacity-50' : 'bg-[#002674]'} text-white py-2 px-4 mt-2 mr-1 rounded-full`}
            onClick={formik.handleSubmit}
            isLoading={isLoading}
            isDisabled={true}
          />
        </div>
      </div>
      <p className={`text-xs ${isError ? "text-red-500" : "text-[#00B7FE]"} font-bold pl-3 rounded-lg mt-2 lg:text-lg ${false ? 'invisible' : ''}`}>{responseMessage}</p>
    </div>
  )
}
