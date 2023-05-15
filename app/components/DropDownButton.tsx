import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export type DropDownMenuItems = {
  name: string,
  url: string
}
export type DropDownMenuType = {
  title: string,
  menuItems: DropDownMenuItems[]
}

export default function DropDownButton(dropDownItem: DropDownMenuType) {
  const { title, menuItems } = dropDownItem;
  const [menuOpenStatus, setMenuOpenStatus] = useState(false)

  function handleToggle() {
    setMenuOpenStatus(!menuOpenStatus)
  }

  return (
    <div className='cursor-pointer' onClick={handleToggle}>
      <div className='flex items-center'>
        <p>{title}</p>
        <Image className='mx-2' src='/arrow.svg' alt='dropdown arrow' width={10} height={10} />
      </div>
      <div className={`bg-white mt-3  absolute w-48 drop-shadow-lg flex flex-col ${menuOpenStatus ? '' : 'hidden'}`}>
        {menuItems.map((item: DropDownMenuItems, index: number) => (
          <Link className='font-bold p-3 border' key={index} href={item.url}>{item.name}</Link>
        ))}
      </div>
    </div>
  )
}
