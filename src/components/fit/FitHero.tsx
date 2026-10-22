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

export default function FitHero() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto md:grid md:grid-cols-5 md:gap-16 space-y-8 md:space-y-0 items-center">
                <Reveal className="col-span-3">
                    <h1 className="text-[2.2rem] md:text-[3rem] leading-[1.1] font-bold mb-6 font-MonaSans text-gray-700">
                        Hire the right person, not just the best interview performance.
                    </h1>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-4">
                        <strong>Fit by Zanga</strong> brings structured, culturally intelligent assessment insight
                        into recruitment, so hiring decisions rest on more than a CV, referrals and interview
                        performance.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        Understand how a candidate is likely to think, work with others, lead and deliver, before
                        you make the offer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton
                            modal="book-a-demo"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                        {/* Greyed out until the free assessment is ready. */}
                        <span
                            aria-disabled="true"
                            title="Coming soon"
                            className="inline-flex items-center justify-center gap-2 border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold text-base font-Montserrat opacity-50 cursor-not-allowed"
                        >
                            Take a Free Assessment
                        </span>
                    </div>
                </Reveal>

                <Reveal className="md:col-span-2" delayMs={120}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/208"
                                alt="A team working together in an open office"
                                className="md:h-72 h-48"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/118"
                                alt="A people leader reviewing a workforce report"
                                className="md:h-48 h-28"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/177"
                                alt="Colleagues bringing their hands together in unity"
                                className="md:h-48 h-28"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/179"
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
