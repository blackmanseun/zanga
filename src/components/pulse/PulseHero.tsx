import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

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

export default function PulseHero() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto md:grid md:grid-cols-5 md:gap-16 space-y-8 md:space-y-0 items-center">
                <Reveal className="col-span-3">
                    <h1 className="text-[2.2rem] md:text-[3rem] leading-[1.1] font-bold mb-6 font-MonaSans text-gray-700">
                        Know what your people are experiencing before it becomes a performance problem.
                    </h1>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-4">
                        <strong>Pulse by Zanga</strong> helps organisations measure employee engagement, culture,
                        retention signals and workforce sentiment, then turn that feedback into practical insight
                        for leaders
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        Go beyond annual surveys to understand what is changing, where attention is needed and
                        what your organisation should do next.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Take a Free Assessment
                        </Link>
                    </div>
                </Reveal>

                <Reveal className="md:col-span-2" delayMs={120}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/20.jpg"
                                alt="A team working together in an open office"
                                className="md:h-72 h-48"
                            />
                            <Panel
                                src="/images/26.jpg"
                                alt="A people leader reviewing a workforce report"
                                className="md:h-48 h-28"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/9.jpg"
                                alt="Colleagues bringing their hands together in unity"
                                className="md:h-48 h-28"
                            />
                            <Panel
                                src="/images/14.jpg"
                                alt="An employee focused at her desk"
                                className="md:h-72 h-48"
                                objectPosition="50% 20%"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
