import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='text-center font-light py-4'>
      <p className='text-xs'>&copy; Tier One. All rights reserved</p>
      <div className='flex justify-center py-3'>
        <Link href='/'>
          <Image src='/twitter.svg' alt='twitter' width={20} height={10} />
        </Link>
        <Link href='/'>
          <Image src='/linkedin.svg' alt='linkedin' width={20} height={10} className='mx-4' />
        </Link>
        <Link href='/'>
          <Image src='/insta.svg' alt='instagram' width={20} height={10} />
        </Link>
      </div>
    </div>
  )
}
