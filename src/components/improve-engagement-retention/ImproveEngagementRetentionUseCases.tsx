import React from 'react'
import Link from 'next/link'
import {FiGlobe, FiUserMinus, FiRefreshCw, FiArrowRight} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'

type UseCase = {
    title: string
    tagline: string
    description: string
    cta: string
    href: string
    image: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Organisation-Wide Engagement',
        tagline: 'Build a clearer picture of the employee experience.',
        description:
            'Run a structured engagement survey to understand strengths, concerns and priority areas across the organisation.',
        cta: 'Explore Pulse by Zanga',
        href: '/products/pulse-by-zanga',
        image: '/images/64.jpg',
        color: '#c55e36',
        Icon: FiGlobe,
    },
    {
        title: 'High-Attrition Teams or Functions',
        tagline: 'Understand why people are leaving — before more follow.',
        description:
            'Use targeted listening and workforce analysis to explore what may be driving disengagement or turnover in specific teams, locations or employee groups.',
        cta: 'Explore Retention Intelligence',
        href: '#',
        image: '/images/102.jpg',
        color: '#a3a748',
        Icon: FiUserMinus,
    },
    {
        title: 'Organisations Going Through Change',
        tagline: 'Track how change is being experienced.',
        description:
            'Use pulse surveys during restructuring, leadership transitions, growth or other periods of change to understand employee sentiment and identify where additional communication or support may be needed.',
        cta: 'Explore Pulse Surveys',
        href: '#',
        image: '/images/4.jpg',
        color: '#0F3460',
        Icon: FiRefreshCw,
    },
]

export default function ImproveEngagementRetentionUseCases() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="pb-16 md:pb-24 md:pt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Use Cases
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Built for Different Engagement and Retention Challenges
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {useCases.map((useCase, i) => (
                        <Reveal key={useCase.title} delayMs={i * 100} className="h-full">
                            <div className="h-full flex flex-col">
                                <div
                                    className="rounded-2xl p-1 bg-white overflow-hidden shrink-0 h-48 md:h-56"
                                >
                                    <img
                                        src={useCase.image}
                                        alt=""
                                        className="rounded-2xl w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative -mt-24 mx-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col flex-1">
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                                        style={{backgroundColor: `${useCase.color}1F`, color: useCase.color}}
                                    >
                                        <useCase.Icon size={18} aria-hidden="true"/>
                                    </span>
                                    <h3 className="text-olive text-sm font-semibold font-Montserrat mb-2.5">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-lg font-bold text-gray-700 font-MonaSans mb-1.5">
                                        {useCase.tagline}
                                    </p>
                                    <p className="text-gray-500 text-sm font-Montserrat leading-relaxed mb-5">
                                        <BoldZanga text={useCase.description}/>
                                    </p>
                                    <Link
                                        href={useCase.href}
                                        className="mt-auto inline-flex items-center gap-1.5 text-terracotta font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                    >
                                        {useCase.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
