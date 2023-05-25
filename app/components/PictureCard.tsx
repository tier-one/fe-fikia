import Image from "next/image"

export type PictureCardProps = {
  picUrl: string
  width?: number
  height?: number
}
export default function PictureCard({ picUrl, width, height }: PictureCardProps) {
  return (
    <div className='flex justify-center py-3'>
      <div className='bg-[#002674] h-96 w-2/3 absolute rotate-6 rounded-3xl lg:w-1/6'></div>
      <div className='bg-[#00B7FE] h-96 w-2/3 absolute rotate-[17deg] rounded-3xl lg:w-1/6'></div>
      <div className='absolute'>
        <Image src={picUrl} alt='smiling' width={width} height={height} className='rounded-3xl -rotate-[15deg]' />
      </div>
    </div>
  )
}
