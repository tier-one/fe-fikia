"use client";
import Image from "next/image";
import React from "react";
import EmailRequest from "@/app/components/EmailRequest";
import PictureCard from "@/app/components/PictureCard";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";

export default function Investor() {
  return (
    <div className="bg-[#EDEFF3] relative">
      <Banner />
      <div className="absolute pt-16 z-20 text-white w-full ">
        <div className="px-5 py-10 lg:px-48 lg:py-24">
          <p className="text-3xl font-bold">For individual investor:</p>
          <p className="py-4">
            Join our extensive waitlist today to spark connection and get
            notified when we launch
          </p>
          <div className="lg:w-1/2 ">
            <EmailRequest value="Early Access" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-black px-8 pt-96 lg:flex lg:justify-center lg:mx-32 xl:mx-48">
        <div className="lg:flex lg:justify-center lg:my-16 ">
          <div className="py-7 lg:w-1/2 ">
            <h1 className="font-medium text-3xl  text-[#475569] lg:pb-6">
              Grow your wealth in confidence 
            </h1>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/click.svg" alt="click" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold  text-[#475569] py-2">Unleash Your Investment Potential</h2>
                <p className="text-normal  text-[#475569]">
                This platform harnesses the power of financial markets, allowing users to build portfolios aligned with their investment goals. 
                With intuitive tools and insights, it enables informed decision-making and eliminates reliance on guesswork. 
                </p>
              </div>
            </div>
            <div className="flex items-center py-2">
              <div className="w-1/6">
                <Image src="/power.svg" alt="power" width={20} height={10} />
              </div>
              <div className="w-5/6">
                <h2 className="font-bold py-2  text-[#475569]">Build Your Dream Portfolio</h2>
                <p className="text-normal  text-[#475569]">
                  With Fikia, constructing your portfolio is a breeze. Our user-friendly interface lets you seamlessly select from a vast range of investment options, 
                  including stocks, bonds, mutual funds, ETFs, and more. Tailor your holdings to suit your preferences, and watch your portfolio take shape before your eyes. 
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
              <h1 className="font-medium  text-[#475569] text-3xl">
                Track and optimize investment performance
              </h1>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/click.svg" alt="click" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2  text-[#475569]">Real-time monitoring</h2>
                  <p className="text-normal  text-[#475569]">
                    Fikia offers real-time portfolio performance monitoring through powerful tracking capabilities. 
                    Our intuitive dashboard provides a comprehensive snapshot of investments, including returns, asset allocation, 
                    risk assessment, dividend tracking, and visual representations for better control over financial future.
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="w-1/6">
                  <Image src="/power.svg" alt="power" width={20} height={10} />
                </div>
                <div className="w-5/6">
                  <h2 className="font-bold py-2  text-[#475569]">Knowledge is power</h2>
                  <p className="text-normal  text-[#475569]">
                    At Fikia, we believe in empowering our users through knowledge.Enhance your investment skills, 
                    learn from experts, and engage with fellow investors to expand your understanding of the financial world
                    by joining our community.
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
                  <h2 className="font-bold py-2  text-[#475569]">Wherever you Go, Fikia is with you</h2>
                  <p className="text-normal  text-[#475569]">
                    Enjoy seamless access to Fikia across multiple devices and platforms. 
                    Our mobile app and responsive web interface ensure that you can manage your investments anytime, anywhere. 
                    Stay connected to the markets and make informed decisions on the go.
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
  );
}
