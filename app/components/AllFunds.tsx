import React from 'react'
import FundCard from './FundCard'
// import { allFunds } from '@/constants'



const AllFunds = ({ allFunds }: any) => {
  return (
    <div className='flex w-full'>
        <div className='flex flex-col items-start gap-[24px] py-[20px] w-full h-[88vh] overflow-y-auto'>
            <div className='flex items-start self-stretch'>
                <h1 className='text-[#475569] text-[24px] font-[700] leading-normal'>
                    All Funds
                </h1>
            </div>

            <div className='flex flex-wrap items-start gap-[16px] self-stretch'>
                {allFunds?.map((fund: any) => (
                    <FundCard fundDetails={fund} key={fund.id} containerStyle='flex h-auto  w-[32%] pt-[16px] flex-col items-start gap-[24px] rounded-[8px] bg-[#FFF]' />
                ))}
            </div>
        </div>
        </div>
  )
}

export default AllFunds