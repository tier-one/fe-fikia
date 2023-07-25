'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../../components/Button';
import InputField from '../../components/InputField';

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
  const [profileData, setProfilenData] = useState({
    email: '', firstName: '', lastName: ''
  });

  const handleChange = (fieldName: string, value: string) => {
    setProfilenData((prevState) => ({
      ...prevState, [fieldName]: value
    }))
  }

  return (
    <div className='bg-[#EAEAED] h-[88vh] p-[40px]'>
      <h1 className='text-[#475569] font-[jost] text-[32px] font-[500] leading-normal'>Profile</h1>
      <div className='flex w-full py-[40px] px-[24px] flex-col items-start gap-[24px] rounded-[8px] bg-[#FFF]'>
        <div className='rounded-[72px]'>
          <Image
            src='/Ellipse 2.svg'
            width={72}
            height={72}
            alt='profile'
          />
        </div>

        <div className='flex w-full sm:w-[350px] flex-col items-start gap-[8px]'>
          <div className='py-3 w-full'>
            <InputField
              value={profileData?.firstName}
              placeholder='Enter your first name here'
              required={false}
              type='text'
              className='text-xs'
              label='First Name'
              onChange={(value) => handleChange('firstName', value)}
              {...inputFieldStylingProps}
            />
          </div>

          <div className='py-3 w-full'>
            <InputField
              value={profileData?.lastName}
              placeholder='Enter your last name here'
              required={false}
              type='text'
              className='text-xs'
              label='Last Name'
              onChange={(value) => handleChange('lastName', value)}
              {...inputFieldStylingProps}
            />
          </div>

          <div className='py-3 w-full'>
            <InputField
              value={profileData?.email}
              placeholder='Enter your email here'
              required={false}
              type='text'
              className='text-xs'
              label='Email'
              onChange={(value) => handleChange('email', value)}
              {...inputFieldStylingProps}
            />
          </div>

          <div className='flex flex-col space w-full py-3'>
            <Button styling='bg-[#002674] text-white py-[10px] px-[8px] mt-2  rounded-[12px] ' value='Save changes' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
