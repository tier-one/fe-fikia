'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MiddleDashboard from '../../components/MiddleDashboard'
import DashboardLeftBar from '../../components/DashboardLeftBar'
import Link from 'next/link'
import Portfolios from '../../components/Portfolios'
import AllFunds from '@/app/components/AllFunds'

const variables = [
    {
        id: 1,
        value: 'Unguka fund'
    },
    {
        id: 2,
        value: 'BRD fund'
    }
]

const Dashboard = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [menu, setMenu] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
    
  function handleHamburgerBtn() {
    setHamburgerOpen(!hamburgerOpen)
  }

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setHamburgerOpen(!hamburgerOpen)
  };

  return (
    <div className='bg-[#EAEAED] w-full'>
       <div className='flex-[3] flex flex-row flex-wrap h-[88vh] overflow-y-auto'>
            <div className='flex-[4] min-w-[350px] h-full overflow-auto py-[30px] px-[15px] max-w-[840px] xl:max-w-[80%]'>
                <MiddleDashboard />
            </div>
            <div className='lg:flex-[2] h-full overflow-y-scroll py-[30px] px-[24px] max-w-[380px]'>
                <DashboardLeftBar />
            </div>
        </div>
    </div>
  )
}

export default Dashboard