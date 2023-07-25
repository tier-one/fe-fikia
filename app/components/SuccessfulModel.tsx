import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";
import Modal from "./Modal";

type Props = {
  title?: string;
  paragraph?: string;
  buttonValue?: string;
  isPopupOpen: boolean;
  handleClose: () => void;
};

const SuccessfulModel = ({
  title,
  paragraph,
  buttonValue,
  isPopupOpen,
  handleClose,
}: Props) => {
  const router = useRouter();
  const handleBackToHome = () => {
    router.push('/')
  }

  return (
    <Modal isOpen={isPopupOpen} onClose={handleClose}>
      <div className="bg-[#FFF] rounded-[16px] p-[24px] flex flex-col items-center justify-center gap-[25px]">
        <Image
          src="/undraw_celebrating_rtuv 1.svg"
          width={114.375}
          height={185.549}
          alt="successful"
        />

        <div className="flex flex-col items-center gap-[24px]">
          <h1 className="text-[#4D5E80] text-center text-[24px] font-[600] leading-normal">
            {title}
          </h1>

          <p className="text-[#667085] text-center text-[14px] font-[400] leading-[160%]">
            {paragraph}
          </p>
        </div>

        <div className="flex justify-end px-8 ">
          <div>
            <Button
              styling="bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg "
              value={buttonValue}
              isDisabled={true}
              onClick={handleBackToHome}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessfulModel;
