"use client";

import Image from "next/image"

interface InputProps{
  value?: string
  label?: string
  placeholder?: string
  type?: string
  name?: string
  icon?: string
  dollarIcon?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string
  required?: boolean
  container?: {
    className?: string
  }
  inputlabel?: {
    className?: string
  }
  input?: {
    className?: string
  }
}

export default function InputField({ 
    value, 
    label, 
    placeholder, 
    required, 
    type,
    name,
    icon,
    dollarIcon,
    onChange,
    onBlur,
    className,
    ...props 
  }: InputProps) {
  const handleChange = (event: any) => {
    const { value } = event?.target
    onChange && onChange(value)
  }

  return (
    <div className={`${props.container?.className} ${className}`}>
      {label && required ?
        <label className={props.inputlabel?.className} htmlFor="app-input-field">{label} <span className="text-red-500">*</span></label> :
        <label className={props.inputlabel?.className} htmlFor="app-input-field">{label}</label>}
      <div className="absolute mt-[2.6rem] ml-3">
        {icon ? <Image alt='icon' src={icon} width={26} height={26} /> : ''}
        
      </div>

      <div className="absolute mt-[36px] right-10">
        {dollarIcon ? <Image alt='icon' src={dollarIcon} width={26} height={26} /> : ''}
        
      </div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={props.input?.className}
        {...props}
      />
    </div>
  )
}