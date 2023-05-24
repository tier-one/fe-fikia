'use client'
import Image from "next/image";
import InputField from "./components/InputField";
import { useState } from "react";
import Button from "./components/Button";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  const [email, setEmail] = useState('')

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col space w-full'
    },
    input: {
      className: 'py-4 px-4 rounded-full mt-2 bg-slate-100 border border-gray-300 placeholder:text-gray-600'
    },
  }

  return (
    <main className='bg-[#EDEFF3] min-h-screen text-[#475569]'>
     <div className='pt-16'>
        <section className='mt-4 lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
          <div className='flex justify-center mx-3 lg:order-2 lg:w-1/2'>
            <Image src='/banner.svg' alt='fikia banner' width={600} height={20} />
          </div>
          <div className='mx-4 py-3 lg:order-1 lg:w-1/2 lg:my-16 xl:my-32'>
            <h1 className='text-4xl font-semibold xl:text-6xl'>Track your investments, grow your wealth</h1>
            <p className='py-3 xl:text-xl xl:w-2/3'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
            <div className='relative flex items-center xl:w-2/3'>
              <div className=' w-full'>
                <InputField
                  value={email}
                  placeholder='Your email'
                  required={false}
                  type='text'
                  className='text-xs'
                  label=''
                  onChange={handleEmail}
                  {...inputFieldStylingProps}
                />
              </div>
              <div className='absolute right-0'>
                <Button
                  value='Early Access'
                  styling='bg-[#002674] text-white py-2 px-4 mt-2 mr-1 rounded-full'
                />
              </div>
            </div>
            <div className='my-6'>
              <p>Trusted by</p>
              <div className='flex py-4 justify-normal'>
                <Image src='/bkcapital.svg' width={150} height={100} alt="bk logo" className='mr-4'/>
                <Image src='/enko.svg' width={150} height={130} alt="bk logo"/>
              </div>
            </div>
          </div>
        </section>
        <section className='xl:mx-4'>
          <div className='text-center'>
            <p className='font-semibold text-[#002674]'>Features</p>
            <p className='font-semibold text-2xl mx-3 py-2 lg:mx-[15rem] xl:text-3xl xl:mx-[28rem]'>Stay Ahead of Your Investments with Real-Time Portfolio Tracking and Informed Insights</p>
            <p className='mx-3 py-2 lg:mx-[15rem] xl:mx-[28rem]'>Get a complete view of your portfolio and make informed investment decisions with our powerful tracking tools and real-time updates</p>
          </div>
          <div className='lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
            <div className='p-6 xl:w-1/2'>
              <Image src='/individual-investor.svg' width={50} height={10} alt='individual logo' />
              <p className='font-bold text-2xl py-4'>Individual investor</p>
              <p>Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. </p>
              <div className='py-4'>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Portfolio tracking and analysis</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Real-time market data and news</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Educational resources and tools for improving financial literacy.</p>
                </div>
              </div>
            </div>
            <div className='p-6 xl:w-1/2'>
              <Image src='/fund-manager.svg' width={50} height={10} alt='individual logo' />
              <p className='font-bold text-2xl py-4'>Fund Manager</p>
              <p>Manage money from retail investors in mutual funds, ETFs, or hedge funds. They make investment decisions to achieve returns that meet or exceed the fund&apos;s benchmark index or objective. </p>
              <div className='py-4'>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Portfolio tracking and analysis</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Customized analytics and reporting</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Research and insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mx-4 lg:mx-[10rem] xl:mx-[28rem]'>
          <Faq />
          <Footer />
        </section>
      </div>
    </main>
  )
}
