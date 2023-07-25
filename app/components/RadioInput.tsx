import React, { ChangeEvent, useState } from "react";

type Props = {
  id: string;
  value: string;
  name: string;
  label: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = ({ id, value, name, label, checked, onChange, onBlur }: Props) => {
    return (
        <label htmlFor={id} className="flex items-center relative cursor-pointer">
          <input
            type="radio"
            id={id}
            value={value}
            name={name}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            className="hidden"
          />
          <div className={`flex justify-center items-center w-[16px] h-[16px] rounded-[50%] border-2 border-[#002674] mr-2 `}>
            <div className={`w-[8px] h-[8px] rounded-[50%] ${checked ? "bg-[#002674]" : ""}`}></div>
          </div>
          {label}
        </label>
      );
};

export default RadioInput;
