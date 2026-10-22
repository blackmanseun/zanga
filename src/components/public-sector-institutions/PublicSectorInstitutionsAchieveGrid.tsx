import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'
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
        title: 'Make Recruitment and Promotion More Evidence-Based',
        description:
            'Bring structured assessment insight into appointment, promotion and selection processes so decision-makers have a clearer, more consistent basis for evaluating candidates.',
        cta: 'Explore Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#c55e36',
    },
    {
        title: 'Build Leadership Capability Across Grades',
        description:
            'Assess leadership strengths and development priorities across directorates, departments and management levels. Use the resulting insight to target leadership development where it is most needed.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#a3a748',
    },
    {
        title: 'Strengthen Succession and Institutional Continuity',
        description:
            'Identify future leadership capability, readiness and potential gaps before critical transitions occur. This helps institutions build stronger internal pipelines and reduce dependence on a small number of individuals.',
        cta: 'Explore Succession Heatmap',
        color: '#c55e36',
    },
    {
        title: 'Hear Citizens and Service Users More Clearly',
        description:
            'Give citizens, service users and other stakeholders clearer ways to provide feedback, raise concerns and report service issues.',
        cta: 'Explore Voice by Zanga',
        href: '/products/voice-by-zanga',
        color: '#a3a748',
    },
    {
        title: 'Understand Employee Experience Across the Institution',
        description:
            'Track workforce sentiment, culture, and employee experience across departments, locations or administrative levels. Use that insight to identify where engagement, communication or management attention may be needed.',
        cta: 'Explore Pulse by Zanga',
        href: '/products/pulse-by-zanga',
        color: '#0F3460',
    },
    {
        title: 'Build Stronger Capacity-Building Programmes',
        description:
            'Establish a clearer capability baseline before training begins and use follow-up assessment where appropriate to understand how capability changes over time.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#c55e36',
    },
]

export default function PublicSectorInstitutionsAchieveGrid() {
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
                                    <CardAction
                                        href={item.href}
                                        ariaLabel={item.cta}
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center hover:brightness-95 transition-all"
                                        style={{backgroundColor: item.color}}
                                    >
                                        <FiArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </CardAction>
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
