'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MiddleDashboard from '../../components/MiddleDashboard'
import DashboardLeftBar from '../../components/DashboardLeftBar'
import Link from 'next/link'
import Portfolios from '../../components/Portfolios'

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
    <div className='bg-[#EAEAED]'>
        <div className='flex flex-col sm:flex-row justify-between items-start md:items-center w-[100vw] md:h-[88vh]'>
            <div className='hidden md:flex flex-[1] h-full py-[30px] px-[20px] max-w-[205px]'>
                <div className='flex flex-col items-start gap-[16px]'>
                    <div onClick={() => handleClick(-1)}  className={`${clickedIndex === -1 && 'border-r-4 border-solid border-[#2563EA]'} flex flex-row items-center py-[12px] px-[10px] gap-[15px] self-stretch cursor-pointer ml-[10px]`}>
                        <span className={`${clickedIndex === -1 ? 'bg-[#2563EA]' : 'bg-[#CAD4E0]'} flex w-[32px] h-[32px] p-[3px] flex-col justify-center items-center shrink-0 rounded-[4px]`}>
                            <Image 
                              src='/dashboard.svg'
                              width={30}
                              height={30}
                              alt='dashboard icon'
                              className={`${clickedIndex === -1 ? 'text-white' : 'text-black'}`}
                            />
                        </span>
                        <Link href='/dashboard' className={`${clickedIndex === -1 ? 'text-[#2563EA]' : 'text-[#475569]'} text-[16px] font-[500] leading-[20px]`}>Dashboard</Link>
                    </div>

                    <div className='flex flex-col items-start gap-[8px] self-stretch'>
                        <div className='flex flex-row items-start pl-[16px] py-[8px] gap-[8px] self-stretch ml-[3px]'>
                            <div className='flex items-center w-full gap-[8px] self-stretch'>
                                <h1 className='text-[#475569] font-[600] text-[14px] capitalize'>portfolio</h1>
                                <span className='h-[1px] w-[80%] bg-[#CAD4E0]'/>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-[8px] self-stretch'>
                            {variables.map((variable) => (
                                <div onClick={() => handleClick(variable?.id)} key={variable?.id} className={`${clickedIndex === variable?.id && 'border-r-4 border-solid border-[#2563EA]'} flex px-[16px] py-[12px] items-center gap-[15px] self-stretch cursor-pointer`}>
                                    <span className='bg-[#60A4F9] p-[8px] w-[32px] h-[32px] flex text-white text-[16px] font-[700] leading-[20px] justify-center items-center rounded-[4px]'>{variable?.value?.charAt(0)}</span>
                                    <h1 className={`${clickedIndex === variable?.id ? 'text-[#2563EA]' : 'text-[#334155]'} text-[14px] font-[500] leading-[20px]`}>{variable?.value}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {hamburgerOpen && (
             <div className='flex md:hidden flex-[1]  py-[30px] px-[20px] w-full absolute bg-[#CAD4E0]'>
                <div className='flex flex-col items-start gap-[16px] w-full'>
                    <div onClick={() => handleClick(-1)}  className={`${clickedIndex === -1 && 'border-r-4 border-solid border-[#2563EA]'} flex flex-row items-center py-[12px] px-[10px] gap-[15px] self-stretch cursor-pointer ml-[10px]`}>
                        <span className={`${clickedIndex === -1 ? 'bg-[#2563EA]' : 'bg-[#CAD4E0]'} flex w-[32px] h-[32px] p-[3px] flex-col justify-center items-center shrink-0 rounded-[4px]`}>
                            <Image 
                              src='/dashboard.svg'
                              width={30}
                              height={30}
                              alt='dashboard icon'
                              className={`${clickedIndex === -1 ? 'text-white' : 'text-black'}`}
                            />
                        </span>
                        <Link href='/dashboard' className={`${clickedIndex === -1 ? 'text-[#2563EA]' : 'text-[#475569]'} text-[16px] font-[500] leading-[20px]`}>Dashboard</Link>
                    </div>

                    <div className='flex flex-col items-start gap-[8px] self-stretch'>
                        <div className='flex flex-row items-start pl-[16px] py-[8px] gap-[8px] self-stretch ml-[3px]'>
                            <div className='flex items-center w-full gap-[8px] self-stretch'>
                                <h1 className='text-[#475569] font-[600] text-[14px] capitalize'>portfolio</h1>
                                <span className='h-[1px] w-[80%] bg-[#CAD4E0]'/>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-[8px] self-stretch'>
                            {variables.map((variable) => (
                                <div onClick={() => handleClick(variable?.id)} key={variable?.id} className={`${clickedIndex === variable?.id && 'border-r-4 border-solid border-[#2563EA]'} flex px-[16px] py-[12px] items-center gap-[15px] self-stretch cursor-pointer`}>
                                    <span className='bg-[#60A4F9] p-[8px] w-[32px] h-[32px] flex text-white text-[16px] font-[700] leading-[20px] justify-center items-center rounded-[4px]'>{variable?.value?.charAt(0)}</span>
                                    <h1 className={`${clickedIndex === variable?.id ? 'text-[#2563EA]' : 'text-[#334155]'} text-[14px] font-[500] leading-[20px]`}>{variable?.value}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            )}

            {clickedIndex === -1 ? (
                <div className='flex-[3] flex flex-row flex-wrap h-full'>
                  <div className='flex-[4] min-w-[350px] h-full overflow-auto py-[30px] px-[15px] max-w-[840px] xl:max-w-[80%]'>
                     <MiddleDashboard />
                  </div>
                  <div className='lg:flex-[2] h-full overflow-y-scroll py-[30px] px-[24px] max-w-[400px]'>
                     <DashboardLeftBar />
                  </div>
                </div>
               ) : (
                <div className='lg:flex-[3] flex flex-row h-full'>
                    <div className='lg:flex-1 h-full overflow-auto pb-[30px] px-[5px] md:px-[24px] pt-[40px] w-full'>
                        <Portfolios title={variables?.filter((variable) => variable?.id === clickedIndex)[0].value} />
                    </div>
                </div>
               )}
        </div>
        <div className='block md:hidden absolute top-8 sm:top-[72px] right-5'>
        <div onClick={handleHamburgerBtn}>
          <div className={`h-1 w-10 bg-[#fff] ${hamburgerOpen ? 'absolute rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
          <div className={`h-1 w-10 bg-[#fff] mt-2 ${hamburgerOpen ? 'hidden' : ''}`}></div>
          <div className={`h-1 w-10 bg-[#fff] mt-2 ${hamburgerOpen ? '-mt-[0.2rem] -rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard