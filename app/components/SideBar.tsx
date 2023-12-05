'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation';
import { variables } from '@/constants';
import { useSession } from 'next-auth/react';
import fetchPoltfolios from '@/lib/actions/get_portfolios/fetchPortfolio';

const SideBar = () => {
    const { data: session } = useSession();
  const pathname = usePathname();
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [menu, setMenu] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const fundId = useParams().id;

  const token = session?.user?.token;
    
  function handleHamburgerBtn() {
    setHamburgerOpen(!hamburgerOpen)
  }

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setHamburgerOpen(!hamburgerOpen)
  };

  useEffect(() => {
    fetchPortfolios();
  }, [token])

  const fetchPortfolios = async () => {
    if (token) {
      const response = await fetchPoltfolios(token);
    
      setPortfolios(response?.portfolioItems)
    }
  }

  return (
    <div className='bg-[#EAEAED]'>
        <div className='flex flex-col sm:flex-row justify-between items-start md:items-center w-[20vw] md:h-[88vh]'>
            <div className='hidden md:flex flex-[1] h-full py-[30px] px-[20px]'>
                <div className='flex flex-col items-start gap-[16px]'>
                    <div onClick={() => handleClick(-1)}  className={`${pathname === '/dashboard' && 'border-r-4 border-solid border-[#00B7FE]'} flex flex-row items-center py-[12px] px-[10px] gap-[15px] self-stretch cursor-pointer ml-[10px]`}>
                        <span className={`flex w-[32px] h-[32px] p-[3px] flex-col justify-center items-center shrink-0 rounded-[4px]`}>
                            <Image 
                              src={pathname === '/dashboard' ? '/space_dashboard2.svg' : '/space_dashboard.svg'}
                              width={30}
                              height={30}
                              alt='dashboard icon'
                              className={`${clickedIndex === -1 ? 'text-white' : 'text-black'}`}
                            />
                        </span>
                        <Link href='/dashboard' className={`${pathname === '/dashboard' ? 'text-[#00B7FE]' : 'text-[#475569]'} text-[16px] font-[500] leading-[20px]`}>Dashboard</Link>
                    </div>

                    <div onClick={() => handleClick(-2)}  className={`${pathname === '/fund' && 'border-r-4 border-solid border-[#00B7FE]'} flex flex-row items-center py-[12px] px-[10px] gap-[15px] self-stretch cursor-pointer ml-[10px]`}>
                        <span className={`flex w-[32px] h-[32px] p-[3px] flex-col justify-center items-center shrink-0 rounded-[4px]`}>
                            <Image 
                              src={pathname === '/fund' ? '/funds2.svg' : '/funds.svg'}
                              width={30}
                              height={30}
                              alt='dashboard icon'
                              className={`${clickedIndex === -2 ? 'text-white' : 'text-black'}`}
                            />
                        </span>
                        <Link href='/fund' className={`${pathname === '/fund' ? 'text-[#00B7FE]' : 'text-[#475569]'} text-[16px] font-[500] leading-[20px]`}>Funds</Link>
                    </div>

                    <div className='flex flex-col items-start gap-[8px] self-stretch'>
                        <div className='flex flex-row items-start pl-[16px] py-[8px] gap-[8px] self-stretch ml-[3px]'>
                            <div className='flex items-center w-full gap-[8px] self-stretch'>
                                <h1 className='text-[#475569] font-[600] text-[14px] capitalize'>portfolio</h1>
                                <span className='h-[1px] w-[80%] bg-[#CAD4E0]'/>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-[8px] self-stretch'>
                            {portfolios?.map((portfolio: any, index) => (
                                <div onClick={() => handleClick(index)} key={index} className={`${clickedIndex === index && 'border-r-4 border-solid border-[#60A4F9]'} flex px-[16px] py-[12px] items-center gap-[15px] self-stretch cursor-pointer`}>
                                    <span className='bg-[#60A4F9] p-[8px] w-[32px] h-[32px] flex text-white text-[16px] font-[700] leading-[20px] justify-center items-center rounded-[4px]'>{portfolio?.fundName?.charAt(0)}</span>
                                    <span className={`${clickedIndex === index ? 'text-[#00B7FE]' : 'text-[#334155]'} text-[14px] font-[500] leading-[20px]`}>{portfolio?.fundName}</span>
                                    {/* <Link href={`/portfolio/${index}`} className={`${clickedIndex === index ? 'text-[#00B7FE]' : 'text-[#334155]'} text-[14px] font-[500] leading-[20px]`}>{portfolio?.fundName}</Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar