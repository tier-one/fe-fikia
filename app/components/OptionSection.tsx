import React from "react";
import Button from "./Button";
import ListBox from "./ListBox";
import { useRouter } from "next/navigation";

type Props = {
    handleContinue: () => void;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    options: string[];
    visible: boolean;
}

const OptionsSection = ({ handleContinue, selected, setSelected, options, visible }: Props) => {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/profile')
  }

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center flex-1 self-stretch pt-[88px] px-[50px] md:pr-[203px] md:pl-[109px] ">
      <div className="flex flex-col items-start gap-[32px]">
        <h1 className="text-[#475569] text-[18px] font-[600] leading-normal">
          Do you want to register an account as either an individual or a corporate entity?
        </h1>

        <div className="flex flex-col items-start gap-[24px] w-full">
          <div className="flex flex-col items-start gap-[24px] w-full">
            <div className="flex flex-col items-start gap-[4px] self-stretch ">
              <h1 className="text-[#64748A] text-[12px] font-[500] leading-[20px]">
                Options
              </h1>
              <ListBox selected={selected} setSelected={setSelected} options={options} />
            </div>
          </div>

          <div className="flex justify-end items-center gap-[16px] w-full">
            <div className="flex items-start gap-[16px]">
              <Button
                onClick={handleCancel}
                isDisabled={true}
                styling="rounded-lg cursor-pointer text-sm bg-slate-100 font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center"
                value="Cancel"
              />
              <Button
                onClick={handleContinue}
                styling={`rounded-lg cursor-pointer ${selected === 'Select option' ? 'bg-[#00277470]' : 'bg-[#002674]'} text-sm font-medium w-24 h-12 overflow-hidden shrink-0 flex flex-row py-2 px-4 box-border items-center justify-center text-white`}
                value="Continue"
                isDisabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsSection;
