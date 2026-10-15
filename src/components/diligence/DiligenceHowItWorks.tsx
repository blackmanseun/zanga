import React from 'react'
import { FiTarget, FiClipboard, FiSearch, FiActivity } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Step = {
    title: string
    paragraphs: string[]
    color: string
    Icon: IconType
}

const steps: Step[] = [
    {
        title: '1. Scope',
        paragraphs: [
            'Define the decision, the people to be assessed and the questions the engagement needs to answer.',
            'The scope may differ for an investment, loan, portfolio review or post-investment intervention.',
        ],
        color: '#a3a748',
        Icon: FiTarget,
    },
    {
        title: '2. Assess',
        paragraphs: [
            'Founders, senior leaders and, where relevant, wider management teams complete the appropriate assessment pathway.',
            'Depending on the engagement, this may include leadership assessment, behavioural or psychometric insight, multi-rater feedback or organisational surveys.',
        ],
        color: '#FDBF12',
        Icon: FiClipboard,
    },
    {
        title: '3. Understand',
        paragraphs: [
            'Bring the results together to identify strengths, development needs, management depth, team dynamics and areas requiring further exploration.',
            'Outputs are designed to be useful to investment, credit and portfolio teams.',
        ],
        color: '#c55e36',
        Icon: FiSearch,
    },
    {
        title: '4. Monitor',
        paragraphs: [
            'Where appropriate, repeat assessment or follow-up insight can help track how leadership and organisational capability change over time.',
        ],
        color: '#0F3460',
        Icon: FiActivity,
    },
]

const flow = ['Scope', 'Assess', 'Understand', 'Monitor']

export default function DiligenceHowItWorks() {
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
                                How Diligence by Zanga Works
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                Four steps to understanding the leadership behind a business
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm mb-6">
                                Diligence by Zanga is built around a simple principle: the people behind a business
                                deserve the same structured attention as the numbers.
                            </p>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-semibold font-Montserrat text-gray-700">
                                {flow.map((stage, i) => (
                                    <React.Fragment key={stage}>
                                        {i > 0 && <span className="text-terracotta" aria-hidden="true">&rarr;</span>}
                                        <span>{stage}</span>
                                    </React.Fragment>
                                ))}
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
