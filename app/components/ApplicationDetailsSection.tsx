import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ApplicantsFund from "./ApplicantsFund";
import ApplicantsOccupation from "./ApplicantsOccupation";
import ApplicantsResident from "./ApplicantsResident";
import Button from "./Button";
import InputField from "./InputField";
import { useFormik } from "formik";
import {formikValidationSchema} from "./FormikValidationSchema";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  
  const handleCancel = () => {
    router.push('/profile')
  }

  // let detailsArray: { firstName: string; middleName: string; lastName: string; dateOfBirth: string; phoneNumber: string; governmentId: string; name: string; branchName: string; accountNumber: string; swiftCode: string; residence: string; occupation: string; sourceOfFunds: string; }[] = [];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      governmentId: "",

      name: "",
      branchName: "",
      accountNumber: "",
      swiftCode: "",

      residence: "",
      occupation: "",
      sourceOfFunds: "",
    },

    validationSchema: formikValidationSchema,

    onSubmit: (values) => {
      handleContinue();

      // detailsArray.push(values)
      
      localStorage.setItem('profileDetails', JSON.stringify(values));
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
                    value={formik.values.firstName}
                    placeholder="Enter your First Name here"
                    required={false}
                    type="text"
                    name="firstName"
                    className="text-xs"
                    label="First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.middleName}
                    placeholder="Enter your SurName here"
                    required={false}
                    type="text"
                    name="middleName"
                    className="text-xs"
                    label="SurName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.middleName && formik.errors.middleName ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.middleName}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.lastName}
                    placeholder="Enter your Last Name here"
                    required={false}
                    type="text"
                    name="lastName"
                    className="text-xs"
                    label="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.dateOfBirth}
                    placeholder="Enter your Date of Birth here"
                    required={false}
                    type="date"
                    name="dateOfBirth"
                    className="text-xs"
                    label="Date of Birth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.dateOfBirth &&
                  formik.errors.dateOfBirth ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.dateOfBirth}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.phoneNumber}
                    placeholder="Enter your phoneNumber here"
                    required={false}
                    type="text"
                    name="phoneNumber"
                    className="text-xs"
                    label="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.phoneNumber}
                    </p>
                  ) : null}
                </div>
                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                  <InputField
                    value={formik.values.governmentId}
                    placeholder="Enter your ID Number here"
                    required={false}
                    type="text"
                    name="governmentId"
                    className="text-xs"
                    label="ID Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                  {formik.touched.governmentId && formik.errors.governmentId ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                      {formik.errors.governmentId}
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
                  value={formik.values.name}
                  placeholder="Enter your Bank Name here"
                  required={false}
                  type="text"
                  name="name"
                  className="text-xs"
                  label="Bank Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.branchName}
                  placeholder="Enter your Branch Name here"
                  required={false}
                  type="text"
                  name="branchName"
                  className="text-xs"
                  label="Branch Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.branchName && formik.errors.branchName ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.branchName}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-[24px] self-stretch">
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.accountNumber}
                  placeholder="Enter your Account No. here"
                  required={false}
                  type="text"
                  name="accountNumber"
                  className="text-xs"
                  label="Account No."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.accountNumber && formik.errors.accountNumber ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.accountNumber}
                  </p>
                ) : null}
              </div>
              <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                  value={formik.values.swiftCode}
                  placeholder="Enter your Swift Code here"
                  required={false}
                  type="text"
                  name="swiftCode"
                  className="text-xs"
                  label="Swift Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputFieldStylingProps}
                />
                {formik.touched.swiftCode && formik.errors.swiftCode ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.swiftCode}
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
              onClick={handleCancel}
              isDisabled={true}
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
