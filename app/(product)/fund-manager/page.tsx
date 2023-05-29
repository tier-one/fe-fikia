"use client";
import Image from "next/image";
import React from "react";
import EmailRequest from "@/app/components/EmailRequest";
import PictureCard from "@/app/components/PictureCard";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";


export default function FundManager() {
  return (
    <div className="bg-[#EDEFF3] relative  ">
      <Banner />
      <div className="absolute pt-16 z-20 text-white w-full ">
        <div className="px-5 py-10 lg:px-48 lg:py-24">
          <p className="text-3xl font-bold">For fund Manager:</p>
          <p className="py-4">
            Gain a competitive edge, streamline operations, and achieve outstanding results for your clients. 🚀
          </p>
          <div className="lg:w-1/2 ">
            <EmailRequest value="Book Demo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-black px-8 pt-96 lg:flex lg:justify-center lg:mx-32 xl:mx-48">
        <div className="lg:flex lg:justify-center lg:my-16 ">
          <div className="py-7 lg:w-1/2 ">
            <h1 className="font-medium text-3xl lg:pb-6 text-[#475569]">
              Unleash the power of advanced portfolio management
            </h1>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/click.svg" alt="click" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2 text-[#475569]">Effortlessly build and deploy investment products</h2>
                <p className="text-normal text-[#475569]">
                  Fikia simplifies portfolio construction, allowing you to craft winning portfolios effortlessly. 
                  Launch investment products in minutes, and seamlessly allow your customers to invest on the go. 
                </p>
              </div>
            </div>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/power.svg" alt="power" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2 text-[#475569]">Use our cutting edge tools</h2>
                <p className="text-normal">
                  Fikia's cutting-edge platform empowers fund managers with automated workflows, saving time and effort, to focus on delivering exceptional results for clients.
                </p>
              </div>
            </div>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image
                  src="/worldwide.svg"
                  alt="worldwide"
                  width={20}
                  height={10}
                />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2 text-[#475569]">Seize growth opportunities with Fikia</h2>
                <p className="text-normal">
                  Expand your business horizons and maximize growth potential with Fikia. 
                  Our platform empowers you to serve all markets, including those underserved
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <PictureCard
              picUrl="/african-woman.jpg"
              width={250}
              height={10}
            />
          </div>
        </div>

        <div className="pt-[30rem] lg:pt-0 ">

          <div className="lg:flex  lg:justify-center lg:flex-row-reverse ">

            <div className="py-7 lg:w-1/2">
              <h1 className="font-medium text-3xl text-[#475569] ">
                Track your asset portfolio
              </h1>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/click.svg" alt="click" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2 text-[#475569]">Real-Time market insights for informed decisions</h2>
                  <p className="text-normal text-[#475569]">
                  Fikia equips fund managers with real-time market insights, granting access to dynamic data, 
                  comprehensive financial reports, and advanced research tools to make well-informed decisions, 
                  capitalize on emerging trends, and stay ahead in fast-paced markets.
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/power.svg" alt="power" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2 text-[#475569]">Streamlined performance tracking and analysis</h2>
                  <p className="text-normal text-[#475569]">
                    Efficiently monitor and analyze portfolio performance with Fikia's powerful tracking capabilities. 
                    Our intelligent dashboard provides a comprehensive overview of key performance indicators, including returns, risk metrics
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <PictureCard
                picUrl="/african-woman.jpg"
                width={250}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[25rem] mx-4 lg:pt-16 lg:mx-[10rem] xl:mx-[15rem]">
        <Faq />
        <Footer />
      </section>
    </div>
  )
}
