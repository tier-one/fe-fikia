import Button from "./Button";
import InputField from "./InputField";
import { useState } from "react";

interface EmailRequestProps {
  value?: string
  // onClick?: () => void
}

export default function EmailRequest({ value }: EmailRequestProps) {
  const [email, setEmail] = useState('')

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const handleWaitlist = () => {
    console.log('handle waitlist', email)
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

    <div className='relative flex items-center xl:w-2/3'>
      <div className=' w-full'>
        <InputField
          value={email}
          placeholder='Your email'
          required={false}
          type='text'
          className='text-xs'
          label=''
          onChange={handleEmail}
          {...inputFieldStylingProps}
        />
      </div>
      <div className='absolute right-0'>
        <Button
          value={value}
          styling='bg-[#002674] text-white py-2 px-4 mt-2 mr-1 rounded-full'
          onClick={value == 'Early Access' ? handleWaitlist : bookDemo}
        />
      </div>
    </div>
  )
}
