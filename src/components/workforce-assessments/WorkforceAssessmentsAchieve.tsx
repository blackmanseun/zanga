import React from 'react'
import { FiUsers, FiActivity, FiEye, FiBarChart2, FiTarget, FiPieChart } from 'react-icons/fi'
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
        title: 'Understand Employee Experience',
        description: 'See how employees are experiencing the organisation and identify areas that may require attention.',
        Icon: FiUsers,
        color: '#6a6d2f',
    },
    {
        title: 'Identify Engagement and Retention Signals',
        description: 'Understand patterns that may indicate disengagement, declining sentiment or emerging retention concerns.',
        Icon: FiActivity,
        color: '#a3a748',
    },
    {
        title: 'See Culture More Clearly',
        description: 'Understand how organisational values and behaviours are experienced in practice.',
        Icon: FiEye,
        color: '#c55e36',
    },
    {
        title: 'Compare Experiences Across the Organisation',
        description: 'See where employee experience differs across teams, functions, levels or other relevant groups.',
        Icon: FiBarChart2,
        color: '#803d23',
    },
    {
        title: 'Make More Informed Workforce Decisions',
        description: 'Bring structured people insight into conversations about engagement, culture, development, retention, and workforce planning.',
        Icon: FiTarget,
        color: '#0F3460',
    },
    {
        title: 'Give Leaders Better People Intelligence',
        description: 'Translate workforce responses into reports, dashboards and insights that decision-makers can use.',
        Icon: FiPieChart,
        color: '#1f6f5c',
    },
]

export default function WorkforceAssessmentsAchieve() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Outcomes
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What better workforce insight can help you achieve
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
                            imgClassName="md:h-[250px] h-[200px] object-top"
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/252"
                            className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                        />
                        <EnterprisesPolaroid
                            imgClassName="md:h-[200px] h-[180px] object-top"
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/303"
                            className="w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                        />
                        <EnterprisesPolaroid
                            imgClassName="md:h-[220px] h-[180px] object-top"
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/262"
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
