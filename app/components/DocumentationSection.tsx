"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import SmartCamera from "./SmartCamera";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {
  handleContinue: () => void;
  handleBack: () => void;
  visible: boolean;
};

const DocumentationSection = ({ handleContinue, handleBack, visible }: Props) => {
  const [kycError, setKycError] = useState('');
  const [kycSuccess, setKycSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {data: session} = useSession();
  const router = useRouter();

  const userId = session?.user?.id;
  
  const handleCancel = () => {
    router.push('/profile')
  }

  const formik = useFormik({
    initialValues: {
      governmentIdImage: "",
    },

    validationSchema: Yup.object({
      governmentIdImage: Yup.string()
          .required("Your ID copy is required"),
    }),

    onSubmit: (values) => {
      if (!isLoading && !kycError && kycSuccess) {
        const storedData = localStorage.getItem('profileDetails');

        if (storedData) {
          let detailsArray = JSON.parse(storedData);

          detailsArray = {...detailsArray, ...values}

          localStorage.setItem('profileDetails', JSON.stringify(detailsArray));
        }

        handleContinue();
      } else if(isLoading) {
        setKycError('Wait for the verification');

        setTimeout(() => {
          setKycError('')
        }, 2000);
      } else {
        setKycError('verify first');

        setTimeout(() => {
          setKycError('')
        }, 5000);
      }
    },
  });

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      return alert("Please upload an image file");
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      formik.handleChange("governmentIdImage")(result);
    };
  };
  
  if (!visible) return null;

  return (
    <div className="flex flex-col items-center pt-[105px] px-[50px] lg:pr-[98px] pb-[140px] lg:pl-[106px] flex-1 self-stretch bg-[#FFF]">
      <div className="flex flex-col items-start gap-[48px] w-full">
        <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
          Documents
        </h1>

        <p className="text-[#4D5E80] text-[15px] font-[400] leading-[28px]">
          Upload your ID or passport copy for verification
        </p>

        <div className="flex flex-col gap-[8px] items-start justify-start w-full lg:min-h-[347px] min-h-[200px] relative">
          <h1 className="text-[#64748A] text-[15px] font-[500] leading-[28px]">
            ID Copy
          </h1>

          <label
            htmlFor="file"
            className="flex justify-center items-center z-10 text-center w-full lg:min-h-[275px] min-h-[200px] p-20 text-[#64748A] border-2 border-[#CAD4E0] border-dashed"
          >
            {!formik.values.governmentIdImage &&( 
            <span className="flex flex-col justify-center items-center gap-[5px]">
                <Image 
                    src='/file_upload.svg'
                    width={24}
                    height={24}
                    alt='file_upload'
                />
                <p className="text-[#64748A] text-[14px] font-[400] leading-[28px]">Drag & Drop or Choose a <span className="text-[#002674]">file</span> to upload</p>
            </span>)}
          </label>
          {formik.touched.governmentIdImage && formik.errors.governmentIdImage ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.governmentIdImage}
            </p>
          ) : null}
          <input
            id="governmentIdImage"
            type="file"
            name="governmentIdImage"
            accept="image/*"
            required={true}
            className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
            onChange={handleChangeImage}
            onBlur={formik.handleBlur}
          />
          {formik.values.governmentIdImage && (
            <Image
              src={formik.values.governmentIdImage }
              className="sm:p-10 object-contain z-20 h-full"
              alt="document"
              fill
            />
          )}
        </div>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="w-full flex flex-col gap-[20px] justify-center items-center">
          <SmartCamera setKycError={setKycError} setKycSuccess={setKycSuccess} setIsLoading={setIsLoading}/>
          {isLoading && <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-black"></div>}
          {kycSuccess && <div className="flex text-[30px] font-[700] text-green-500">{kycSuccess}</div>}
          {kycError && <div className="flex text-[30px] font-[700] text-red-400">{kycError}</div>}
        </div>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="flex flex-wrap gap-[5px] justify-between items-start self-stretch">
          <Button
            onClick={handleBack}
            styling="rounded-lg cursor-pointer bg-slate-100 text-sm font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center"
            value="Back"
            isDisabled={true}
          />

          <div className="flex flex-wrap items-start gap-[16px]">
            <Button
              onClick={handleCancel}
              isDisabled={true}
              styling="rounded-lg cursor-pointer bg-slate-100 text-sm font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center"
              value="Cancel"
            />
            <Button
              onClick={formik.handleSubmit}
              styling="rounded-lg cursor-pointer bg-[#002674] text-sm font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center text-white"
              value="Continue"
              isDisabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationSection;
