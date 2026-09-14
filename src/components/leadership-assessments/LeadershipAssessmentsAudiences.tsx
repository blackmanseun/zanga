import React from 'react'
import { FiUser, FiUsers, FiBriefcase, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Audience = {
    title: string
    description: string
    color: string
    Icon: IconType
}

const audiences: Audience[] = [
    {
        title: 'For the Individual',
        description: 'Understand personal strengths, development priorities and areas requiring greater attention.',
        color: '#6a6d2f',
        Icon: FiUser,
    },
    {
        title: 'For Managers and Coaches',
        description: 'Use structured insight to guide development conversations, coaching and performance support.',
        color: '#a3a748',
        Icon: FiUsers,
    },
    {
        title: 'For HR and Talent Teams',
        description: 'Compare leadership capability across cohorts, identify high-potential talent and strengthen succession decisions.',
        color: '#c55e36',
        Icon: FiBriefcase,
    },
    {
        title: 'For Executives and Boards',
        description: 'Understand broader leadership strengths, capability gaps and succession risks across the organisation.',
        color: '#803d23',
        Icon: FiTrendingUp,
    },
]

export default function LeadershipAssessmentsAudiences() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="col-span-2">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Levels of Insight
                        </span>
                        <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                            From individual insight to organisational intelligence
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                            Leadership assessments can provide value at more than one level.
                        </p>
                    </div>

                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                        {audiences.map((audience) => (
                            <div key={audience.title} className="h-full flex flex-col">
                                <span
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${audience.color}1F`, color: audience.color }}
                                >
                                    <audience.Icon size={20} aria-hidden="true"/>
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                    {audience.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-Montserrat leading-relaxed">
                                    {audience.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
