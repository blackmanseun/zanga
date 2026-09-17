import React from 'react'
import { FiTrendingUp, FiUsers, FiAward, FiTarget, FiGlobe } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import EnterprisesPolaroid from '@/components/enterprises/EnterprisesPolaroid'

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

                <div className="xl:block hidden w-full">
                    <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] mx-auto mt-8 lg:mt-16">
                        <EnterprisesPolaroid
                            imgClassName="md:h-[250px] h-[200px] object-bottom"
                            src="/images/50.jpg"
                            className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                        />
                        <EnterprisesPolaroid
                            imgClassName="md:h-[200px] h-[180px]"
                            src="/images/51.jpg"
                            className="object-cover w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                        />
                        <EnterprisesPolaroid
                            imgClassName="md:h-[220px] h-[180px] object-cover"
                            src="/images/53.jpg"
                            className="w-[60%] top-[46%] md:left-[-2%] left-2 rotate-[-10deg] z-30"
                        />
                        <span
                            className="animate-pulse absolute right-2 bottom-0 w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/20"
                            aria-hidden="true"
                        />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
