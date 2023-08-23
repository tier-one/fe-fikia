import React from 'react'

type Props = {
    title?: string;
    value?: string;
}

const Card = ({ title, value }: Props) => {
  return (
    <div className='flex p-[16px] flex-col justify-center items-start gap-[30px] rounded-[8px] bg-[#FFF] border border-solid border-1 border-var-slate-300 flex-1 flex-grow-1 flex-shrink-0 flex-basis-0 w-full'>
        <div className='flex flex-col items-start gap-[4px]'>
            <h4 className='text-var-slate-600 text-[#475569] text-[14px] font-[500] leading-normal capitalize'>
                {title}
            </h4>

            <h4 className='text-var-slate-600 text-[#475569] text-[24px] font-[400] leading-normal'>
                {value?.split(' ')[0] && `${value?.split(' ')[0]}`} <span className='text-var-slate-500 text-[#22C45E] text-[24px] font-[400] leading-normal'>{value?.split(' ')[0] ? value?.split(' ')[1] : value}</span>
            </h4>
        </div>
    </div>
  )
}

export default Card