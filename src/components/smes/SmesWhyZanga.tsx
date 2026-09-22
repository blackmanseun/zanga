import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

function Panel({
    src,
    alt,
    className = '',
    objectPosition = '[object-position:50%_50%]',
}: {
    src: string
    alt: string
    className?: string
    objectPosition?: string
}) {
    return (
        <div className={`relative overflow-hidden bg-gray-100 border border-gray-200 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className={`object-cover ${objectPosition}`}
            />
        </div>
    )
}

export default function SmesWhyZanga() {
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
                                src="/images/27.jpg"
                                alt="A small team reviewing results together"
                                className="md:h-80 h-56 rounded-2xl rounded-br-none"
                                objectPosition="[object-position:50%_32%] md:[object-position:50%_55%]"
                            />
                            <Panel
                                src="/images/42.jpg"
                                alt="Colleagues collaborating in a growing business"
                                className="md:h-44 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                            <Panel
                                src="/images/59.jpg"
                                alt="A manager and team member in conversation"
                                className="md:h-56 h-36 rounded-2xl rounded-bl-none"
                                objectPosition="[object-position:0%_25%]"
                            />
                            <Panel
                                src="/images/5.jpg"
                                alt="A team member reviewing a report"
                                className="md:h-44 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                                objectPosition="[object-position:50%_20%]"
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal delayMs={120}>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Why <strong>Zanga</strong>
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans text-gray-700">
                        Global standards. Grounded in your context.
                    </h2>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        People data is more useful when it reflects the environment in which people
                        actually work.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        <strong>Zanga</strong> combines research-backed assessment approaches with cultural
                        intelligence designed for African and other high-context workplaces. For a growing
                        business, that means insight that takes account of how leadership, communication,
                        relationships and workplace culture operate in your context, instead of relying
                        only on assumptions developed elsewhere — recommendations that fit how your team
                        actually operates, not advice imported from a market that works nothing like yours.
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
