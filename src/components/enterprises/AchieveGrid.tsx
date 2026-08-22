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
        title: 'Build a Stronger Leadership Pipeline',
        description:
            'Understand leadership strengths, capability gaps and future potential across your organisation so you can identify who is ready now, who needs development and where succession risk exists.',
        cta: 'Explore Leadership Assessments',
        color: '#c55e36',
    },
    {
        title: 'Make Better Talent Decisions',
        description:
            'Use structured, culturally relevant assessment data to support recruitment, promotion, role-fit and talent-development decisions with greater consistency.',
        cta: 'Explore Fit by Zanga',
        color: '#a3a748',
    },
    {
        title: 'Improve Workforce Engagement',
        description:
            'Understand what employees are experiencing, what is driving engagement or disengagement, and where intervention may be needed.',
        cta: 'Explore Pulse by Zanga',
        color: '#0F3460',
    },
    {
        title: 'Identify Capability and Culture Gaps',
        description:
            'See patterns across teams, functions and leadership levels to understand where organisational capability is strongest and where targeted development is required.',
        cta: 'Explore Workforce Analytics',
        color: '#c55e36',
    },
    {
        title: 'Give Leadership Clearer People Intelligence',
        description:
            'Translate workforce and leadership data into dashboards, reports and insights that executives and boards can use to make more informed decisions.',
        cta: 'Book an Enterprise Demo',
        color: '#0F3460',
    },
]

export default function AchieveGrid() {
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
