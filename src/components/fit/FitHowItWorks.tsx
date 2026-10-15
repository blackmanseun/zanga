import React from 'react'
import { FiTarget, FiClipboard, FiSearch, FiCheckCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Step = {
    title: string
    paragraphs: string[]
    color: string
    Icon: IconType
}

const steps: Step[] = [
    {
        title: '1. Define',
        paragraphs: [
            'Clarify the role, level and the capabilities or behaviours most relevant to success.',
            'Assessment can be configured around the role, the level and the organisational context.',
        ],
        color: '#a3a748',
        Icon: FiTarget,
    },
    {
        title: '2. Assess',
        paragraphs: [
            'Candidates complete the appropriate structured assessment online.',
            'Depending on the role and engagement, this may explore behavioural characteristics, working style, leadership orientation and role-relevant capability.',
        ],
        color: '#FDBF12',
        Icon: FiClipboard,
    },
    {
        title: '3. Understand',
        paragraphs: [
            "Translate results into practical insight about each candidate's strengths, working preferences and areas requiring further exploration.",
        ],
        color: '#c55e36',
        Icon: FiSearch,
    },
    {
        title: '4. Decide',
        paragraphs: [
            "Use the assessment insight alongside interviews, experience, references and your organisation's selection criteria.",
        ],
        color: '#0F3460',
        Icon: FiCheckCircle,
    },
]

const flow = ['Define', 'Assess', 'Understand', 'Decide']

export default function FitHowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative bg-white md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24">
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
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                        <div className="col-span-2">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                How Fit by Zanga Works
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                From role requirements to better hiring decisions
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm mb-6">
                                Fit by Zanga is built around a simple principle: better selection starts with
                                clarity about what the role requires and consistency in how candidates are assessed.
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
                                    <div className="space-y-2">
                                        {step.paragraphs.map((paragraph) => (
                                            <p key={paragraph} className="text-gray-600 text-sm font-Montserrat leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    )
}
