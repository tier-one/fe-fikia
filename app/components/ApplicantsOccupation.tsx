import { FormikProps } from 'formik';
import React, { ChangeEvent, useState } from 'react'
import RadioInput from './RadioInput'

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
              name="occupation"
              label="Agriculture"
              checked={formik.values.occupation === "Agriculture"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Employed"
              value="Employed"
              name="occupation"
              label="Employed"
              checked={formik.values.occupation === "Employed"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Business"
              value="Business"
              name="occupation"
              label="Business"
              checked={formik.values.occupation === "Business"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Professional"
              value="Professional"
              name="occupation"
              label="Professional"
              checked={formik.values.occupation === "Professional"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Student"
              value="Student"
              name="occupation"
              label="Student"
              checked={formik.values.occupation === "Student"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Other"
              value="Other"
              name="occupation"
              label="Other"
              checked={formik.values.occupation === "Other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.occupation && formik.errors.occupation ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.occupation}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsOccupation