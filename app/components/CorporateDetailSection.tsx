import React, { useState } from "react";
import Button from "./Button";
import CompanyType from "./CompanyType";
import InputField from "./InputField";
import { useFormik } from "formik";
import { formikValidationSchema2 } from "./FormikValidationSchema";
import { useRouter } from "next/navigation";

const inputFieldStylingProps = {
  container: {
    className: "flex flex-col space w-full ",
  },
  inputlabel: {
    className: "text-base text-gray-600 font-light",
  },
  input: {
    className:
      "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
  },
};

type Props = {
  handleContinue: () => void;
  handleBack: () => void;
  handleLastBack: () => void;
  visible: boolean;
};

const CorporateDetailSection = ({
  handleContinue,
  handleBack,
  handleLastBack,
  visible,
}: Props) => {
  const router = useRouter();
  
  const handleCancel = () => {
    router.push('/profile')
  }

  const formik = useFormik({
    initialValues: {
      corporate_name: "",
      registration_number: "",
      address_line_1: "",
      address_line_2: "",
      email: "",

      bank_name: "",
      branch_name: "",
      account_No: "",
      swift_code: "",

      company_type: "",
    },

    validationSchema: formikValidationSchema2,

    onSubmit: (values) => {
      handleContinue();
    },
  });

  if (!visible) return null;

  return (
    <div className="flex px-[50px] pt-[105px] lg:pr-[98px] pb-[140px] lg:pl-[106px] justify-end items-center flex-1 self-stretch bg-[#FFF]">
      <div className="flex pb-[0px] flex-col items-start gap-[48px] w-full">
        <div className="flex flex-col items-start gap-[32px] w-full">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Corporate details
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
              <InputField
                value={formik.values.corporate_name}
                name="corporate_name"
                placeholder="Enter your Corporate Name here"
                required={false}
                type="text"
                className="text-xs"
                label="Corporate Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.corporate_name && formik.errors.corporate_name ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.corporate_name}
                  </p>
              ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
              <InputField
                value={formik.values.registration_number}
                name="registration_number"
                placeholder="Enter your Registration number here"
                required={false}
                type="text"
                className="text-xs"
                label="Registration number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.registration_number && formik.errors.registration_number ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.registration_number}
                  </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="flex flex-col items-start gap-[32px] w-full">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Company address
          </h1>

          <div className="flex flex-col items-center gap-[24px] w-full">
            <div className="flex flex-col lg:flex-row items-start gap-[24px] self-stretch">
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.address_line_1}
                  name="address_line_1"
                  placeholder="Enter your Address Line 1 here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Address Line 1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.address_line_1 && formik.errors.address_line_1 ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.address_line_1}
                  </p>
                ) : null}
              </div>

              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.address_line_2}
                  name="address_line_2"
                  placeholder="Enter your Address Line 2 here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Address Line 2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.address_line_2 && formik.errors.address_line_2 ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.address_line_2}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
              <InputField
                value={formik.values.email}
                name="email"
                placeholder="Enter your Email here"
                required={false}
                type="text"
                className="text-xs"
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.email && formik.errors.email ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.email}
                  </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <CompanyType formik={formik}/>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="flex flex-col items-start gap-[32px] w-full">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Bank Details
          </h1>

          <div className="flex flex-col items-center gap-[24px] w-full">
            <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.bank_name}
                  name="bank_name"
                  placeholder="Enter your Bank Name here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Bank Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.bank_name && formik.errors.bank_name ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.bank_name}
                  </p>
                ) : null}
              </div>

              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.branch_name}
                  name="branch_name"
                  placeholder="Enter your Branch Name here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Branch Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.branch_name && formik.errors.branch_name ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.branch_name}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.account_No}
                  name="account_No"
                  placeholder="Enter your Account No here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Account No."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.account_No && formik.errors.account_No ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.account_No}
                  </p>
                ) : null}
              </div>

              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.swift_code}
                  name="swift_code"
                  placeholder="Enter your Swift Code here"
                  required={false}
                  type="text"
                  className="text-xs"
                  label="Swift Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.swift_code && formik.errors.swift_code ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.swift_code}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E1E7EF]"></div>

        <div className="flex gap-[5px] flex-wrap justify-between items-start self-stretch">
          <Button
            onClick={handleLastBack}
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

export default CorporateDetailSection;
