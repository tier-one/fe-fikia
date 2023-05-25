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
    <div className="bg-[#EDEFF3] relative">
      <Banner />
      <div className="absolute pt-16 z-20 text-white w-full ">
        <div className="px-5 py-10 lg:px-28 lg:py-24">
          <p className="text-3xl font-bold">For a fund Manager::</p>
          <p className="py-4">
            Join our extensive waitlist today to spark connection and get
            notified when we launch 🚀
          </p>
          <div className="lg:w-1/2 ">
            <EmailRequest value="Book Demo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-black px-8 pt-96 lg:flex lg:justify-center lg:mx-32 xl:mx-48">
        <div className="lg:flex lg:justify-center lg:my-16 ">
          <div className="py-7 lg:w-1/2 ">
            <h1 className="font-medium text-3xl lg:pb-6">
              Track your investments grow your wealth
            </h1>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/click.svg" alt="click" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2">Successful products</h2>
                <p className="text-normal">
                  Join our extensive waitlist today to spark connection and
                  get notified when we launch 🚀
                </p>
              </div>
            </div>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/power.svg" alt="power" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2">Successful products</h2>
                <p className="text-normal">
                  Join our extensive waitlist today to spark connection and
                  get notified when we launch 🚀
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
                <h2 className="font-bold py-2">Successful products</h2>
                <p className="text-normal">
                  Join our extensive waitlist today to spark connection and
                  get notified when we launch 🚀
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

          <div className="lg:flex  lg:justify-center lg:flex-row-reverse">

            <div className="py-7 lg:w-1/2">
              <h1 className="font-medium text-3xl">
                Track your investments grow your wealth
              </h1>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/click.svg" alt="click" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2">Successful products</h2>
                  <p className="text-normal">
                    Join our extensive waitlist today to spark connection and
                    get notified when we launch 🚀
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/power.svg" alt="power" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2">Successful products</h2>
                  <p className="text-normal">
                    Join our extensive waitlist today to spark connection and
                    get notified when we launch 🚀
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
                  <h2 className="font-bold py-2">Successful products</h2>
                  <p className="text-normal">
                    Join our extensive waitlist today to spark connection and
                    get notified when we launch 🚀
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
