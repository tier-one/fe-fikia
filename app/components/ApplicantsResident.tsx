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
              name="residence"
              label="Rwanda"
              checked={formik.values.residence === "Rwanda"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Diaspora"
              value="Diaspora"
              name="residence"
              label="Diaspora"
              checked={formik.values.residence === "Diaspora"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="EAC"
              value="EAC"
              name="residence"
              label="EAC"
              checked={formik.values.residence === "EAC"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RadioInput
              id="Others"
              value="Others"
              name="residence"
              label="Others"
              checked={formik.values.residence === "Others"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.residence && formik.errors.residence ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
              {formik.errors.residence}
            </p>
          ) : null}
    </div>
  )
}

export default ApplicantsResident