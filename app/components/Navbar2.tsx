'use client';
import Image from 'next/image';
import Waves from '../../public/waves.svg'
import Logo from '../../public/fikia logo_full color 1.svg'
import Link from 'next/link';
import NotificationBell from './NotificationBell';
import ProfileButton from './ProfileButton';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='bg-[#00133B] h-[12vh] flex justify-center items-center z-[1000000]'>
      <div className="flex text-white w-full py-[10px]  px-[40px] justify-between items-center">
        <div className='flex w-[500px] md:w-[300px] h-[33px] pt-[1px] pr-[32.96px] items-center'>
            <Image src={Logo} width={107.04} height={32} alt='Fikia Plus Logo' />
        </div>
        <div className='relative flex justify-center items-center gap-[24px]' >
          <div className='md:w-[700px]'>
            <Image src={Waves} alt='waves' />
          </div>
          <div className='absolute right-10 md:right-0 flex gap-[24px] items-center'>
            <NotificationBell />
            <ProfileButton />
          </div>
        </div>
      </div>
    </div>
  )
}
