import React from 'react'
import { FiUser, FiUsers, FiGitBranch, FiAward } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type AccentColor = 'olive-dark' | 'olive' | 'terracotta' | 'terracotta-dark'

type Moment = {
    title: string
    description: string
    recommended: string
    color: AccentColor
    Icon: IconType
}

const moments: Moment[] = [
    {
        title: 'Developing Emerging Leaders',
        description: 'Identify strengths early and give rising talent a clearer development pathway.',
        recommended: 'Leadership Competency Assessment',
        color: 'olive-dark',
        Icon: FiUser,
    },
    {
        title: 'Developing Senior Leaders',
        description: 'Give established leaders a more rounded understanding of how their leadership is experienced.',
        recommended: '360° Feedback Leadership Assessment',
        color: 'olive',
        Icon: FiUsers,
    },
    {
        title: 'Building a Succession Pipeline',
        description: 'Identify individuals with the potential and readiness to move into more complex leadership roles.',
        recommended: 'Leadership Potential Assessment',
        color: 'terracotta',
        Icon: FiGitBranch,
    },
    {
        title: 'Making a Business-Critical Appointment',
        description: 'Add deeper leadership evidence to executive recruitment and succession decisions.',
        recommended: 'Executive Leadership Assessment',
        color: 'terracotta-dark',
        Icon: FiAward,
    },
]

const badgeClasses: Record<AccentColor, string> = {
    'olive-dark': 'text-olive-dark',
    olive: 'text-olive',
    terracotta: 'text-terracotta',
    'terracotta-dark': 'text-terracotta-dark',
}

export default function LeadershipAssessmentsMoments() {
    return (
        <section className="bg-contain md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="md:text-center mb-16">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Find Your Fit
                    </span>
                    <h2 className="hidden md:block text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for Different Leadership Moments
                    </h2>
                    <h2 className="block md:hidden text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for different leadership moments
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {moments.map((moment, i) => (
                        <Reveal key={moment.title} y={24} delayMs={i * 80} className="h-full">
                            <div className={`h-full flex flex-col border border-slate-200 p-4 rounded-xl bg-[#FAF8F6] group transition-all duration-500 ease-in-out lg:hover:shadow-lg lg:hover:border-slate-300 ${i % 2 === 0 ? 'lg:hover:-rotate-[10deg]' : 'lg:hover:rotate-[10deg]'}`}>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 transition-transform duration-300 ease-in-out lg:group-hover:scale-[1.2]">
                                    <moment.Icon size={22} className="text-gray-700" aria-hidden="true"/>
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 font-MonaSans mb-2">{moment.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-Montserrat mb-4">
                                    {moment.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-sm text-gray-500 font-Montserrat">Recommended</span>
                                    <span className={`mt-2 block text-xs font-semibold font-Montserrat ${badgeClasses[moment.color]}`}>
                                      {moment.recommended}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
