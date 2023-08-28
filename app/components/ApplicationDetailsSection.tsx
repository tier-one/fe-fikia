import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ApplicantsFund from "./ApplicantsFund";
import ApplicantsOccupation from "./ApplicantsOccupation";
import ApplicantsResident from "./ApplicantsResident";
import Button from "./Button";
import InputField from "./InputField";
import { useFormik } from "formik";
import {formikValidationSchema} from "./FormikValidationSchema";

const inputFieldStylingProps = {
  container: {
    className: "flex flex-col space w-full",
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

const ApplicationDetailsSection = ({
  handleContinue,
  handleBack,
  handleLastBack,
  visible,
}: Props) => {

  const formik = useFormik({
    initialValues: {
      first_name: "",
      sur_name: "",
      last_name: "",
      date_of_birth: "",
      phone: "",
      ID_number: "",

      bank_name: "",
      branch_name: "",
      account_No: "",
      swift_code: "",

      applicants_resident: "",
      applicants_occupation: "",
      applicants_fund: "",
    },

    validationSchema: formikValidationSchema,

    onSubmit: (values) => {
      handleContinue();
      console.log(values);
      
    },
  });

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center px-[50px] pt-[105px] lg:pr-[98px] pb-[140px] lg:pl-[106px] flex-1 self-stretch bg-[#FFF]">
      <div className="flex flex-col items-start gap-[48px] pb-0 w-full">
        <div className="flex flex-col items-start gap-[24px] w-full">
          <div className="flex flex-col items-start gap-[32px] w-full">
            <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
              Applicant Details
            </h1>
            <div className="flex w-full flex-col items-center gap-[24px]">
              <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.first_name}
                    placeholder="Enter your First Name here"
                    required={false}
                    type="text"
                    name="first_name"
                    className="text-xs"
                    label="First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.first_name}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.sur_name}
                    placeholder="Enter your SurName here"
                    required={false}
                    type="text"
                    name="sur_name"
                    className="text-xs"
                    label="SurName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.sur_name && formik.errors.sur_name ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.sur_name}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.last_name}
                    placeholder="Enter your Last Name here"
                    required={false}
                    type="text"
                    name="last_name"
                    className="text-xs"
                    label="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.last_name}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.date_of_birth}
                    placeholder="Enter your Date of Birth here"
                    required={false}
                    type="date"
                    name="date_of_birth"
                    className="text-xs"
                    label="Date of Birth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.date_of_birth &&
                  formik.errors.date_of_birth ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.date_of_birth}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.phone}
                    placeholder="Enter your Phone here"
                    required={false}
                    type="text"
                    name="phone"
                    className="text-xs"
                    label="Phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.phone}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.ID_number}
                    placeholder="Enter your ID Number here"
                    required={false}
                    type="text"
                    name="ID_number"
                    className="text-xs"
                    label="ID Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.ID_number && formik.errors.ID_number ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.ID_number}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[7px]">
            <Image
              src="/add_circle_outline.svg"
              width={24}
              height={24}
              alt="add"
            />
            <h1 className="text-[#002674] text-[15px] font-[500] leading-[28px]">
              Add another applicant
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-[1px] bg-[#E1E7EF]"></div>
        </div>

        <ApplicantsResident formik={formik}/>

        <div className="w-full">
          <div className="w-full h-[1px] bg-[#E1E7EF]"></div>
        </div>

        <ApplicantsOccupation formik={formik}/>

        <div className="w-full">
          <div className="w-full h-[1px] bg-[#E1E7EF]"></div>
        </div>

        <ApplicantsFund formik={formik}/>

        <div className="w-full">
          <div className="w-full h-[1px] bg-[#E1E7EF]"></div>
        </div>

        <div className="flex flex-col items-start gap-[32px] w-full">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Bank Details
          </h1>
          <div className="flex w-full flex-col items-center gap-[24px]">
            <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.bank_name}
                  placeholder="Enter your Bank Name here"
                  required={false}
                  type="text"
                  name="bank_name"
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
                  placeholder="Enter your Branch Name here"
                  required={false}
                  type="text"
                  name="branch_name"
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
                  placeholder="Enter your Account No. here"
                  required={false}
                  type="text"
                  name="account_No"
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
                  placeholder="Enter your Swift Code here"
                  required={false}
                  type="text"
                  name="swift_code"
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

        <div className="flex flex-wrap gap-[5px] justify-between items-start self-stretch">
          <Button
            onClick={handleLastBack}
            styling="rounded-lg cursor-pointer text-sm bg-slate-100 font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center"
            value="Back"
            isDisabled={true}
          />

          <div className="flex flex-wrap items-start gap-[16px]">
            <Button
              styling="rounded-lg cursor-pointer text-sm bg-slate-100 font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center"
              value="Cancel"
            />
            <Button
              onClick={formik.handleSubmit}
              styling="rounded-lg cursor-pointer text-sm bg-[#002674] font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center text-white"
              value="Continue"
              isDisabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsSection;
