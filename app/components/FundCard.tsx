import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import Button from './Button';
import NewButton from './NewButton';

type Props = {
    fundDetails: {
        id: number;
        fundLogo: string;
        fundName: string;
        fundSymbol: string;
        inception: string;
        lunchedDate: string,
        price: string,
        avm: string
    }
    containerStyle: string
}

const FundCard = ({ fundDetails, containerStyle }: Props) => {
  const router = useRouter()
  const handleFundDetails = () => {
    router.push(`/fund/${fundDetails.id}`)
  }
  return (
    <div className={containerStyle}>
        <div className='flex px-[16px] flex-col items-start gap-[16px] self-stretch'>
            <div className='flex justify-between items-start self-stretch'>
                <div className='flex items-center gap-[9px]'>
                    <div className='w-[40px] h-[40px] rounded-[8px] bg-[#F7F9FB]'>
                        {fundDetails?.fundLogo && (
                            <Image 
                                src={fundDetails?.fundLogo}
                                width={37}
                                height={37}
                                alt='fundLogo'
                            />
                        )}
                    </div>

                    <div className='flex flex-col items-start gap-[2px]'>
                        <h1 className='text-[#475569] text-[14px] font-[500] leading-[21px]'>{fundDetails.fundName}</h1>

                        <h1 className='text-[#93A2B7] text-[12px] font-[500] leading-normal'>{fundDetails.fundSymbol}</h1>
                    </div>
                </div>

                <div className='flex px-[8px] pt-[8px] justify-center items-center rounded-[8px]'>
                    <Image 
                        src='/bookmark_border.svg'
                        width={24}
                        height={24}
                        alt='bookmark_border'
                    />
                </div>
            </div>

            <div className='flex items-start gap-[16px]'>
                <div className='flex flex-col items-start gap-[8px]'>
                    <h1 className='flex justify-center items-center gap-[16px] text-[#64748A] text-[14px] font-[400] leading-[21px]'>
                        Since inception
                        <span className='text-[#475569] text-[14px] font-[500] leading-[21px]'>
                            {fundDetails.inception}
                        </span>
                    </h1>

                    <h1 className='flex justify-center items-center gap-[16px] text-[#64748A] text-[14px] font-[400] leading-[21px]'>
                        Launch date
                        <span className='text-[#475569] text-[14px] font-[500] leading-[21px]'>
                            {fundDetails.lunchedDate}
                        </span>
                    </h1>

                    <h1 className='flex justify-center items-center gap-[16px] text-[#64748A] text-[14px] font-[400] leading-[21px]'>
                        Minimul buy
                        <span className='text-[#475569] text-[14px] font-[500] leading-[21px]'>
                            {fundDetails.price}
                        </span>
                    </h1>

                    <h1 className='flex justify-center items-center gap-[16px] text-[#64748A] text-[14px] font-[400] leading-[21px]'>
                        AVM
                        <span className='text-[#475569] text-[14px] font-[500] leading-[21px]'>
                            {fundDetails.avm}
                        </span>
                    </h1>
                </div>
            </div>

        </div>

        <div className='flex items-start self-stretch rounded-t-none rounded-b-[8px]'>
            <NewButton
                title='Buy Shares'
                buttonStyles='flex p-[8px] justify-center items-center gap-[8px] flex-1 self-stretch bg-[#031F57] rounded-bl-[8px]'
                textStyle='text-[#FFF] text-[14px] font-[500] leading-[21px]'
                onClick={() => {}}
            />

            <NewButton
                title='See more Details'
                buttonStyles='flex p-[8px] justify-center items-center gap-[8px] flex-1 self-stretch bg-[#F7F9FB] rounded-br-[8px]'
                textStyle='text-[#031F57] text-[14px] font-[500] leading-[21px]'
                onClick={handleFundDetails}
            />
        </div>
    </div>
  )
}

export default FundCard