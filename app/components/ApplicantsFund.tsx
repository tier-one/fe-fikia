import { FormikProps } from 'formik';
import React, { ChangeEvent, useState } from 'react'
import RadioInput from './RadioInput';

type Props = {
  formik: FormikProps<{
    first_name: string;
    sur_name: string;
    last_name: string;
    date_of_birth: string;
    phone: string;
    ID_number: string;

    bank_name: string;
    branch_name: string;
    account_No: string;
    swift_code: string;

    applicants_resident: string;
    applicants_occupation: string;
    applicants_fund: string;
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
              name="applicants_fund"
              label="Saving"
              checked={formik.values.applicants_fund === "Saving"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Salary"
              value="Salary"
              name="applicants_fund"
              label="Salary"
              checked={formik.values.applicants_fund === "Salary"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Inheritance"
              value="Inheritance"
              name="applicants_fund"
              label="Inheritance"
              checked={formik.values.applicants_fund === "Inheritance"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Bonus"
              value="Bonus"
              name="applicants_fund"
              label="Bonus"
              checked={formik.values.applicants_fund === "Bonus"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="others"
              value="others"
              name="applicants_fund"
              label="others"
              checked={formik.values.applicants_fund === "others"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.applicants_fund && formik.errors.applicants_fund ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.applicants_fund}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsFund