import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
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

export default function FinancialInstitutionsWhyZanga() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/62.jpg"
                                alt="A senior leader reviewing institutional reporting"
                                className="h-[350px]"
                            />
                            <Panel
                                src="/images/7.jpg"
                                alt="Colleagues collaborating across branches"
                                className="h-[200px]"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/44.jpg"
                                alt="A manager and team member in conversation"
                                className="h-[200px]"
                                objectPosition="50% 20%"
                            />
                            <Panel
                                src="/images/40.jpg"
                                alt="A team member reviewing a report"
                                className="h-[350px]"
                                objectPosition="50% 20%"
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal delayMs={120}>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Why <strong>Zanga</strong>
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans text-gray-700">
                        Global standards. Contextual intelligence.
                    </h2>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        People data is more useful when it reflects the environment in which people
                        actually work.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        <strong>Zanga</strong> combines research-backed assessment approaches with cultural
                        intelligence designed for African and other high-context workplaces. In
                        institutions where hierarchy, relationships and indirect communication norms can
                        influence what employees will and will not say, how leaders are experienced and
                        how workplace behaviour is expressed, that context matters.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        <strong>Zanga</strong> helps institutions interpret the data with greater
                        sensitivity to those realities.
                    </p>
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Learn About Our Methodology
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                    <Link
                        href="#"
                        className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Learn more
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
