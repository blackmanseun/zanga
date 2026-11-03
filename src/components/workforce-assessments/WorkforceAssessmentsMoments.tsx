import React from 'react'
import { FiActivity, FiCompass, FiUsers, FiBarChart2, FiEdit3 } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type AccentColor = 'olive-dark' | 'olive' | 'terracotta' | 'terracotta-dark'

type Moment = {
    title: string
    description: string
    recommended: string
    color: AccentColor
    Icon: IconType
}

const moments: Moment[] = [
    {
        title: 'Understanding Employee Engagement',
        description: 'Get a clearer view of how people are experiencing the organisation.',
        recommended: 'Employee Engagement Survey',
        color: 'olive-dark',
        Icon: FiActivity,
    },
    {
        title: 'Understanding Organisational Culture',
        description: 'Understand how values and behaviours are experienced across the workforce.',
        recommended: 'Organisational Culture Assessment',
        color: 'olive',
        Icon: FiCompass,
    },
    {
        title: 'Strengthening a Team',
        description: 'Understand the patterns shaping how a team communicates and works together.',
        recommended: 'Team Effectiveness Assessment',
        color: 'terracotta',
        Icon: FiUsers,
    },
    {
        title: 'Turning Workforce Data Into Insight',
        description: 'Bring multiple workforce signals together to identify patterns and priorities.',
        recommended: 'Workforce Analytics',
        color: 'terracotta-dark',
        Icon: FiBarChart2,
    },
    {
        title: 'Answering a Specific Workforce Question',
        description: 'Build an assessment around a defined organisational need.',
        recommended: 'Custom Workforce Survey',
        color: 'olive-dark',
        Icon: FiEdit3,
    },
]

const badgeClasses: Record<AccentColor, string> = {
    'olive-dark': 'text-olive-dark',
    olive: 'text-olive',
    terracotta: 'text-terracotta',
    'terracotta-dark': 'text-terracotta-dark',
}

export default function WorkforceAssessmentsMoments() {
    return (
        <section className="bg-contain md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="md:text-center mb-16">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Find Your Fit
                    </span>
                    <h2 className="hidden md:block text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for Different Workforce Moments
                    </h2>
                    <h2 className="block md:hidden text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for different workforce moments
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {moments.map((moment, i) => (
                        <Reveal key={moment.title} y={24} delayMs={i * 80} className="h-full">
                            <div className="h-full flex flex-col border border-slate-200 p-4 rounded-xl bg-[#FAF8F6] group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                                    <moment.Icon size={22} className="text-gray-700" aria-hidden="true"/>
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 font-MonaSans mb-2">{moment.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-Montserrat mb-4">
                                    {moment.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-sm text-gray-500 font-Montserrat">Recommended</span>
                                    <span className={`mt-2 block text-xs font-semibold font-Montserrat ${badgeClasses[moment.color]}`}>
                                      {moment.recommended}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
