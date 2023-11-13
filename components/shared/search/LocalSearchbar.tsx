'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

interface CustomInputProps {
    route: string,
    iconPosition: string,
    imgSrc: string,
    placeholder: string,
    otherClasses?: string,
}

const Localsearchbar = ({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    otherClasses
}: CustomInputProps) => {

    const [searchValue, setSearchValue] = useState("")
    return (

        <div className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-xl px-4 ${otherClasses}`}>
            {
                iconPosition === "left" && (
                    <Image
                        src={imgSrc}
                        width={24}
                        height={24}
                        alt='Search'
                        className='cursor-pointer'
                    />
                )
            }
            <Input
                type='text'
                placeholder={placeholder}
                value={searchValue}
                onChange={(e: any) => { setSearchValue(e) }}
                className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
            />
            {
                iconPosition === "right" && (
                    <Image
                        src={imgSrc}
                        width={24}
                        height={24}
                        alt='Search'
                        className='cursor-pointer'
                    />
                )
            }
        </div>

    )
}

export default Localsearchbar