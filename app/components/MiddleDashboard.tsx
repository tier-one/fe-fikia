'use client';

import { recommandedFunds } from '@/constants';
import fetchFunds from '@/lib/actions/get_fund/fetchFunds';
import fetchPoltfolios from '@/lib/actions/get_portfolios/fetchPortfolio';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AreaChart from './AreaChart';
import DasboardCard from './DashboardCard'
import DoughnutPieChart from "./DoughnutPieChart";
import FundCard from './FundCard';


const MiddleDashboard = () => {
  const { data: session } = useSession();
  const [recomFunds, setRecomFunds] = useState([]);
  const [portfolios, setPortfolios] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  

  const token = session?.user?.token;

  useEffect(() => {
    fetchAllFunds();
    fetchPortfolios();
  }, [token])

  const fetchAllFunds = async () => {
    if (token) {
      const response = await fetchFunds(token);
    
      setRecomFunds(response.fund)
    }
  }

  const fetchPortfolios = async () => {
    if (token) {
      setIsFetching(true);

      const response = await fetchPoltfolios(token);
    
      setPortfolios(response?.portfolioItems);

      setIsFetching(false)
    }
  }

  const allFunds = recomFunds?.map((fund: { fund: { 
    id: any;
    createdAt: string;
    FundLogo: string;
    FundName: string;
    FundSymbol: string;
    FundGoal: string;
    CustodianParcentage: string;
    TrustPercentage: string;
  }; }) => {
    return {
      "id": `${fund?.fund?.id}`,
      "fundLogo": `${fund?.fund?.FundLogo}`,
      "fundName": `${fund?.fund?.FundName}`,
      "fundSymbol": `${fund?.fund?.FundSymbol}`,
      "FundGoal": `${fund?.fund?.FundGoal}`,
      "lunchedDate": `${fund?.fund?.createdAt?.split('T')[0]}`,
      "CustodianParcentage": `${fund?.fund?.CustodianParcentage}%`,
      "TrustPercentage": `${fund?.fund?.TrustPercentage}%`
    }
  });

  
  const handleShowAll = () => {
    router.push('/fund');
  }
  return (
    <div className='flex flex-col gap-[24px]'>
        <div className='flex p-[16px] flex-col items-center gap-[24px] self-stretch rounded-[16px] shadow-sm w-full bg-[#FFF]'>
            <div className='flex justify-between items-center flex-col md:flex-row self-stretch'>
                <div className='flex items-center gap-[56px] flex-col md:flex-row md:flex-wrap'>
                    <div className='flex flex-col items-start gap-[8px]'>
                        <span className='text-[#93A2B7] text-[14px] font-[500] leading-[20px]'>Index</span>

                        <h1 className='text-[#334155] text-[24px] font-[500] leading-normal'>60,021.21</h1>

                        <p className='text-[#475569] text-[14px] font-[500] leading-[20px]'>1.42%</p>
                    </div>
                    <div className='w-[100px] h-[1px] md:w-[1px] md:h-[100px] bg-[#F0F4F8]'></div>

                    <div className='flex flex-col items-start gap-[8px]'>
                        <span className='text-[#93A2B7] text-[14px] font-[500] leading-[20px]'>Your investment</span>

                        <h1 className='text-[#334155] text-[24px] font-[500] leading-normal'>$ 8,032</h1>
                    </div>
                    <div className='w-[100px] h-[1px] md:w-[1px] md:h-[100px] bg-[#F0F4F8]'></div>

                    <div className='flex flex-col items-start gap-[8px]'>
                        <span className='text-[#93A2B7] text-[14px] font-[500] leading-[20px]'>Current value</span>

                        <h1 className='text-[#2563EA] text-[24px] font-[500] leading-normal'>$ 10,142</h1>
                    </div>
                    <div className='w-[100px] h-[1px] md:w-[1px] md:h-[100px] bg-[#F0F4F8]'></div>
                </div>
                
                <div className='flex flex-col items-end gap-[8px]'>
                    <span className='text-[#93A2B7] text-[14px] font-[500] leading-[20px]'>ROI</span>

                    <h1 className='text-[#2563EA] text-[24px] font-[500] leading-normal'>+28.2%</h1>
                </div>
            </div>

            <div className='flex flex-col xl:flex-row items-center gap-[14px] self-stretch'>
                {/* <div className='w-[80%] lg:w-[45%]'>
                    <AreaChart />
                </div> */}
                <div className='w-[80%] lg:w-[45%]'>
                    <h1 className='text-[#334155] text-[24px] font-[500] leading-normal'>Your portfolio</h1>
                    <DoughnutPieChart 
                      portfolios={portfolios}
                      isFetching={isFetching}
                    />
                </div>
            </div>

        </div>

        <div className='flex flex-col items-end gap-[16px] self-stretch'>
            <div className='flex justify-between items-start self-stretch'>
                <div className='flex items-center gap-[8px]'>
                    <h1 className='text-[#334155] text-[16px] font-[500] leading-normal'>Recommended funds</h1>
                </div>

                <div onClick={handleShowAll}  className='flex px-[8px] py-[4px] items-center justify-center gap-[8px] cursor-pointer'>
                    <h1 className='text-[#00B7FE] text-[14px] font-[500] leading-normal'>View all</h1>
                </div>
            </div>

            <div className='flex w-full flex-wrap items-start gap-[16px] self-stretch'>
                {allFunds?.map((fund: any) => (
                    <FundCard fundDetails={fund} key={fund.id} containerStyle='flex h-auto  w-[363px] pt-[16px] flex-col items-start gap-[24px] rounded-[8px] bg-[#FFF]' />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MiddleDashboard;
