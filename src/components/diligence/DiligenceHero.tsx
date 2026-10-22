import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

function Panel({
    src,
    alt,
    className = '',
    objectPosition = '50% 50%',
}: {
    src: string
    alt: string
    className?: string
    objectPosition?: string
}) {
    return (
        <div className={`relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
                style={{objectPosition}}
            />
        </div>
    )
}

export default function DiligenceHero() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto md:grid md:grid-cols-5 md:gap-16 space-y-8 md:space-y-0 items-center">
                <Reveal className="col-span-3">
                    <h1 className="text-[2.2rem] md:text-[3rem] leading-[1.1] font-bold mb-6 font-MonaSans text-gray-700">
                        Understand the people behind a business before you invest or lend.
                    </h1>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-4">
                        Financial and operational data can show how a business has performed. They do not always show
                        how well the founder or management team can lead through growth, pressure and complexity.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        <strong>Diligence by Zanga</strong> adds structured leadership and organisational insight to
                        investment diligence, lending decisions and portfolio support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton
                            modal="book-a-demo"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="inline-flex items-center justify-center gap-2 border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Talk to Zanga About Early Access
                        </OpenModalButton>
                    </div>
                </Reveal>

                <Reveal className="md:col-span-2" delayMs={120}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/186"
                                alt="A team working together in an open office"
                                className="md:h-72 h-48"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/213"
                                alt="A people leader reviewing a workforce report"
                                className="md:h-48 h-28"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/164"
                                alt="Colleagues bringing their hands together in unity"
                                className="md:h-48 h-28"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/217"
                                alt="An employee focused at her desk"
                                className="md:h-72 h-48"
                                objectPosition="60% 40%"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
