import React from 'react'
import {FiArrowUpRight, FiTrendingUp} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import CardAction from '@/components/ui/CardAction'

type Achievement = {
    title: string
    description: string
    cta: string
    href?: string
    color: string
}

const achievements: Achievement[] = [
    {
        title: 'Strengthen Stakeholder and Community Voice',
        description:
            'Give beneficiaries, communities and local partners clearer ways to provide feedback, raise concerns and share their experience of programme delivery.',
        cta: 'Explore Voice by Zanga',
        href: '/products/voice-by-zanga',
        color: '#c55e36',
    },
    {
        title: 'Build Stronger Country & Programme Leadership',
        description:
            'Assess leadership capability across country offices, programme teams and local partners so development support can be directed where it is most needed.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#a3a748',
    },
    {
        title: 'Understand Staff Experience Across Programmes',
        description:
            'Track engagement, culture and workforce sentiment across dispersed project teams to identify emerging concerns before they affect delivery.',
        cta: 'Explore Pulse by Zanga',
        href: '/products/pulse-by-zanga',
        color: '#c55e36',
    },
    {
        title: 'Strengthen Local Partner Capability',
        description:
            'Use structured leadership and organisational insight to better understand the strengths and development needs of implementing partners and grantees.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#a3a748',
    },
    {
        title: 'Build a Clearer Evidence Base Around Stakeholder Experience',
        description:
            'Bring stakeholder feedback into a more structured format so programme teams and leadership can identify recurring themes, track concerns and support more informed reporting.',
        cta: 'Explore Voice by Zanga',
        href: '/products/voice-by-zanga',
        color: '#0F3460',
    },
    {
        title: 'Improve Coordination Across Multi-Country Teams',
        description:
            'Understand how employees and programme teams are experiencing leadership, communication and ways of working across locations.',
        cta: 'Explore Workforce Assessments',
        color: '#c55e36',
    },
]

export default function DevelopmentOrganisationsAchieveGrid() {
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
                                    <span
                                        aria-hidden="true"
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center"
                                        style={{backgroundColor: item.color}}
                                    >
                                        <FiTrendingUp size={18}/>
                                    </span>
                                </div>
                                <p className="text-gray-700 text-[16px] font-Montserrat leading-relaxed mb-6 flex-1">
                                    {item.description}
                                </p>
                                <CardAction
                                    href={item.href}
                                    className="inline-flex items-center gap-2 text-[14px] font-semibold font-Montserrat"
                                    style={{color: item.color}}
                                >
                                    {item.cta}
                                    <FiArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </CardAction>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
