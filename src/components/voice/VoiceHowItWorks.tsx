import React from 'react'
import { FiHeadphones, FiClipboard, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Step = {
    title: string
    paragraphs: string[]
    color: string
    Icon: IconType
}

const steps: Step[] = [
    {
        title: '1. Listen',
        paragraphs: [
            'Stakeholders raise concerns, questions or feedback through the channels agreed for the programme.',
            'Depending on the implementation, this may include phone, messaging, digital or assisted channels.',
        ],
        color: '#a3a748',
        Icon: FiHeadphones,
    },
    {
        title: '2. Track',
        paragraphs: [
            'Each issue is logged, categorised, assigned and given a status.',
            'Sensitive or urgent matters can follow agreed escalation pathways.',
        ],
        color: '#FDBF12',
        Icon: FiClipboard,
    },
    {
        title: '3. Respond',
        paragraphs: [
            'Issues are routed to the appropriate people in the organisation and followed through until the agreed response or resolution stage is reached.',
        ],
        color: '#c55e36',
        Icon: FiMessageSquare,
    },
    {
        title: '4. Learn',
        paragraphs: [
            'Aggregated reporting helps leadership teams understand recurring themes, response patterns and areas that may require broader action.',
        ],
        color: '#0F3460',
        Icon: FiTrendingUp,
    },
]

const flow = ['Listen', 'Track', 'Respond', 'Learn']

export default function VoiceHowItWorks() {
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
                                How Voice by Zanga Works
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                From feedback to action
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm mb-6">
                                Voice by Zanga is built around a simple principle: stakeholder feedback only creates
                                value when it is heard, tracked and acted on.
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
