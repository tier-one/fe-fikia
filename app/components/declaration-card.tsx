import Image from "next/image";

type Props = {
  individualSelection:number;
  corporateSelection:number; 
}

const DeclarationCard = ({ individualSelection, corporateSelection }: Props) => {
  return (
    <div className="md:w-[414px] w-auto shrink-0 self-stretch bg-[#F4F6F7] px-[10px] md:px-0">
      <Image
        width={107.04}
        height={32}
        className="absolute left-[10px] top-[45px] md:left-[96px] w-[107.04px] h-8"
        alt=""
        src="/group-32935.svg"
      />

      <div className="inline-flex flex-col h-full w-[100%] md:w-[88%] justify-center items-center">
        <div className="h-full flex flex-col justify-start items-start pt-[300px]">
          <div className="flex flex-row items-center justify-start gap-[8px] ">
            <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt=""
                  src="/check-circle.svg"
            />
            <h1 className="text-[#64748A] text-[14px] font-[500] leading-normal hidden sm:block">
              Application Information
            </h1>
          </div>

          <div className="relative flex w-[100%] py-[5px] pl-[10px]">
            <div className="w-[2px] h-[100px] bg-[#CAD4E0]"></div>
          </div>

          <div className="flex flex-row items-center justify-start gap-[8px]">
            {individualSelection !== 1 || corporateSelection !== 1 ? (
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                alt=""
                src="/check-circle.svg"
              />
            ) : (
              <Image
                width={24}
                height={24}
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/circle.svg"
              />
            )}
            <h1 className="text-[#64748A] text-[14px] font-[500] leading-normal hidden sm:block">
              Documents
            </h1>
          </div>

          <div className="relative flex w-[100%] py-[5px] pl-[10px]">
            <div className="w-[2px] h-[100px] bg-[#CAD4E0]"></div>
          </div>

          <div className="flex flex-row items-center justify-start gap-[8px] ">
            {individualSelection === 3 || corporateSelection === 3 ? (
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt=""
                  src="/check-circle.svg"
                />
              ) : (
                <Image
                  width={24}
                  height={24}
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/circle.svg"
                />
            )}
            <h1 className="text-[#64748A] text-[14px] font-[500] leading-normal hidden sm:block">
              Declaration & Signature
            </h1>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DeclarationCard;
