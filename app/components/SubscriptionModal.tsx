import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import Modal from './Modal';
import dollarIcon from '../../public/dollar icon.jpg'
import NewButton from './NewButton';
import addSubscription from '@/lib/actions/subscription/addSubscription';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

type Props = {
    title?: string;
    isBuyShares?: boolean;
    isPopupOpen: boolean;
    handleClose: () => void;
}

const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col space w-full py-2'
    },
    inputlabel: {
      className: 'text-[18px] text-gray-600 font-[500]'
    },
    input: {
      className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-300'
    },
}

const SubscriptionModal = ({ title, isPopupOpen, handleClose }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const {data: session} = useSession();
    const fundId = useParams().id;
    const token = session?.user?.token;

    const formik = useFormik({
        initialValues: {
            amountInvested: ""
        },
  
        validationSchema: Yup.object({
            amountInvested: Yup.string()
                .required("Amount is required"),
        }),
  
        onSubmit: async (values) => {
          setIsLoading(true)

          await addSubscription(values, token, fundId)

          setIsLoading(false)

          handleClose()
        }
      });

  return (
    <Modal isOpen={isPopupOpen} onClose={handleClose} >
        <div className='bg-[#FFF] rounded-[16px] p-[24px] flex flex-col items-start gap-[32px]'>
            <p className="text-[#475569] text-[18px] font-[600]">{title}</p>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.amountInvested}
                    placeholder='Amount'
                    required={true}
                    type='number'
                    dollarIcon={dollarIcon}
                    name="amountInvested"
                    className='text-xs'
                    label='Amount'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.amountInvested && formik.errors.amountInvested ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {formik.errors.amountInvested}
                    </p>
                ) : null}
            </div>

            <div className="flex justify-end gap-4">
              <div>
                <Button 
                    styling='bg-[#F0F4F8] text-[#475569] py-2 px-4 mt-2 rounded-lg'
                    value='Cancel'
                />
              </div>
              <div>
                <Button 
                    styling='bg-[#031F57] text-white py-2 px-4 mt-2 rounded-lg'
                    value='Subscribe'
                    isDisabled={true}
                    onClick={formik.handleSubmit}
                    isLoading={isLoading}
                />
              </div>
            </div>
        </div>
    </Modal>
  )
}

export default SubscriptionModal