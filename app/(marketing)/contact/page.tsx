// import Image from 'next/image'
'use client'
import { useState } from "react"
import Image from "next/image";
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/ContactBtn"
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import InputField from "@/app/components/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col mb-4'
  },
  input: {
    className: 'border border-gray-500 rounded-lg p-4'
  },
  inputlabel: {
    className: 'mb-2'
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Your name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
      message: Yup.string()
        .required('Your message is required')
    }),

    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  return (
    <main className='bg-[#EDEFF3] min-h-screen text-[#475569] pt-16 '>
      <section className="lg:flex lg:mx-32 xl:mx-48 mt-16" >
        <section className="lg:w-1/2 mx-6  mb-16">
        
            <h1 className="text-2xl font-semibold xl:text-4xl">Get in touch with us</h1>
            <p className="py-3 ">You can reach us anytime via contact@fikia.io </p>
            <form className="w-full">
              <InputField
                value={formik.values.name}
                placeholder='Your name'
                required={true}
                type='text'
                name="name"
                className='text-xs'
                label='Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              <InputField
                value={formik.values.email}
                placeholder='Your email'
                required={true}
                type='email'
                name="email"
                className='text-xs'
                label='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              <TextArea
                value={message}
                placeholder='Your message'
                required={true}
                className='text-xs'
                label='Message'
                onChange={setMessage}
                {...inputFieldStylingProps}
              />
              <div>
                <Button text="Get in touch" />
              </div>
            </form>
        </section>

        <section className="w-full flex items-end lg:w-1/2   bg-cover bg-center rounded-xl mb-16 " style={{ backgroundImage: "url('/contact.svg')", height: '465px', }}>
          <div className="border border-white flex flex-col justify-center rounded-xl mx-8 p-4 mb-4 " style={{ background: 'linear-gradient(96.39deg, rgba(17, 17, 17, 0.1) -11.67%, rgba(17, 17, 17, 0) 103.28%)', backdropFilter: 'blur(12px)' }}>
            <p className="text-1xl font-semibold text-white">
              “Fikia has saved us thousands of hours of work. We are able to spin up investment profile faster.”
            </p>
            <p className="text-1xl font-semibold text-white mt-5">Frankie Sylvester</p>
            <div className="flex justify-between">
              <p className="text-white mt-2">Product Manager, BK Tech</p>
              <div className="flex justify-between">
                <Image src='/back-arrow.svg' width={30} height={10} alt='Charger' className="mr-4 cursor-pointer" />
                <Image src='/forward-arrow.svg' width={30} height={10} alt='Charger' className="cursor-pointer" />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className='mt-3   flex-col  lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
        <Faq />
        <Footer />
      </section>
    </main >
  )
}
