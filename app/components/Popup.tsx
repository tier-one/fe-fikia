import React from 'react'
import Button from './Button';
import Modal from './Modal'

type Props = {
    title?: string;
    isBuyShares?: boolean;
    isPopupOpen: boolean;
    handleClose: () => void;
}

const Popup = ({ title, isBuyShares, isPopupOpen, handleClose }: Props) => {
  return (
    <Modal isOpen={isPopupOpen} onClose={handleClose} >
          <div className='bg-[#FFF] rounded-[16px] p-[24px] flex flex-col items-start gap-[32px]'>
            <p className="text-[#475569] font-semibold">{title}</p>
            {isBuyShares && 
                (<div className='flex py-[10px] px-[12px] flex-col items-start gap-[20px] self-stretch rounded-[8px] bg-[#F0F4F8]'>
                  <h1 className='text-[#64748A] font-[jost] text-[12px] font-[500] leading-[20px]'>
                    Number of shares
                  </h1>

                  <div className='flex justify-between items-center self-stretch'>
                    <h2 className='text-[#64748A] font-[jost] text-[16px] font-[500] leading-[20px]'>
                      0.00
                    </h2>

                    <div className='flex w-[64px] py-[4px] px-[8px] justify-center items-center gap-[8px] rounded-[13px] bg-[#FFF]'>
                      <h1 className='text-[#64748A] font-[jost] text-[12px] font-[500] leading-[20px]'>
                        Shares
                      </h1>
                    </div>
                  </div>
                </div>)}
            
            <div className='flex py-[10px] px-[12px] flex-col items-start gap-[20px] self-stretch rounded-[8px] bg-[#F0F4F8]'>
              <h1 className='text-[#64748A] font-[jost] text-[12px] font-[500] leading-[20px]'>
                Amount
              </h1>

              <div className='flex justify-between items-center self-stretch'>
                <h2 className='text-[#64748A] font-[jost] text-[16px] font-[500] leading-[20px]'>
                  0.00
                </h2>

                <div className='flex w-[64px] py-[4px] px-[8px] justify-center items-center gap-[8px] rounded-[13px] bg-[#FFF]'>
                  <h1 className='text-[#64748A] font-[jost] text-[12px] font-[500] leading-[20px]'>
                    RWF
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-8 ">
              <div>
                <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value={title} />
              </div>
              <div>
                <Button styling='bg-[#F0F4F8] text-[#475569] py-2 px-4 mt-2 ml-4 rounded-lg ' value='Cancel' />
              </div>
            </div>
          </div>
        </Modal>
  )
}

export default Popup