import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'
import { FaQuoteLeft } from "react-icons/fa"
import OpenModalButton from '@/components/modal/OpenModalButton'

function Panel({
    src,
    alt,
    className = '',
    objectPosition = '[object-position:50%_50%]',
    overlayClassName = '',
}: {
    src: string
    alt: string
    className?: string
    objectPosition?: string
    overlayClassName?: string
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
            {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`}/>}
        </div>
    )
}

export default function WorkforceAssessmentsContext() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Cultural Context
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans text-gray-700">
                        Built for the context in which people work
                    </h2>
                    <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-5">
                        Workforce experience does not look the same everywhere.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        Employee engagement and culture are shaped by more than the questions in a survey.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        Hierarchy, relationships, communication norms, trust and local expectations can
                        influence both how people experience work and how willing they are to describe that
                        experience directly.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        <BoldZanga text="Zanga is designed for African and other high-context workplaces, helping organisations interpret workforce insight with greater sensitivity to the environment in which people actually work."/>
                    </p>

                    <div className="relative mb-8">
                        <span
                            className="block text-olive/30 text-6xl leading-none font-MonaSans mb-2"
                            aria-hidden="true"
                        >
                            <FaQuoteLeft />
                        </span>
                        <p className="text-gray-800 font-semibold font-Montserrat italic leading-relaxed">
                            The question is not only: &ldquo;What did employees say?&rdquo;<br/> It is also:{' '}
                            <span className="text-olive">&ldquo;What does this insight mean for this workforce, this organisation and this context?&rdquo;</span>
                        </p>
                    </div>

                    <OpenModalButton
                        modal="methodology-engagement"
                        className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-terracotta/90 transition-colors font-Montserrat"
                    >
                        Explore Our Methodology
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </OpenModalButton>
                </Reveal>

                <Reveal delayMs={120}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/260"
                                alt="An employee listening attentively in a team discussion"
                                className="md:h-[500px] h-56 rounded-2xl rounded-br-none"
                                objectPosition="[object-position:50%_32%] md:[object-position:50%_55%]"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/155"
                                alt="Colleagues in conversation across a table"
                                className="md:h-44 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/253"
                                alt="A team collaborating in an open workspace"
                                className="md:h-[400px] h-36 rounded-2xl rounded-bl-none"
                                overlayClassName="bg-slate-800/30"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/145"
                                alt="Colleagues reviewing notes together"
                                className="md:h-44 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                                objectPosition="[object-position:50%_20%]"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
