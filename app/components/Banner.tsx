import React from 'react'
import Image from 'next/image'
import indivInvestor from '../../public/indiv-investor.jpg'

export default function Banner() {
  return (
    <div>
      <div className='absolute flex mt-16 z-10  lg:-mt-[45rem]'>
        <Image src={indivInvestor} alt='indivdual investor' />
        <div className='absolute bg-gradient-to-t from-blue-800 w-full h-full'></div>
      </div>
    </div>
  )
}
