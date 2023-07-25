import Image from 'next/image'
import React from 'react'

const upCommingFunds = [
    {
        title: 'SBI Consumption Opportunities Fund',
        value: '221.54 INR',
        rate: '0.69%'
    },
    {
        title: 'Aditya Birla Sun Life Am Ltd',
        value: '363.90 INR',
        rate: '1.29%'
    },
    {
        title: 'Canara Robeco Consumer Trend',
        value: '75.32 INR',
        rate: '0.52%'
    },
    {
        title: 'Sun Life Financial Non Cumulative',
        value: '12.30 CAD',
        rate: '0.00%'
    },
    {
        title: 'Sun Life Financial Non Cumulative',
        value: '12.30 CAD',
        rate: '0.00%'
    },
]

const besstFunds = [
    {
        title: 'SBI Consumption Opportunities Fund',
        value: '221.54 INR',
        rate: '0.69%'
    },
    {
        title: 'Aditya Birla Sun Life Am Ltd',
        value: '363.90 INR',
        rate: '1.29%'
    },
    {
        title: 'Canara Robeco Consumer Trend',
        value: '75.32 INR',
        rate: '0.52%'
    },
    {
        title: 'Sun Life Financial Non Cumulative',
        value: '12.30 CAD',
        rate: '0.00%'
    },
    {
        title: 'Sun Life Financial Non Cumulative',
        value: '12.30 CAD',
        rate: '0.00%'
    },
]

const DasboardLeftBar = () => {
  return (
    <div className='flex w-[322px] flex-col items-center gap-[24px]'>
        <div className='flex flex-col items-start gap-[24px] self-stretch rounded-[8px] bg-[#FFF] shadow-sm'>
            <div className='flex p-[16px] items-center gap-[8px] self-stretch border-b border-solid border-1 border-var-slate-300'>
                <h1 className='text-var-slate-700 text-[#334155] text-[20px] font-[500] leading-normal'>
                    Upcoming funds
                </h1>
            </div>

            <div className='flex flex-col justify-center items-start gap-[16px] self-stretch'>
                {upCommingFunds?.map((fund, i) => (
                    <div key={i} className='flex px-[16px] pt-0 pb-[16px] justify-between items-center self-stretch border-b border-solid border-1 border-var-slate-300'>
                        <div className='flex flex-col items-start gap-[8px]'>
                            <h1 className='text-var-slate-600 text-[#475569] text-[12px] font-[500] leading-normal'>{fund?.title}</h1>
                            <h1 className='text-var-slate-500 text-[#64748A] text-[12px] font-[400] leading-normal'>{fund?.value}</h1>
                        </div>
                        <div className={`flex py-[4px] px-[8px] items-center rounded-[19px] bg-var-emerald-500 ${i === 1 ? 'bg-[#F87316]' : 'bg-[#10B880]'}`}>
                            <Image 
                              src='south.svg'
                              width={16}
                              height={16}
                              alt='arrow'
                              className={`${i === 1 && 'transform rotate-180'}`}
                            />
                            <span className='text-[#FFF] text-[12px] font-[500] leading-normal'>{fund?.rate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col items-start gap-[24px] self-stretch rounded-[8px] bg-[#FFF] shadow-sm'>
            <div className='flex p-[16px] items-center gap-[8px] self-stretch border-b border-solid border-1 border-var-slate-300'>
                <h1 className='text-var-slate-700 text-[#334155] text-[20px] font-[500] leading-normal'>
                    Best funds to buy
                </h1>
            </div>

            <div className='flex flex-col justify-center items-start gap-[16px] self-stretch'>
                {besstFunds?.map((fund, i) => (
                    <div key={i} className='flex px-[16px] pt-0 pb-[16px] justify-between items-center self-stretch border-b border-solid border-1 border-var-slate-300'>
                        <div className='flex flex-col items-start gap-[8px]'>
                            <h1 className='text-var-slate-600 text-[#475569] text-[12px] font-[500] leading-normal'>{fund?.title}</h1>
                            <h1 className='text-var-slate-500 text-[#64748A] text-[12px] font-[400] leading-normal'>{fund?.value}</h1>
                        </div>
                        <div className={`flex py-[4px] px-[8px] items-center rounded-[19px] bg-var-emerald-500 ] ${i === 1 ? 'bg-[#F87316]' : 'bg-[#10B880]'}`}>
                            <Image 
                              src='south.svg'
                              width={16}
                              height={16}
                              alt='arrow'
                              className={`${i === 1 && 'transform rotate-180'}`}
                            />
                            <span className='text-[#FFF] text-[12px] font-[500] leading-normal'>{fund?.rate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DasboardLeftBar