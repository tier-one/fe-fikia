import Image from 'next/image'
import React from 'react'
import AreaChart from './AreaChart';
import DasboardCard from './DashboardCard'
import DoughnutPieChart from "./DoughnutPieChart";

const MiddleDashboard = () => {
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
                <div className='w-[80%] lg:w-[45%]'>
                    <AreaChart />
                </div>
                <div className='w-[80%] lg:w-[45%]'>
                    <h1 className='text-[#334155] text-[24px] font-[500] leading-normal'>Your portfolio</h1>
                    <DoughnutPieChart />
                </div>
            </div>

        </div>

        <DasboardCard 
          upperTitle='Consumption' 
          title='Unguka fund - Growth'
          firstTitle='INCEPTION DATE'
          secondTitle='NET ASSETS'
          thirdTitle='YTD RETURN'
          firstValue='Aug 5, 2005'
          secondValue='$10,000'
          thirdValue='+9.8 %'
          textGray='text-[#475569]'
        />

        <DasboardCard 
          upperTitle='Consumption' 
          title='Unguka fund - Growth'
          firstTitle='Fund size'
          secondTitle='Return (P.A)'
          thirdTitle='Risk'
          firstValue='$10,000'
          secondValue='+9.8 %'
          thirdValue='Low'
          textGreen='text-[#22C45E]'
        />
    </div>
  )
}

export default MiddleDashboard