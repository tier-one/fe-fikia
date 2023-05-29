'use client'
import Image from "next/image";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import EmailRequest from "./components/EmailRequest";

export default function Home() {

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
            <EmailRequest value='Early Access' />
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
              <p>Invest flexibly in financial instruments based on your investment goals, risk tolerance, and time horizon, and grow your wealth in the long term.</p>
              <div className='py-4'>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Build and track your portfolio</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Get real-time market data and information</p>
                </div>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Access educational resources and tools for improving your financial literacy.</p>
                </div>
              </div>
            </div>
            <div className='p-6 xl:w-1/2'>
              <Image src='/fund-manager.svg' width={50} height={10} alt='individual logo' />
              <p className='font-bold text-2xl py-4'>Fund Manager</p>
              <p>Manage money from retail investors in mutual funds, ETFs, or hedge funds. Lower your operational costs and save time. Make better investment decisions to achieve returns that meet or exceed the fund&apos;s benchmark index. </p>
              <div className='py-4'>
                <div className='flex items-center py-1'>
                  <Image src='/check.svg' width={30} height={10} alt='check' />
                  <p className='px-2'>Easy portfolio tracking and analysis</p>
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
        <section className='mx-4 lg:mx-[10rem] xl:mx-[15rem]'>
          <Faq />
          <Footer />
        </section>
      </div>
    </main>
  )
}
