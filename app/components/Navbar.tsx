'use client'
import Image from "next/image";
import Link from "next/link";
import DropDownButton, { DropDownMenuType } from "./DropDownButton";
import { useState } from "react";


const dropDownItem: DropDownMenuType = {
  title: 'Our Products',
  menuItems: [
    {
      name: 'Fikia',
      url: '/smeoig'
    },
    {
      name:  'Fikia Plus',
      url: '/seosle'
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
    <div className='bg-white py-5 h-15 max-h-full drop-shadow-lg w-full flex justify-between px-5 lg:px-24'>
      <div>
        <Image 
          src='/fikia_logo.svg' 
          alt='fikia logo'
          width={90}
          height={0} />
      </div>
      <div className='hidden lg:flex w-1/3 justify-around'>
        <Link href='/'>Home</Link>
        <DropDownButton {...dropDownItem} />
        <Link href='/contact'>Contact Us</Link>
      </div>
      <div className='lg:hidden'>
        <div onClick={handleHamburgerBtn}>
          <div className={`h-1 w-10 bg-[#002674] ${hamburgerOpen ? 'mt-3 rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
          <div className={`h-1 w-10 bg-[#002674] mt-2 ${hamburgerOpen ? 'hidden' : ''}`}></div>
          <div className={`h-1 w-10 bg-[#002674] mt-2 ${hamburgerOpen ? '-mt-1 -rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
        </div>
        <div className={`flex flex-col pl-3 absolute bg-white border text-2xl drop-shadow left-0 w-full mt-6 ${hamburgerOpen ? '': 'hidden'}`}>
          <Link href='/' className='mt-4' onClick={handleHamburgerBtn}>Home</Link>
          <div className='mt-4'>
            <div className='flex items-center' onClick={handleDropdown}>
              Our Products
              <Image className='mx-2' src='/arrow.svg' alt="arrow" width={20} height={10} />
            </div>
            <div className={`text-xl ml-3 flex flex-col ${dropDownOpenStatus ? 'daf' : 'hidden'}`}>
              <Link href='/' className='my-1'>Fikia</Link>
              <Link href='/' className='my-1'>Fikia Plus</Link>
            </div>
          </div>
          <Link href='/contact' className='mt-4' onClick={handleHamburgerBtn}>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
