import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import CardAction from '@/components/ui/CardAction'
import type {ModalKey} from '@/components/modal/ModalProvider'

type Achievement = {
    title: string
    description: string
    cta: string
    href?: string
    // When set, the card actions open this modal instead of linking.
    modal?: ModalKey
    color: string
}

const achievements: Achievement[] = [
    {
        title: 'Understand Clients More Clearly',
        description:
            'Use structured assessment to uncover strengths, behavioural tendencies, leadership capability and development priorities that may not surface through conversation alone.',
        cta: 'Explore Zanga Assessments',
        color: '#c55e36',
    },
    {
        title: 'Make Coaching and Development More Focused',
        description:
            'Use assessment insight to identify where attention will have the greatest value and build coaching or development plans around clearer evidence.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#a3a748',
    },
    {
        title: 'Deepen Leadership and Team Engagements',
        description:
            'Bring assessment into leadership programmes, team development, offsites and organisational interventions to create a stronger starting point for discussion.',
        cta: 'Explore Team & Leadership Solutions',
        color: '#c55e36',
    },
    {
        title: 'Demonstrate Progress More Clearly',
        description:
            'Where appropriate, use baseline and follow-up assessment to help clients understand how capability, perception or development priorities change over time.',
        cta: 'Explore Assessments',
        color: '#a3a748',
    },
    {
        title: 'Expand the Services You Offer',
        description:
            'Add assessment, reporting and development capability to your existing practice without having to create the tools yourself.',
        cta: 'Explore Partner Options',
        href: '/partners/become-a-partner#commercial-models',
        color: '#0F3460',
    },
    {
        title: 'Create New Client Opportunities',
        description:
            'Use Zanga tools within existing client relationships or as the foundation for new leadership, talent and organisational-development engagements.',
        cta: 'Become a Zanga Partner',
        modal: 'partner-with-zanga',
        color: '#c55e36',
    },
]

export default function CoachesConsultantsAchieveGrid() {
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
                                        modal={item.modal}
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
                                        modal={item.modal}
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
