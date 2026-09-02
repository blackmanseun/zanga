import React from 'react'
import Link from 'next/link'
import { FiBarChart2, FiRepeat, FiUsers, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'

type UseCase = {
    title: string
    tagline: string
    description: string
    cta: string
    image: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Annual Engagement & Culture Review',
        tagline: 'Build a clear organisation-wide baseline.',
        description:
            'Run a comprehensive engagement and culture assessment to understand employee experience across the organisation, identify priority issues and create a baseline for future tracking. Ideal for annual workforce reviews, strategy cycles and organisational transformation.',
        cta: 'Explore Engagement Surveys',
        image: '/images/27.jpg',
        color: '#c55e36',
        Icon: FiBarChart2,
    },
    {
        title: 'Regular Pulse Checks',
        tagline: 'Know what is changing between annual surveys.',
        description:
            'Use shorter, targeted surveys to understand employee sentiment around specific themes, organisational changes or emerging concerns. Ideal for leadership changes, restructuring, policy implementation, new ways of working or post-intervention tracking.',
        cta: 'Explore Pulse Surveys',
        image: '/images/28.jpg',
        color: '#a3a748',
        Icon: FiRepeat,
    },
    {
        title: 'Leadership & Team Insight',
        tagline: 'Understand the employee experience behind team performance.',
        description:
            'Explore how leadership, communication, trust and team dynamics are experienced across departments or business units. Use the results to support leadership development, team interventions and management conversations.',
        cta: 'Explore Leadership Solutions',
        image: '/images/23.jpg',
        color: '#0F3460',
        Icon: FiUsers,
    },
]

export default function PulseUseCases() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="py-16 md:pb-24 md:pt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Use Cases
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for Different Listening Needs
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {useCases.map((useCase, i) => (
                        <Reveal key={useCase.title} delayMs={i * 100} className="h-full">
                            <div className="h-full flex flex-col">
                                <div
                                    className={`rounded-2xl p-1 bg-white overflow-hidden shrink-0 ${i === 1 ? 'h-56 md:h-64' : 'h-48 md:h-56'}`}
                                >
                                    <img
                                        src={useCase.image}
                                        alt=""
                                        className="rounded-2xl w-full h-full object-cover object-[25%_30%]"
                                    />
                                </div>

                                <div className="relative -mt-24 mx-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col flex-1">
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${useCase.color}1F`, color: useCase.color }}
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
                                        href="#"
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
