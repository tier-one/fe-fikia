import { FormikProps } from 'formik';
import React, { ChangeEvent, useState } from 'react'
import RadioInput from './RadioInput';

type Props = {
  formik: FormikProps<{
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    governmentId: string;

    name: string;
    branchName: string;
    accountNumber: string;
    swiftCode: string;

    residence: string;
    occupation: string;
    sourceOfFunds: string;
  }>;
}

const ApplicantsFund = ({ formik }: Props) => {

  return (
    <div className="flex flex-col items-start gap-[32px] self-stretch">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Applicant’s source of funds
          </h1>

          <div className="flex flex-col text-sm items-start gap-[24px]">
            <RadioInput
              id="Saving"
              value="Saving"
              name="sourceOfFunds"
              label="Saving"
              checked={formik.values.sourceOfFunds === "Saving"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Salary"
              value="Salary"
              name="sourceOfFunds"
              label="Salary"
              checked={formik.values.sourceOfFunds === "Salary"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Inheritance"
              value="Inheritance"
              name="sourceOfFunds"
              label="Inheritance"
              checked={formik.values.sourceOfFunds === "Inheritance"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Bonus"
              value="Bonus"
              name="sourceOfFunds"
              label="Bonus"
              checked={formik.values.sourceOfFunds === "Bonus"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="others"
              value="others"
              name="sourceOfFunds"
              label="others"
              checked={formik.values.sourceOfFunds === "others"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.sourceOfFunds && formik.errors.sourceOfFunds ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.sourceOfFunds}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsFund