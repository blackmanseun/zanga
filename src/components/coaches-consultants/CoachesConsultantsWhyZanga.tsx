import React from 'react'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

const pillars: { title: string; text: string }[] = [
    {
        title: 'Assessment-led',
        text: 'Use structured tools and reports to deepen client insight.',
    },
    {
        title: 'Contextually grounded',
        text: 'Interpret leadership and behavioural data with greater sensitivity to the environment in which clients work.',
    },
    {
        title: 'Built for high-context workplaces',
        text: 'Use tools developed with African and high-context organisational realities in mind.',
    },
    {
        title: 'Designed for practice',
        text: 'Bring assessment, development and reporting into the coaching and consulting work you already do.',
    },
]

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

export default function CoachesConsultantsWhyZanga() {
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
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/173"
                                alt="A coach reviewing an assessment report"
                                className="h-[420px]"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/169"
                                alt="A team development session"
                                className="h-[260px] shrink-0"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/174"
                                alt="A manager and team member in conversation"
                                className="h-[260px] shrink-0"
                                objectPosition="50% 20%"
                            />
                            <Panel
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/207"
                                alt="A team member reviewing a report"
                                className="h-[420px]"
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
                        Assessment is most useful when the insight makes sense in the context of the person
                        and organisation being assessed.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        <strong>Zanga</strong> combines structured assessment methodologies with cultural
                        intelligence designed for African and other high-context workplaces.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        For coaches and consultants, this means adding evidence to client work without losing
                        the cultural and organisational context needed to interpret that evidence well.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                        {pillars.map((pillar) => (
                            <div key={pillar.title}>
                                <span className="block w-8 h-[2px] bg-terracotta mb-3" aria-hidden="true"/>
                                <p className="text-gray-900 font-semibold font-MonaSans mb-1">
                                    {pillar.title}
                                </p>
                                <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">
                                    {pillar.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <OpenModalButton
                        modal="methodology-leadership"
                        className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Explore Our Methodology
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </OpenModalButton>
                    <OpenModalButton
                        modal="methodology-leadership"
                        className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Learn more
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </OpenModalButton>
                </Reveal>
            </div>
        </section>
    )
}
