'use client'
import Image from "next/image";
import Link from "next/link";
import DropDownButton, { DropDownMenuType } from "./DropDownButton";
import { useState } from "react";
import Button from "./Button";


const dropDownItem: DropDownMenuType = {
  title: 'Our Products',
  menuItems: [
    {
      name: 'Fikia',
      url: '/investor'
    },
    {
      name:  'Fikia Plus',
      url: '/fund-manager'
    }
  ]
}

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [dropDownOpenStatus, setDropDownOpenStatus] = useState(false)

  function handleHamburgerBtn() {
    setHamburgerOpen(!hamburgerOpen)
  }

  function handleDropdown() {
    setDropDownOpenStatus(!dropDownOpenStatus)
  }

  return (
    <div className='bg-white z-50 fixed py-5 h-15 max-h-full drop-shadow-lg w-full flex justify-between px-5 lg:px-24'>
      <div className="flex justify-center items-center">
        <Image 
          src='/fikia_logo.svg' 
          alt='fikia logo'
          width={90}
          height={0} />
      </div>
      <div className="flex items-center gap-[40px]">
        <div className='hidden lg:flex gap-[24px] justify-around'>
          <Link href='/'>Home</Link>
          <DropDownButton {...dropDownItem} />
          <Link href='/contact'>Contact Us</Link>
        </div>
        <Link href='/login'>
          <Button
              onClick={() => {}}
              styling="bg-[#002674] text-white text-[15px] font-[600] leading-[28px] py-[5px] px-[40px] rounded-[29px] "
              value="Login"
              isDisabled={true}
          />
        </Link>
      </div>
      <div className='lg:hidden'>
        <div onClick={handleHamburgerBtn}>
          <div className={`h-1 w-10 bg-[#002674] ${hamburgerOpen ? 'absolute rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
          <div className={`h-1 w-10 bg-[#002674] mt-2 ${hamburgerOpen ? 'hidden' : ''}`}></div>
          <div className={`h-1 w-10 bg-[#002674] mt-2 ${hamburgerOpen ? '-mt-[0.2rem] -rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
        </div>
        <div className={`flex flex-col pl-3 absolute bg-white border text-2xl drop-shadow left-0 w-full mt-6 z-20 ${hamburgerOpen ? '': 'hidden'}`}>
          <Link href='/' className='mt-4' onClick={handleHamburgerBtn}>Home</Link>
          <div className='mt-4'>
            <div className='flex items-center' onClick={handleDropdown}>
              Our Products
              <Image className='mx-2' src='/arrow.svg' alt="arrow" width={20} height={10} />
            </div>
            <div className={`text-xl ml-3 flex flex-col ${dropDownOpenStatus ? '' : 'hidden'}`}>
              <Link href='/investor' onClick={handleHamburgerBtn} className='my-1'>Fikia</Link>
              <Link href='/fund-manager' onClick={handleHamburgerBtn} className='my-1'>Fikia Plus</Link>
            </div>
          </div>
          <Link href='/contact' className='mt-4 mb-2' onClick={handleHamburgerBtn}>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
