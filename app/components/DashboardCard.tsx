import React from 'react'
import NewButton from './NewButton'

type Props = {
    upperTitle?: string ;
    title?: string;
    firstTitle?: string;
    secondTitle?: string;
    thirdTitle?: string;
    firstValue?: string;
    secondValue?: string;
    thirdValue?: string;
    textGreen?: string;
    textGray?: string
}

const DasboardCard = ({ upperTitle, title, firstTitle, secondTitle, thirdTitle, firstValue, secondValue, thirdValue, textGreen, textGray }: Props) => {
  return (
    <div className='flex p-[16px] flex-col items-start gap-[24px] self-stretch rounded-[8px] shadow-sm bg-[#FFF] w-full'>
        <div className='flex justify-between items-center self-stretch'>
            <div className='flex flex-col items-start gap-[8px]'>
                <h3 className='text-[#93A2B7] text-[14px] font-[500] leading-[20px]'>
                  {upperTitle}
                </h3>

                <h1 className='text-[#334155] text-[24px] font-[500] leading-normal'>
                  {title}
                </h1>
            </div>

            <NewButton 
              title='Invest Now' 
              buttonStyles='flex py-[8px] px-[16px] items-start gap-[8px] rounded-[8px] border border-solid border-1 border-var-slate-300' 
              textStyle='text-[#475569] text-[14px] font-[500] leading-[20px]' 
            />
        </div>

        <div className='self-stretch h-[1px] bg-[#E1E7EF]'></div>

        <div className='flex items-start gap-[37px]'>
            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[#93A2B7] text-[14px] font-[500] leading-normal'>
                  {firstTitle}
                </h1>

                <h1 className='text-[#475569] text-[16px] font-[500] leading-normal'>
                  {firstValue}
                </h1>
            </div>

            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[#93A2B7] text-[14px] font-[500] leading-normal'>
                  {secondTitle}
                </h1>

                <h1 className={`${textGray ? textGray : textGreen} text-[16px] font-[500] leading-normal`}>
                  {secondValue}
                </h1>
            </div>

            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[#93A2B7] text-[14px] font-[500] leading-normal'>
                  {thirdTitle}
                </h1>

                <h1 className={`${!textGreen ? 'text-[#22C45E]' : textGray} text-[16px] font-[500] leading-normal`}>
                  {thirdValue}
                </h1>
            </div>
        </div>

    </div>
  )
}

export default DasboardCard