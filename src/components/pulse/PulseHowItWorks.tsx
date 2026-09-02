import React from 'react'
import Link from 'next/link'
import { FiHeadphones, FiEye, FiLayers, FiZap, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type Step = {
    title: string
    description: string
    cta: string
    color: string
    Icon: IconType
}

const steps: Step[] = [
    {
        title: '1. Listen',
        description:
            'Collect structured employee feedback through engagement surveys, pulse surveys and culture-focused assessments. Survey design can be aligned to the questions your organisation needs to understand.',
        cta: 'Explore Pulse Surveys',
        color: '#a3a748',
        Icon: FiHeadphones,
    },
    {
        title: '2. Understand',
        description:
            'Bring responses together to identify patterns, strengths, gaps and changes in employee sentiment. Explore the factors influencing engagement, culture, leadership experience and retention.',
        cta: 'Explore Employee Engagement',
        color: '#FDBF12',
        Icon: FiEye,
    },
    {
        title: '3. Compare',
        description:
            'Understand how experiences differ across teams, functions, locations or other relevant employee groups. Track changes over time and identify where greater attention may be required.',
        cta: 'Explore Workforce Dashboards',
        color: '#c55e36',
        Icon: FiLayers,
    },
    {
        title: '4. Act',
        description:
            'Translate findings into clear priorities for leaders and managers. Use dashboards, organisational reports and recommendations to guide conversations, interventions and workforce decisions.',
        cta: 'Talk to Our Team',
        color: '#0F3460',
        Icon: FiZap,
    },
]

export default function PulseHowItWorks() {
    return (
        <section
            className="relative bg-white md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                    <div
                        className="pointer-events-none absolute -left-24 -bottom-56 sm:left-1/3 sm:-bottom-[16rem]"
                        aria-hidden="true"
                    >
                        <div className="w-[30rem] h-[30rem] rounded-[50%] border-2 border-gray-200/30"/>
                        <div
                            className="absolute w-[22rem] h-[22rem] left-8 bottom-5 rounded-[50%] border-2 border-gray-200/20"/>
                        <div
                            className="absolute w-[15rem] h-[13rem] left-14 bottom-2 rounded-[80%] border-2 border-gray-200/30"/>
                    </div>
                    <div className="md:block hidden absolute -bottom-44 left-0 w-[15rem]">
                        <img src="/images/megaphone.png"/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        <div className="col-span-2">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                How Pulse Works
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                From employee voice to organisational intelligence
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm mb-6">
                                Pulse is built around a simple idea: employee feedback should help organisations
                                make better decisions.
                            </p>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-semibold font-Montserrat text-gray-700">
                                <span>Listen</span>
                                <span className="text-terracotta" aria-hidden="true">&rarr;</span>
                                <span>Understand</span>
                                <span className="text-terracotta" aria-hidden="true">&rarr;</span>
                                <span>Compare</span>
                                <span className="text-terracotta" aria-hidden="true">&rarr;</span>
                                <span>Act</span>
                            </div>
                        </div>

                        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                            {steps.map((step) => (
                                <div key={step.title} className="h-full flex flex-col">
                                    <span
                                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${step.color}1F`, color: step.color }}
                                    >
                                        <step.Icon size={20} aria-hidden="true"/>
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-3">
                                        {step.description}
                                    </p>
                                    <Link
                                        href="#"
                                        className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        style={{ color: step.color }}
                                    >
                                        {step.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    )
}
