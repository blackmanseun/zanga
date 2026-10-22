import React from 'react'
import {FiAward, FiMessageSquare, FiMapPin, FiShield, FiArrowRight} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import CardAction from '@/components/ui/CardAction'

type UseCase = {
    title: string
    description: string
    cta: string
    href?: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Community Feedback & Grievance Channels',
        description:
            'Create clearer ways for stakeholders to speak and be heard. Use Voice by Zanga to collect feedback, structure concerns and support more consistent follow-up across programme sites.',
        cta: 'Explore Voice by Zanga',
        href: '/products/voice-by-zanga',
        color: '#c55e36',
        Icon: FiMessageSquare,
    },
    {
        title: 'Country Office & Programme Leadership Reviews',
        description:
            'Understand the leadership capability behind delivery. Assess programme leaders and country teams to identify strengths, development priorities and areas where greater support may be needed.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#0F3460',
        Icon: FiAward,
    },
    {
        title: 'Field-Team Engagement and Retention',
        description:
            'Understand how programme teams are experiencing the work. Use employee surveys and pulse checks to identify engagement, morale and retention concerns across dispersed teams.',
        cta: 'Explore Pulse by Zanga',
        href: '/products/pulse-by-zanga',
        color: '#16213E',
        Icon: FiMapPin,
    },
    {
        title: 'Local Partner Capability Assessment',
        description:
            'Evaluate local implementing partner leadership and governance systems before grant disbursement to de-risk funding allocations and ensure donor alignment.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#c55e36',
        Icon: FiShield,
    },
]

export default function DevelopmentOrganisationsHowUseZanga() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="relative md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <Reveal>
                    <div
                        className="opacity-80 pointer-events-none absolute -left-24 -bottom-56 sm:left-1/3 sm:-bottom-[16rem]"
                        aria-hidden="true"
                    >
                        <div className="w-[30rem] h-[30rem] rounded-[50%] border-2 border-gray-200/70"/>
                        <div
                            className="absolute w-[22rem] h-[22rem] left-8 bottom-5 rounded-[50%] border-2 border-gray-200/70"/>
                        <div
                            className="absolute w-[15rem] h-[13rem] left-14 bottom-2 rounded-[80%] border-2 border-gray-200/70"/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                        <div className="col-span-2">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Use Cases
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                How development organisations<br/> use <strong>Zanga</strong>
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                                See how development organisations put <strong>Zanga</strong> to work across
                                stakeholder listening, leadership, engagement and partner capability.
                            </p>
                        </div>

                        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                            {useCases.map((useCase) => (
                                <div key={useCase.title} className="h-full flex flex-col">
                                    <span
                                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                        style={{backgroundColor: `${useCase.color}1F`, color: useCase.color}}
                                    >
                                        <useCase.Icon size={20} aria-hidden="true"/>
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-3">
                                        {useCase.description}
                                    </p>
                                    <CardAction
                                        href={useCase.href}
                                        className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        style={{color: useCase.color}}
                                    >
                                        {useCase.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </CardAction>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
