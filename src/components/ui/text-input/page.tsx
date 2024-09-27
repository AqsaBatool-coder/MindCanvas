import React from 'react'

interface TextInputProps {
    label?: string
    type?: string
    placeholder?: string
    value?: string | number
    onChange?: any
    error?: string
    minLength?: number
    name?: string
    disabled?: boolean
    min?: number
    maxLength?: number
    required?: boolean
    id?: string
    className?: string
    autofocus?: boolean
    autoComplete?: string
}


const TextInput = ({
    label = "",
    id = "",
    name = "",
    type = "text",
    placeholder = "",
    value,
    onChange,
    error = "",
    minLength,
    disabled = false,
    min,
    maxLength,
    required = false,
    className = "",
    autofocus = false,
    autoComplete = ''
}: TextInputProps) => {


    return (
        <div className='flex flex-col w-full'>
            {label && <label htmlFor={id} className='pl-[5px] text-black text-[16px] leading-[20px] mb-[10px] font-[500]'>{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} w-full h-[44px] bg-white text-black text-[16px] leading-[20px] font-[400] placeholder-desc px-[10px] rounded-[6px] border border-grey-25 !outline-none !ring-none`}
                minLength={minLength && minLength}
                name={name}
                disabled={disabled}
                min={min}
                maxLength={maxLength}
                required={required}
                autoComplete={autoComplete ? autoComplete : 'none'}
                autoFocus={autofocus}
            />
            {error && <small className='text-left mt-[2px] mx-[5px] text-red-500 text-[0.8rem]'>{error}</small>}
        </div>
    )
}

export default TextInput
