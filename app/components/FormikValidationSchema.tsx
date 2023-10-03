import * as Yup from "yup";

export const formikValidationSchema = Yup.object({
  first_name: Yup.string()
    .max(20, "Must be less than 20 characters")
    .required("First name is required"),
  sur_name: Yup.string()
    .max(20, "Must be less than 20 characters")
    .required("Sur name is required"),
  last_name: Yup.string()
    .max(20, "Must be less than 20 characters")
    .required("Last name is required"),
  date_of_birth: Yup.date()
    .max(new Date(), "Date of Birth must be in the past")
    .required("Date of Birth is required"),
  phone: Yup.string()
    .matches(
      /^\+\d{1,3}\s?\d{9,15}$/,
      "Invalid phone number format(Ex: +123 456789012)"
    )
    .required("Phone is required"),
  ID_number: Yup.string()
    .matches(/^[a-zA-Z\d]{6,20}$/, "Invalid ID Number format")
    .required("ID Number is required"),


  bank_name: Yup.string()
    .min(2, "Bank Name is too short")
    .max(50, "Bank Name is too long")
    .required("Bank Name is required"),
  branch_name: Yup.string()
    .min(2, "Branch Name is too short")
    .max(50, "Branch Name is too long")
    .required("Branch Name is required"),
  account_No: Yup.string()
    .matches(/^\d{6,20}$/, "Invalid Account No. format")
    .required("Account No. is required"),
  swift_code: Yup.string()
    .matches(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/, "Invalid Swift Code format")
    .required("Swift Code is required"),


  applicants_resident: Yup.string()
    .required("Applicant's resident is required"),
  applicants_occupation: Yup.string()
    .required("Applicant's occupation is required"),
  applicants_fund: Yup.string()
    .required("Applicant's fund is required"),

});

export const formikValidationSchema2 = Yup.object({
  corporate_name: Yup.string()
    .max(50, "Must be less than 50 characters")
    .required("Corporate Name is required"),
  registration_number: Yup.string()
    .max(20, "Must be less than 20 characters")
    .required("Registration number is required"),
  address_line_1: Yup.string()
    .max(50, "Must be less than 50 characters")
    .required("Address Line 1 is required"),
  address_line_2: Yup.string()
    .max(50, "Must be less than 50 characters")
    .required("Address Line 2 is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required("Email is required"),


  bank_name: Yup.string()
    .min(2, "Bank Name is too short")
    .max(50, "Bank Name is too long")
    .required("Bank Name is required"),
  branch_name: Yup.string()
    .min(2, "Branch Name is too short")
    .max(50, "Branch Name is too long")
    .required("Branch Name is required"),
  account_No: Yup.string()
    .matches(/^\d{6,20}$/, "Invalid Account No. format")
    .required("Account No. is required"),
  swift_code: Yup.string()
    .matches(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/, "Invalid Swift Code format")
    .required("Swift Code is required"),


  company_type: Yup.string()
    .required("Company type is required"),

});

export const formikRegistrationValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required("Your email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Your password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
})

