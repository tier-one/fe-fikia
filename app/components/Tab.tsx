import Image from "next/image"
import { useState } from "react"
import { FaqType } from "./Faq"

export default function Tab({ ...faq }: FaqType) {
  const [openTabStatus, setOpenTabStatus] = useState(false)

  function openTab() {
    setOpenTabStatus(!openTabStatus)
  }
  return (
    <div  className='border-b-2 py-1' onClick={openTab}>
      <div className='flex py-3 justify-between'>
        <p className='font-semibold'>{faq.question}</p>
        <Image src='/arrow.svg' alt='arrow' width={15} height={10} className={openTabStatus ? 'rotate-180' : ''} />
      </div>
      <div className={openTabStatus ? 'xl:w-2/3' : 'hidden'}>{faq.answer}</div>
    </div>
  )
}
