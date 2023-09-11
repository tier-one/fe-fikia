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

const CorporateDeclarationSection = ({
  handleContinue,
  handleBack,
  visible,
}: Props) => {
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
      image: "",
    },

    validationSchema: Yup.object({
      image: Yup.string()
        .required("First applicant Signature is required"),
    }),

    onSubmit: (values) => {
      openSuccessfulModal();
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

      formik.handleChange("image")(result);
    };
  };


  if (!visible) return null;

  return (
    <div className="flex flex-col items-center px-[50px] pt-[105px] lg:pr-[98px] pb-[140px] lg:pl-[106px] flex-1 self-stretch bg-[#FFF]">
      <div className="flex flex-col items-start gap-[48px] w-full">
        <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
          Declaration and signature of applicant(s)
        </h1>

        <p className="text-[#4D5E80] text-[15px] font-[400] leading-[28px]">
          I/We have read and understood the contents of the offer document of
          AGUKA Unit Trust Fund, and the instructions attached herewith as
          issued to date. I/We agree to abide by the terms and conditions, rules
          and regulations of the scheme on the date of investment.
        </p>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="flex flex-col gap-[8px] items-start justify-start w-full lg:min-h-[347px] min-h-[200px] relative">
          <h1 className="text-[#64748A] text-[15px] font-[500] leading-[28px]">
            First applicant Signature
          </h1>

          <label
            htmlFor="file"
            className="flex justify-center items-center z-10 text-center w-full lg:min-h-[275px] min-h-[200px] p-20 text-[#64748A] border-2 border-[#CAD4E0] border-dashed"
          >
            {!formik.values.image && (
              <span className="flex flex-col justify-center items-center gap-[5px]">
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
          {formik.touched.image && formik.errors.image ? (
              <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {formik.errors.image}
              </p>
          ) : null}
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            required={true}
            className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
            onChange={handleChangeImage}
            onBlur={formik.handleBlur}
          />
          {formik.values.image && (
            <Image
              src={formik.values.image}
              className="sm:p-10 object-contain z-20 h-full"
              alt="Project poster"
              fill
            />
          )}
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

export default CorporateDeclarationSection;
