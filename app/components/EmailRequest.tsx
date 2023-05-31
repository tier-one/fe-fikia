'use client'

import validator from "validator"
import Button from "./Button";
import InputField from "./InputField";
import { useState } from "react";
import apiQuery from '../api'
interface EmailRequestProps {
  value?: string
  // onClick?: () => void
}

export default function EmailRequest({ value }: EmailRequestProps) {
  const [email, setEmail] = useState('')
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const handleWaitlist = async () => {
    if (validator.isEmail(email)) {
      const response = await apiQuery('waitlist', 'POST', { email: email })
      if (response.hasOwnProperty('email') && response.email === email) {
        setResponseMessage("Congratulations!!! You have been added to the waitlist.")
        setTimeout(() => {
          setResponseMessage("")
        }, 5000)
      } else if (response.status === 422) {
        setResponseMessage("Email already exist")
        setIsError(true)
        setTimeout(() => {
          setResponseMessage("")
          setIsError(false)
        }, 5000)
      }
    }

  }

  const bookDemo = () => {
    console.log('book demo', email)
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
            value={email}
            placeholder='Your email'
            required={false}
            type='text'
            className='text-sm text-[#475569] '
            label=''
            onChange={handleEmail}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='absolute right-0'>
          <Button
            value={value}
            styling='bg-[#002674] text-white py-2 px-4 mt-2 mr-1 rounded-full'
            onClick={value === 'Early Access' ? handleWaitlist : bookDemo}
          />
        </div>
      </div>
      <p className={`text-xs ${isError ? "text-red-500" : "text-[#00B7FE]"} font-bold pl-3 rounded-lg mt-2 lg:text-lg ${false ? 'invisible' : ''}`}>{responseMessage}</p>
    </div>
  )
}
