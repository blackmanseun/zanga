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
        title: 'For Employees',
        description: 'Provide a structured way to share experiences, perceptions and feedback.',
        color: '#6a6d2f',
        Icon: FiUser,
    },
    {
        title: 'For Managers and Team Leaders',
        description: 'Understand patterns affecting team experience, effectiveness and engagement.',
        color: '#a3a748',
        Icon: FiUsers,
    },
    {
        title: 'For HR and People Teams',
        description: 'Identify workforce trends, and prioritise engagement, culture, retention and development initiatives.',
        color: '#c55e36',
        Icon: FiBriefcase,
    },
    {
        title: 'For Executives and Boards',
        description: 'See the broader organisational patterns and workforce issues that may require leadership attention.',
        color: '#803d23',
        Icon: FiTrendingUp,
    },
]

export default function WorkforceAssessmentsAudiences() {
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
                            From employee responses to organisational intelligence
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                            Workforce assessments can provide value at more than one level.
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
