'use client'

import Image from "next/image";
import { useState } from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

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
                        <Image src='/landing_img1.svg' alt='fikia banner' width={600} height={20} />
                    </div>
                    <div className='mx-4 py-3 lg:order-1 lg:w-1/2 lg:my-16 xl:my-32'>
                        <h1 className='text-2xl font-semibold xl:text-3xl'>Track your investments, grow your wealth</h1>
                        <div className='py-4'>
                            <div className='flex items-center py-1'>
                                <Image src='/thumb.svg' width={30} height={10} alt='Thumb' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <Image src='/charger.svg' width={30} height={10} alt='Charger' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <Image src='/globe.svg' width={30} height={10} alt='Globe' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
                    <div className='flex justify-center mx-3  lg:w-1/2'>
                        <Image src='/landing_img2.svg' alt='fikia banner' width={600} height={20} />
                    </div>
                    <div className='mx-4 py-3 lg:order-1 lg:w-1/2 lg:my-16 xl:my-32'>
                        <h1 className='text-2xl font-semibold xl:text-3xl'>Track your investments, grow your wealth</h1>
                        <div className='py-4'>
                            <div className='flex items-center py-1'>
                                <Image src='/thumb.svg' width={30} height={10} alt='Thumb' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <Image src='/charger.svg' width={30} height={10} alt='Check' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <Image src='/globe.svg' width={30} height={10} alt='Check' />
                                <div>
                                    <p className="px-2 font-semibold">Successful products</p>
                                    <p className='px-2'>Join our extensive waitlist today to spark connection and get notified when we launch 🚀</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='mt-3  flex-col  lg:flex lg:justify-center lg:mx-32 xl:mx-48'>
                    <Faq />
                    <Footer />
                </section>
            </div>
        </main>
    )
}
