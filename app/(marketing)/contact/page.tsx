// import Image from 'next/image'
'use client'
import {useState} from "react"
import Image from "next/image";
import Input from "../../components/ContactInput"
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/ContactBtn"
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

export default function Contact() {
  const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const[message,setMessage] =useState("");
  return (
    <main className='pt-16'>
      <section className='lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
        <div className='mx-4  lg:order-1 lg:w-1/2 lg:my-16 xl:my-32'>
          <h1 className='text-2xl font-semibold xl:text-4xl'>Get in touch with us</h1>
          <p className='py-3 xl:text-xl xl:w-2/3'>You can reach us anytime via Fikia@support.com</p>
         <form>
              <Input
                value={name}
                name="name"
                labelText="Name"
                placeholder="Your name"
                handleChange={setName}
              />
                <Input
                value={email}
                name="email"
                labelText="Email"
                placeholder="Your email"
                handleChange={setEmail}
              />
               <TextArea
                value={message}
                name="message"
                labelText="Message"
                placeholder="Your message"
                handleChange={setMessage}
              />
              <Button  text="Get in touch"/>

           </form>

          </div>
       
      
      </section>
      <section className='lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
       
      </section>
      <section className='mt-3 my-6  flex-col  lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
        <Image src="/contact.svg" width="381" height="478" alt="" />
        <Faq />
        <Footer />
      </section>
    </main>
  )
}
