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

const ApplicantsOccupation = ({ formik }: Props) => {

  return (
    <div className="flex flex-col items-start gap-[32px] self-stretch">
          <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
            Applicant’s occupation
          </h1>

          <div className="flex flex-col text-sm items-start gap-[24px]">
            <RadioInput
              id="Agriculture"
              value="Agriculture"
              name="applicants_occupation"
              label="Agriculture"
              checked={formik.values.applicants_occupation === "Agriculture"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Employed"
              value="Employed"
              name="applicants_occupation"
              label="Employed"
              checked={formik.values.applicants_occupation === "Employed"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Business"
              value="Business"
              name="applicants_occupation"
              label="Business"
              checked={formik.values.applicants_occupation === "Business"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Professional"
              value="Professional"
              name="applicants_occupation"
              label="Professional"
              checked={formik.values.applicants_occupation === "Professional"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Student"
              value="Student"
              name="applicants_occupation"
              label="Student"
              checked={formik.values.applicants_occupation === "Student"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Other"
              value="Other"
              name="applicants_occupation"
              label="Other"
              checked={formik.values.applicants_occupation === "Other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.applicants_occupation && formik.errors.applicants_occupation ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.applicants_occupation}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsOccupation