import React from 'react'

export default function EnterprisesPolaroid({
                      src,
                      className,
                      imgClassName,
                      positioned = true,
                  }: {
    src: string
    className: string
    imgClassName?: string
    positioned?: boolean
}) {
    return (
        <div
            className={`${positioned ? 'absolute' : ''} bg-white border border-terracotta/50 p-2 pb-5 rounded-sm shadow-xl ${className}`}>
            <img
                src={src}
                alt=""
                aria-hidden="true"
                className={`w-full object-cover ${imgClassName ?? 'h-50'}`}
            />
        </div>
    )
}
