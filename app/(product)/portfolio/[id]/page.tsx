"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import Card from '@/app/components/Card';
import LineChart from '@/app/components/LineChart';
// import Modal from './Modal';
import NewButton from '@/app/components/NewButton';
import Popup from '@/app/components/Popup';
import { variables } from '@/constants';
import { useParams, useSearchParams } from 'next/navigation';

const data = [
  { id: 1, value1: '#5089', value2: '31 March 2023', value3: '$1200' },
  { id: 2, value1: '#5089', value2: '31 March 2023', value3: '$1200' },
  { id: 3, value1: '#5089', value2: '31 March 2023', value3: '$1200' },
  { id: 4, value1: '#5089', value2: '31 March 2023', value3: '$1200' },
];

const data2 = [
  { id: 1, value1: '#5089', value2: 'Buy', value3: '$1200' },
  { id: 2, value1: '#5089', value2: 'Withdraw', value3: '$1200' },
  { id: 3, value1: '#5089', value2: 'Withdraw', value3: '$1200' },
  { id: 4, value1: '#5089', value2: 'Buy', value3: '$1200' },
];

const Portfolios = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [isBuyShareModalOpen, setIsBuyShareModalOpen] = useState(false);
  const [isWithDrawModalOpen, setIsWithDrawModalOpen] = useState(false);
  const fundId = useParams().id;

  const fundTitles = variables.filter((variable) => variable.id === Number(fundId))

  const title = fundTitles[0].value

  const handleClick = (index: number) => {
    setClickedIndex(index);

  };

  const openBuyShareModal = () => {
    setIsBuyShareModalOpen(true)
  }
  const closeBuyShareModal = () => {
    setIsBuyShareModalOpen(false)
  }

  const openWithDrawModal = () => {
    setIsWithDrawModalOpen(true)
  }
  const closeWithDrawModal = () => {
    setIsWithDrawModalOpen(false)
  }

  return (
    <div className='inline-flex flex-col items-end gap-[40px] w-full pt-[30px] px-[20px] pb-[100px] bg-[#EAEAED]'>
        <div className='flex flex-row justify-between items-center self-stretch'>
            <h1 className='text-var-slate-600 text-[#475569] text-[24px] font-[700] leading-normal'>
               {title}
            </h1>
            <div className='flex items-start gap-[24px]'>
                <NewButton
                  title='Buy Shares'
                  buttonStyles='flex h-[40px] py-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] bg-[#002674]'
                  textStyle='text-[#FFF] text-[14px] font-[500] leading-normal'
                  onClick={openBuyShareModal}
                />

                <NewButton
                  title='Withdraw funds'
                  buttonStyles='flex h-[40px] py-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] bg-blue-400 bg-var-blue-400'
                  textStyle='text-[#FFF] text-[14px] font-[500] leading-normal'
                  onClick={openWithDrawModal}
                />
            </div>
        </div>

        <div className='flex flex-col self-stretch w-[100%]'>
            <div className='inline-flex items-start gap-[40px] self-start'>
                <h1 onClick={() => handleClick(0)} className={`text-var-slate-600 text-[#475569] text-[16px] font-[400] leading-normal ${clickedIndex === 0 && 'border-b-4 border-solid border-[#00B7FE]'} pb-[15px] cursor-pointer`}>
                    Overview
                </h1>

                <h1 onClick={() => handleClick(1)} className={`text-var-slate-600 text-[#475569] text-[16px] font-[400] leading-normal ${clickedIndex === 1 && 'border-b-4 border-solid border-[#00B7FE]'} pb-[15px] cursor-pointer`}>
                    Orders
                </h1>
            </div>

            <div className='flex self-stretch h-[1px] text-var-slate-300 bg-[#CAD4E0]'></div>
        </div>
        
        {clickedIndex === 0 ? 
        (<div className='flex flex-col items-start gap-[24px] w-full'>
          <div className='flex flex-col md:flex-row md:flex-wrap items-center gap-[24px] w-full'>
              <Card
                title='Balance'
                value='$340.345 0.74%'
              />
              <Card
                title='NAV'
                value='$140.34 0.14%'
              />
              <Card
                title='Expense ratio'
                value='1.9%'
              />
          </div>

          <div className='flex flex-wrap justify-center items-start gap-[24px] self-stretch'>
            <div className='flex w-full lg:w-[45%] md:p-[16px] flex-col items-start gap-[30px] rounded-[8px] bg-[#FFF] border border-solid border-slate-300'>
              <LineChart />
            </div>
            <div className='flex w-full px-[16px] pb-[42px] flex-col items-start gap-[30px] rounded-[8px] bg-[#FFF] border border-solid border-slate-300 lg:w-[50%] 2xl:w-[52.5%]'>
              <div className='flex py-[24px] px-[0px] flex-col items-start gap-[16px] self-stretch'>
                <div className='flex justify-between items-center self-stretch'>
                  <h1 className='text-[#23272E] text-[18px] font-[600] leading-[26px] tracking-[-0.36px]'>
                    Last Transactions
                  </h1>
                  <span className='text-[#0F60FF] font-public-sans text-[14px] font-[600] leading-[26px] tracking-[-0.28px] w-[40%] text-center'>
                    View All
                  </span>
                </div>
                <div className='overflow-x-auto w-full'>
                  <table className='w-full'>
                    <thead>
                      <tr className='bg-[#f8f9fa] border-b border-solid border-[#DBDADE]'>
                        <th className='py-2 px-2 sm:px-5 text-[#8B909A]'>
                          <div className='flex text-start text-[13px] font-[500] leading-normal uppercase'>
                            ID
                          </div>
                        </th>
                        <th className='py-[8px] sm:pr-[9px] sm:pl-[20px] text-[#8B909A]'>
                          <div className='flex text-start text-[13px] font-[500] leading-normal uppercase'>
                            Issued Date
                          </div>
                        </th>
                        <th className='py-2 sm:px-5 text-[#8B909A]'>
                          <div className='flex text-start text-[13px] font-[500] leading-normal uppercase'>
                            Total
                          </div>
                        </th>
                        <th className='py-[16.5px] sm:px-5 text-[#8B909A] text-[13px] font-[500] leading-normal uppercase'>
                          <div className='flex text-start'>
                            ACTIONS
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id} className='border-b border-solid border-[#DBDADE]'>
                          <td className='py-4 px-2 sm:px-5 text-[#0F60FF] text-[13px] font-[500] leading-normal uppercase'>
                            {item.value1}
                          </td>
                          <td className='py-2 sm:px-5 text-[#8B909A] text-[13px] font-[500] leading-normal uppercase'>
                            {item.value2}
                          </td>
                          <td className='py-2 sm:px-5 text-[#8B909A] text-[13px] font-[500] leading-normal uppercase'>
                            {item.value3}
                          </td>
                          <td className='py-2 sm:px-5 text-[#0F60FF] text-[13px] font-[500] leading-normal'>
                            View Detail
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>

        </div>) 
        
        :

        (<div className='flex h-[400px] p-[16px] flex-col items-start gap-[30px] rounded-[8px] bg-[#FFF] border border-solid border-slate-300 w-[100%]'>
          <div className='flex py-[24px] px-[0px] flex-col items-start gap-[16px] self-stretch w-[100%]'>
              <div className='flex h-[32px] px-2 sm:px-[24px] justify-between items-start self-stretch w-[100%]'>
                  <h1 className='text-[#23272E] text-[18px] font-[600] leading-[26px] tracking-[-0.36px] h-[24px]'>
                    Orders
                  </h1>

                  <span className='text-[#0F60FF] font-public-sans text-[14px] font-[600] leading-[26px] tracking-[-0.28px]'>
                    View All
                  </span>
              </div>

              <table className='w-[100%]'>
                <thead className='w-[100%]'>
                  <tr className='flex bg-[#f8f9fa] border-b border-solid border-[#DBDADE] w-[100%]'>
                    <th className="flex py-2 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                      <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal uppercase featureSettings'>ID</h1>
                    </th>
                    <th className="flex py-[8px] px-2 sm:pr-[9px] sm:pl-[20px] items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                      <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal uppercase'>ACTION</h1>
                    </th>
                    <th className="flex py-2 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                      <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal uppercase featureSettings'>Total</h1>
                    </th>
                    <th className="flex py-[16.5px] px-2 sm:px-5 items-center gap-[4px] flexibility border-0 border-solid border-[#DBDADE] w-[23%]">
                      <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal uppercase featureSettings'>ACTIONS</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {data2.map((item) => (
                      <tr key={item.id} className='flex border-b border-solid border-[#DBDADE] w-[100%]'>
                        <td className="flex py-4 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                          <h1 className='text-[#0F60FF] flex items-start text-[13px] font-[500] leading-normal featureSettings'>{item.value1}</h1>
                        </td>
                        <td className="flex py-2 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                          <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal featureSettings'>{item.value2}</h1>
                        </td>
                        <td className="flex py-2 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                          <h1 className='text-[#8B909A] flex items-start text-[13px] font-[500] leading-normal featureSettings'>{item.value3}</h1>
                        </td>
                        <td className="flex py-2 px-2 sm:px-5 items-center gap-[4px] self-stretch border-0 border-solid border-[#DBDADE] w-[23%]">
                          <h1 className='text-[#0F60FF] flex items-start text-[13px] font-[500] leading-normal featureSettings'>Cancel</h1>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        </div>)}

        <Popup 
          title= 'Buy Shares'
          isBuyShares={true}
          isPopupOpen={isBuyShareModalOpen}
          handleClose={closeBuyShareModal}
        />

        <Popup 
          title= 'Withdraw fund'
          isBuyShares={false}
          isPopupOpen={isWithDrawModalOpen}
          handleClose={closeWithDrawModal}
        />
    </div>
  )
}

export default Portfolios;
