import { FormikProps } from "formik";
import React, { ChangeEvent, useState } from "react";
import RadioInput from "./RadioInput";

type Props = {
  formik: FormikProps<{
    corporate_name: string;
    registration_number: string;
    address_line_1: string;
    address_line_2: string;
    email: string;

    bank_name: string;
    branch_name: string;
    account_No: string;
    swift_code: string;

    company_type: string;
  }>;
}

const CompanyType = ({ formik }: Props) => {

  return (
    <div className="flex flex-col items-start gap-[32px] self-stretch">
      <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
        Company type
      </h1>

      <div className="flex text-sm flex-col items-start gap-[24px]">
        <RadioInput
          id="Pension funds"
          value="Pension funds"
          name="company_type"
          label="Pension funds"
          checked={formik.values.company_type === "Pension funds"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          id="Insurer"
          value="Insurer"
          name="company_type"
          label="Insurer"
          checked={formik.values.company_type === "Insurer"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          id="Cooperative"
          value="Cooperative"
          name="company_type"
          label="Cooperative"
          checked={formik.values.company_type === "Cooperative"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <RadioInput
          id="Other"
          value="Other"
          name="company_type"
          label="Other"
          checked={formik.values.company_type === "Other"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.company_type && formik.errors.company_type ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.company_type}
          </p>
      ) : null}
    </div>
  );
};

export default CompanyType;
