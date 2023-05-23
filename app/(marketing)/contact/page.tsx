// import Image from 'next/image'
'use client'
import { useState } from "react"
import Image from "next/image";
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/ContactBtn"
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import InputField from "@/app/components/InputField";
const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col mb-4'
  },
  input: {
    className: 'border border-gray-500 rounded-lg p-4'
  },
  inputlabel: {
    className:'text-gray-500 mb-2'
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <main className='pt-16'>
      <section className='lg:flex justify-center mb-16' >
        <div className='lg:w-1/2 mt-16'>
          <h1 className='px-6 text-2xl font-semibold xl:text-4xl text-blue-900'>Get in touch with us</h1>
          <p className='py-3 px-6  '>You can reach us anytime via Fikia@support.com</p>
          <form className="w-full px-6">

            <InputField
              value={name}
              placeholder='Your name'
              required={true}
              type='text'
              className='text-xs'
              label='Name'
              onChange={setName}
              {...inputFieldStylingProps}
            />
            <InputField
              value={email}
              placeholder='Your email'
              required={true}
              type='email'
              className='text-xs'
              label='Email'
              onChange={setEmail}
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
            <Button text="Get in touch" />

          </form>
        </div>
      </section>


      <div className="flex justify-center items-center lg:mx-32 xl:mx-48  bg-cover bg-center rounded-xl mb-16" style={{ backgroundImage: "url('/contact.svg')", height: '400px', }}>
        <div className="border border-white flex flex-col rounded-xl mx-8 p-4" style={{
          background:
            'linear-gradient(96.39deg, rgba(17, 17, 17, 0.1) -11.67%, rgba(17, 17, 17, 0) 103.28%)',
          backdropFilter: 'blur(12px)',
        }}>
          <p className="text-3xl font-semibold text-white">
            “Fikia has saved us thousands of hours of work. We are able to spin up investment profile faster. “
          </p>
          <p className="text-1.5xl font-semibold text-white mt-3">Frankie Sylvester</p>
          <div className="flex justify-between">
            <p className="text-1xl font-semibold text-white mt-3">Product Manager, BK Tech</p>
            <div className="flex justify-between">
              <Image src='/back-arrow.svg' width={30} height={10} alt='Charger' className="mr-4" />
              <Image src='/forward-arrow.svg' width={30} height={10} alt='Charger' />
            </div>
          </div>
        </div>

      </div>

      {/* <Image src="/contact.svg" width="381" height="478" alt="" /> */}

      <section className='mt-3 my-6  flex-col  lg:flex lg:justify-center lg:mx-32 xl:mx-48'>

        <Faq />
        <Footer />
      </section>
    </main>
  )
}
