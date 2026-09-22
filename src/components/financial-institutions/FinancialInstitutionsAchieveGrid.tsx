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
        title: 'Strengthen Leadership and Succession Readiness',
        description:
            'Build a clearer view of leadership capability, potential and readiness across the institution. Use structured assessment insight to identify who is ready now, where development is needed and where continuity risks may exist.',
        cta: 'Explore Leadership Assessments',
        color: '#c55e36',
    },
    {
        title: 'Understand and Reduce Frontline Attrition',
        description:
            'Identify the factors shaping employee experience across branches, contact centres and operational teams. Use engagement and sentiment data to understand why people stay, disengage or leave — and where intervention may have the greatest value.',
        cta: 'Explore Pulse by Zanga',
        color: '#a3a748',
    },
    {
        title: 'Hire and Promote With Stronger Evidence',
        description:
            'Bring structured psychometric, leadership and role-fit insight into recruitment and promotion decisions. Support hiring managers with a more consistent evidence base for roles ranging from relationship management and branch leadership to specialist and executive appointments.',
        cta: 'Explore Fit by Zanga',
        color: '#c55e36',
    },
    {
        title: 'Create Stronger Stakeholder Listening Channels',
        description:
            'Give stakeholders a structured way to raise concerns, provide feedback and report issues. Voice by Zanga can support confidential reporting, grievance management and controlled escalation so concerns can be identified and managed more consistently.',
        cta: 'Explore Voice by Zanga',
        color: '#a3a748',
    },
    {
        title: 'Hear Customers and Agents Directly',
        description:
            'Collect structured feedback from customers, agents and intermediaries and turn dispersed feedback into insight leadership teams can use.',
        cta: 'Explore Voice by Zanga',
        color: '#0F3460',
    },
    {
        title: 'Add Leadership Insight to Lending and Investment Decisions',
        description:
            'Management quality is an important part of understanding business resilience, yet it is often assessed informally. Zanga is working with selected institutions to bring structured founder, borrower and management-team insight to lending, investment and portfolio decisions.',
        cta: 'Talk to Zanga About Diligence',
        color: '#c55e36',
    },
]

export default function FinancialInstitutionsAchieveGrid() {
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
