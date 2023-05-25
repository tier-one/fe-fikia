
import Image from "next/image"

interface InputProps {
    value?: string
    label?: string
    placeholder?: string
    icon?: string
    onChange?: (value: string) => void
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

export default function TextArea({
    value,
    label,
    placeholder,
    required,
    icon,
    onChange,
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
                <label className={props.inputlabel?.className} htmlFor="app-input-field">{label} <span className="text-ehr-red">*</span></label> :
                <label className={props.inputlabel?.className} htmlFor="app-input-field">{label}</label>}
            <div className="absolute mt-[2.6rem] ml-3">
                {icon ? <Image alt='icon' src={icon} width={16} height={16} /> : ''}

            </div>
            <textarea
                value={value}
                rows={6}
                placeholder={placeholder}
                onChange={handleChange}
                className={props.input?.className}
                {...props}
            />
        </div>
    )
}