import React from 'react'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Achievement = {
    title: string
    description: string
    cta: string
    color: string
}

const achievements: Achievement[] = [
    {
        title: 'Build a Clearer View of Founder and Management Capability',
        description:
            'Add structured leadership insight to investment diligence so you can better understand the people expected to deliver the investment case.',
        cta: 'Talk to Zanga About Diligence',
        color: '#c55e36',
    },
    {
        title: 'Identify Key-Person and Succession Risk',
        description:
            'Understand where leadership or operational dependence is concentrated and where succession depth may be limited.',
        cta: 'Explore Succession Heat Map',
        color: '#a3a748',
    },
    {
        title: 'Strengthen Post-Investment Leadership Support',
        description:
            'Use assessment insight to identify where founders and management teams may need coaching, development or additional executive capability after investment.',
        cta: 'Explore Leadership Assessments',
        color: '#c55e36',
    },
    {
        title: 'Make Critical Executive Hires With More Evidence',
        description:
            'Use psychometric assessments and analytics to support C-suite and senior leadership recruitment across portfolio companies.',
        cta: 'Explore Fit by Zanga',
        color: '#a3a748',
    },
    {
        title: 'Monitor Workforce and Culture Signals Across Portfolio Companies',
        description:
            'Track engagement, culture and retention signals where workforce dynamics may affect growth or execution.',
        cta: 'Explore Pulse by Zanga',
        color: '#0F3460',
    },
    {
        title: 'Add People Insight to Lending or Credit Decisions',
        description:
            'For founder-led or management-dependent businesses, Zanga can provide an additional layer of structured leadership insight alongside conventional credit and financial analysis.',
        cta: 'Talk to Zanga About Diligence',
        color: '#c55e36',
    },
]

export default function InvestorsFundManagersAchieveGrid() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="md:mb-16 mb-6">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Outcomes
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        What you can achieve
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, i) => (
                        <Reveal key={item.title} delayMs={(i % 3) * 90} className="h-full">
                            <div className="group h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-[20px] font-semibold font-MonaSans text-gray-800/90">
                                        {item.title}
                                    </h3>
                                    <Link
                                        href="#"
                                        aria-label={item.cta}
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center hover:brightness-95 transition-all"
                                        style={{backgroundColor: item.color}}
                                    >
                                        <FiArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </div>
                                <p className="text-gray-700 text-[16px] font-Montserrat leading-relaxed mb-6 flex-1">
                                    {item.description}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-[14px] font-semibold font-Montserrat"
                                    style={{color: item.color}}
                                >
                                    {item.cta}
                                    <FiArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
