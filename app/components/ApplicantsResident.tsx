import { FormikProps } from 'formik';
import React, { ChangeEvent, useState } from 'react'
import RadioInput from './RadioInput'

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


const ApplicantsResident = ({ formik }: Props) => {

  return (
    <div className="flex flex-col items-start gap-[32px] self-stretch">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Applicant’s residence
          </h1>

          <div className="flex flex-col text-sm items-start gap-[24px]">
            <RadioInput
              id="Rwanda"
              value="Rwanda"
              name="applicants_resident"
              label="Rwanda"
              checked={formik.values.applicants_resident === "Rwanda"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Diaspora"
              value="Diaspora"
              name="applicants_resident"
              label="Diaspora"
              checked={formik.values.applicants_resident === "Diaspora"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="EAC"
              value="EAC"
              name="applicants_resident"
              label="EAC"
              checked={formik.values.applicants_resident === "EAC"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Others"
              value="Others"
              name="applicants_resident"
              label="Others"
              checked={formik.values.applicants_resident === "Others"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.applicants_resident && formik.errors.applicants_resident ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.applicants_resident}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsResident