import Image from "next/image"
import { Jost } from 'next/font/google'
import Logo from '../../../public/fikia logo_full color 1.svg'
import Waves from '../../../public/waves-login.svg'
import '../../globals.css'
import ToastProvider from "@/app/components/ToastProvider"
import AuthProvider from "@/app/components/AuthProvider"

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication',
  description: 'Make Investments Easy',
}


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ToastProvider>
          <div className='h-screen'>
            <div className='absolute px-20 py-12'>
              <Image src={Logo} alt='Fikia Plus Logo' />
            </div>
            <div className='absolute right-0'>
              <Image src={Waves} alt='waves' />
            </div>
            <div className='absolute flex justify-center items-center w-screen h-screen'>
            <AuthProvider>
              {children}
            </AuthProvider>
            </div>
            <div className='bg-[#00133B] h-1/2'></div>
            <div className='h-1/2'></div>
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}