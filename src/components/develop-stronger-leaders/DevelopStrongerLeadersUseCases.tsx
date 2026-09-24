import React from 'react'
import Link from 'next/link'
import {FiUsers, FiBriefcase, FiTrendingUp, FiArrowRight} from 'react-icons/fi'
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
        title: 'First-Time and Mid-Level Managers',
        tagline: 'Help managers make the shift from doing the work to leading people.',
        description:
            'Use leadership assessment to identify where managers need support and connect those insights to focused development, coaching or structured learning.',
        cta: 'Explore Leadership Assessments',
        href: '/assessments/leadership-assessments',
        image: '/images/14.jpg',
        color: '#c55e36',
        Icon: FiUsers,
    },
    {
        title: 'Senior Leaders',
        tagline: 'Give experienced leaders insight they may not otherwise receive.',
        description:
            'Use 360 feedback and leadership assessment to help senior leaders understand how they are experienced by others and where behaviour change could have the greatest impact.',
        cta: 'Explore 360 Feedback Leadership Assessment',
        href: '#',
        image: '/images/12.jpg',
        color: '#a3a748',
        Icon: FiBriefcase,
    },
    {
        title: 'Emerging Leaders and High-Potential Talent',
        tagline: 'Prepare future leaders before the role arrives.',
        description:
            'Assess future capability, readiness and development needs, then use those insights to shape emerging-leader and succession-development programmes.',
        cta: 'Explore Leadership Assessments',
        href: '/assessments/leadership-assessments',
        image: '/images/10.jpg',
        color: '#0F3460',
        Icon: FiTrendingUp,
    },
]

export default function DevelopStrongerLeadersUseCases() {
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
                        Built for Different Leadership Development Needs
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
