'use client';

import ApexChart from '@/app/components/AreaChart'
import LineChart from '@/app/components/LineChart'
import NewButton from '@/app/components/NewButton'
import SubscriptionModal from '@/app/components/SubscriptionModal';
import fetchFundById from '@/lib/actions/get-fundBy-Id/fetchFundById';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Fund = {
  fund: {
    id: string;
    FundName: string;
    FundGoal: string;
    FundSymbol: string;
    FundType: string;
    FundLogo: string;
    AccoutDepositoryBankName: string;
    AccountDepositoryAccountNumber: string;
    CashAccountBankName: string;
    CashAccountNumber: string;
    CustodianBankName: string;
    CustodianParcentage: string;
    TrustBankName: string;
    TrustPercentage: string
  }
  balance: any
};

const FundDetails = () => {
  const {data: session} = useSession();
  const fundId = useParams().id;
  const token = session?.user?.token;
  const [singleFund, setSingleFund] = useState<Fund>();
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const getSingleFund = async () => {
    const results = await fetchFundById(token, fundId);

    setSingleFund(results.fund)
  }

  useEffect(() => {
    if (fundId && token !== undefined) {
      getSingleFund()
    }
  }, [fundId, token]);

  const openSubscriptionModal = () => {
    setIsSubscriptionModalOpen(true)
  }

  const closeSubscriptionModal = () => {
    setIsSubscriptionModalOpen(false)
  }

  return (
    <div className='flex bg-[#EAEAED] py-[48px] px-[40px] w-full'>
      <div className='flex w-full flex-col items-start gap-[8px]'>

        <Link href='/fund' className='flex items-start self-stretch'>
          <button className='flex justify-center items-center py-[4px] px-[8px] gap-[4px] rounded-[4px] border border-[#00B7FE]'>
            <Image 
              src='/keyboard_arrow_left.svg'
              width={18}
              height={18}
              alt='keyboard_arrow_left'
            />
            <h1 className='text-[#00B7FE] text-[14px] font-[400] leading-normal'>
              Return
            </h1>
          </button>
        </Link>

        <div className='flex flex-col items-start gap-[16px] self-stretch'>
          <div className='flex w-full p-[16px] flex-col items-end gap-[24px] rounded-[8px] border border-[#E5E9F0] bg-[#FFF]'>
            <div className='flex justify-between items-center self-stretch'>
              <div className='flex flex-col items-start gap-[8px]'>
                <h1 className='text-[#62708C] text-[20px] font-[600] leading-normal tracking-[0.5px]'>
                  {singleFund?.fund?.FundName}
                </h1>

                <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal tracking-[0.5px]'>
                  {singleFund?.fund?.FundSymbol}
                </p>
              </div>

              <div className='flex items-start gap-[24px]'>
                <NewButton 
                  title='Buy Shares' 
                  buttonStyles='flex py-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] bg-[#031F57]' 
                  textStyle='text-[#FFF] text-[14px] font-[500] leading-normal' 
                />

                <NewButton 
                  title='Subscribe' 
                  buttonStyles='flex py-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] bg-[#031F57]' 
                  textStyle='text-[#FFF] text-[14px] font-[500] leading-normal' 
                  onClick={openSubscriptionModal}
                />

                <NewButton 
                  title='Add Watchlist' 
                  buttonStyles='flex py-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#00B7FE]' 
                  textStyle='text-[#00B7FE] text-[14px] font-[500] leading-normal' 
                />
              </div>
            </div>

            <div className='flex justify-between items-start self-stretch'>
              <div className='flex flex-wrap items-start gap-[40px]'>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Total amount
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[600] leading-normal'>
                    $ {singleFund?.balance?.fundBalance}
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Available funds
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[600] leading-normal'>
                    $ {singleFund?.balance?.fundBalance}
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Profitability
                  </h1>

                  <span className='text-[#34D399] text-[16px] font-[700] leading-normal tracking-[0.5px]'>
                    + {singleFund?.fund?.TrustPercentage}%
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Depostory account
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[700] leading-normal tracking-[0.5px]'>
                    {singleFund?.fund?.AccountDepositoryAccountNumber}
                  </span>
                </div>

              </div>

              <div className='flex flex-wrap items-start gap-[40px]'>

              <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Account Name
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[600] leading-normal tracking-[0.5px]'>
                    {singleFund?.fund?.AccoutDepositoryBankName}
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    NAV
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[600] leading-normal tracking-[0.5px]'>
                    $ {singleFund?.balance?.fundBalance}
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Expense ration
                  </h1>

                  <span className='text-[#62708C] text-[16px] font-[600] leading-normal tracking-[0.5px]'>
                    6.55%
                  </span>
                </div>

                <div className='flex flex-col items-start gap-[8px]'>
                  <h1 className='text-[#62708C] text-[14px] font-[400] leading-normal tracking-[0.5px]'>
                    Risk
                  </h1>

                  <span className='text-[#F59E0B] text-[16px] font-[400] leading-normal tracking-[0.5px]'>
                    Moderate
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* <div className='flex w-full p-[16px] flex-col items-start gap-[20px] rounded-[8px] bg-[#FFF] border border-solid border-slate-300'>
              <ApexChart />
          </div> */}


        </div>
      </div>

      <SubscriptionModal
        title='Subscription'
        isPopupOpen={isSubscriptionModalOpen}
        handleClose={closeSubscriptionModal}
      />
    </div>
  )
}

export default FundDetails