'use client'

import React, { useEffect, useState } from 'react'

const OUTER = 460
const INNER = 250
const INNER_TOP = (OUTER - INNER) / 2
const HALF = OUTER / 2

function VinylGraphic({img}: {img: string}) {
    const [slots, setSlots] = useState<[string, string]>([img, img])
    const [activeSlot, setActiveSlot] = useState<0 | 1>(0)

    useEffect(() => {
        setSlots((prev) => {
            if (prev[activeSlot] === img) return prev
            const next: [string, string] = [...prev] as [string, string]
            next[activeSlot === 0 ? 1 : 0] = img
            return next
        })
        setActiveSlot((s) => (s === 0 ? 1 : 0))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [img])

    return (
        <div className="relative shrink-0" style={{width: OUTER, height: OUTER}}>
            <div className="absolute inset-0 rounded-full bg-[#f3ede2] border-2 border-terracotta"/>
            <div className="absolute inset-[10px] rounded-full border-2 border-white"/>

            <div
                className="absolute rounded-full overflow-hidden border-2 border-terracotta shadow-md"
                style={{
                    width: INNER,
                    height: INNER,
                    top: INNER_TOP,
                    left: (OUTER - INNER) / 2,
                }}
            >
                {slots.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            activeSlot === i ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-black/25" aria-hidden="true"/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2 bg-white rounded-full h-11 w-11 pl-3 pr-3 shadow-md whitespace-nowrap">
                    <span className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
                        <span className="w-[2.5px] h-2 bg-terracotta rounded-full"/>
                        <span className="w-[2.5px] h-3 bg-terracotta rounded-full"/>
                        <span className="w-[2.5px] h-2.5 bg-terracotta rounded-full"/>
                        <span className="w-[2.5px] h-3.5 bg-terracotta rounded-full"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

type ParallaxVinylProps = {
    leftImages?: string | string[]
    rightImages?: string | string[]
    intervalMs?: number
}

export default function EnterprisesParallaxVinyl({
    leftImages = '/images/13.jpg',
    rightImages = '/images/13.jpg',
    intervalMs = 4000,
}: ParallaxVinylProps) {
    const leftList = Array.isArray(leftImages) ? leftImages : [leftImages]
    const rightList = Array.isArray(rightImages) ? rightImages : [rightImages]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (leftList.length < 2 && rightList.length < 2) return
        const id = setInterval(() => {
            setIndex((i) => i + 1)
        }, intervalMs)
        return () => clearInterval(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [leftList.length, rightList.length, intervalMs])

    const currentLeft = leftList[index % leftList.length]
    const currentRight = rightList[index % rightList.length]

    return (
        <div className="relative flex" style={{width: OUTER, height: OUTER}} aria-hidden="true">
            <div className="relative overflow-hidden" style={{width: HALF, height: OUTER}}>
                <div style={{position: 'absolute', left: 0, top: 0}}>
                    <VinylGraphic img={currentLeft}/>
                </div>
            </div>
            <div className="relative overflow-hidden" style={{width: HALF, height: OUTER}}>
                <div style={{position: 'absolute', left: -HALF, top: 0}}>
                    <VinylGraphic img={currentRight}/>
                </div>
            </div>
        </div>
    )
}
