'use client';

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Button from "./Button";
import SuccessfulModel from "./SuccessfulModel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type Props = {
  handleContinue: () => void;
  handleBack: () => void;
  visible: boolean;
};

const DeclarationSection = ({ handleContinue, handleBack, visible }: Props) => {
  const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState(false);
  const router = useRouter();
  const handleCancel = () => {
    router.push('/profile')
  }

  const openSuccessfulModal = () => {
    setIsSuccessfulModalOpen(true)
  };
  const closeSuccessfulModal = () => {
    setIsSuccessfulModalOpen(false)
  };

  const formik = useFormik({
    initialValues: {
      image1: "",
      image2: "",
    },

    validationSchema: Yup.object({
      image1: Yup.string()
          .required("First applicant Signature is required"),
      image2: Yup.string()
          .required("Next of kin is required"),
    }),

    onSubmit: (values) => {
      openSuccessfulModal();
    },
  });

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
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

      formik.handleChange(fieldName)(result);
    };
  };

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center px-[50px] pt-[105px] lg:pr-[98px] pb-[140px] lg:pl-[106px] flex-1 self-stretch bg-[#FFF]">
      <div className="flex flex-col items-start gap-[48px]">
        <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
          Declaration and signature of applicant(s)
        </h1>

        <p className="text-[#4D5E80] text-[15px] font-[400] leading-[28px]">
          I/We have read and understood the contents of the offer document of
          AGUKA Unit Trust Fund, and the instructions attached herewith as
          issued to date. I/We agree to abide by the terms and conditions, rules
          and regulations of the scheme on the date of investment.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-[24px] self-stretch">
          <div className="flex flex-col items-start gap-[8px] flex-1 relative">
            <h1 className="text-[#64748A] text-[15px] font-[500] leading-[28px]">
              First applicant Signature
            </h1>

            <label
              htmlFor="file"
              className="flex justify-center items-center z-10 text-center w-full lg:min-h-[230px] min-h-[200px] p-10 text-[#64748A] border-2 border-[#CAD4E0] border-dashed"
            >
              {!formik.values.image1 && (
                <span className="flex flex-col justify-center items-center gap-[5px] w-full">
                  <Image
                    src="/file_upload.svg"
                    width={24}
                    height={24}
                    alt="file_upload"
                  />
                  <p className="text-[#64748A] text-[14px] font-[400] leading-[28px]">Drag & Drop or Choose a <span className="text-[#002674]">signature</span> to upload</p>
                </span>
              )}
            </label>
            {formik.touched.image1 && formik.errors.image1 ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {formik.errors.image1}
              </p>
            ) : null}
            <input
              id="image1"
              type="file"
              name="image1"
              accept="image/*"
              required={true}
              className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
              onChange={(e) => handleChangeImage(e, "image1")}
              onBlur={formik.handleBlur}
            />
            {formik.values.image1 && (
              <Image
                src={formik.values.image1}
                className="sm:p-10 object-contain z-20 absolute top-[6px]"
                alt="file"
                width={400}
                height={400}
              />
            )}
          </div>

          <div className="flex flex-col items-start gap-[8px] flex-1 relative">
            <h1 className="text-[#64748A] text-[15px] font-[500] leading-[28px]">
              Next of Kin
            </h1>

            <label
              htmlFor="file"
              className="flex justify-center items-center z-10 text-center w-full lg:min-h-[230px] min-h-[200px] p-10 text-[#64748A] border-2 border-[#CAD4E0] border-dashed"
            >
              {!formik.values.image2 && (
                <span className="flex flex-col justify-center items-center gap-[5px] w-full">
                  <Image
                    src="/file_upload.svg"
                    width={24}
                    height={24}
                    alt="file_upload"
                  />
                  <p className="text-[#64748A] text-[14px] font-[400] leading-[28px]">Drag & Drop or Choose a <span className="text-[#002674]">signature</span> to upload</p>
                </span>
              )}
            </label>
            {formik.touched.image2 && formik.errors.image2 ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {formik.errors.image2}
              </p>
            ) : null}
            <input
              id="image2"
              type="file"
              name="image2"
              accept="image/*"
              required={true}
              className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
              onChange={(e) => handleChangeImage(e, "image2")}
              onBlur={formik.handleBlur}
            />
            {formik.values.image2 && (
              <Image
                src={formik.values.image2}
                className="sm:p-10 object-contain z-20 absolute top-[6px]"
                alt="file"
                width={400}
                height={400}
              />
            )}
          </div>
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
              value="Finish"
              isDisabled={true}
            />
          </div>
        </div>
      </div>

      <SuccessfulModel 
          title= 'Successfully registered'
          paragraph='You have successfully registered a new user'
          buttonValue='Back home'
          isPopupOpen={isSuccessfulModalOpen}
          handleClose={closeSuccessfulModal}
       />
    </div>
  );
};

export default DeclarationSection;
