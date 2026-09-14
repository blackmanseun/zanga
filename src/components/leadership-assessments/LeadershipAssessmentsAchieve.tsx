import React from 'react'
import { FiTrendingUp, FiUsers, FiAward, FiTarget, FiGlobe } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Outcome = {
    title: string
    description: string
    Icon: IconType
    color: string
}

const outcomes: Outcome[] = [
    {
        title: 'Understand Leadership Strengths and Gaps',
        description: 'Identify where leaders are performing strongly and where targeted development would have the greatest value.',
        Icon: FiTrendingUp,
        color: '#6a6d2f',
    },
    {
        title: 'Build Stronger Leadership Pipelines',
        description: 'Use structured evidence to identify emerging leaders, high-potential talent and future succession candidates.',
        Icon: FiUsers,
        color: '#a3a748',
    },
    {
        title: 'Make Better Promotion and Succession Decisions',
        description: 'Bring greater consistency and objectivity into decisions about leadership readiness and future responsibility.',
        Icon: FiAward,
        color: '#c55e36',
    },
    {
        title: 'Create More Focused Development Plans',
        description: 'Move away from generic leadership training by using assessment insight to identify the capabilities each leader most needs to strengthen.',
        Icon: FiTarget,
        color: '#803d23',
    },
    {
        title: 'Understand Leadership Across the Organisation',
        description: 'Aggregate assessment results across teams or cohorts to identify broader capability patterns, common development needs and organisational leadership risks.',
        Icon: FiGlobe,
        color: '#0F3460',
    },
]

export default function LeadershipAssessmentsAchieve() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Outcomes
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you can achieve
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        {outcomes.map((outcome, i) => (
                            <div key={outcome.title} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <span
                                        className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
                                        style={{ color: outcome.color }}
                                    >
                                        <outcome.Icon size={22} aria-hidden="true" />
                                    </span>
                                    {i < outcomes.length - 1 && (
                                        <span
                                            className="flex-1 w-px border-l border-dashed border-gray-300 my-1"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                                <div className={i < outcomes.length - 1 ? 'pb-8' : ''}>
                                    <h3 className="font-bold text-gray-900 font-MonaSans mb-1">{outcome.title}</h3>
                                    <p className="text-sm text-gray-600 font-Montserrat leading-relaxed">
                                        {outcome.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <img
                            src="/images/31.jpg"
                            alt="Leaders reviewing development plans together"
                            className="w-full h-[20rem] sm:h-[35rem] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
