import React from 'react'
import Link from 'next/link'
import {FiArrowRight, FiUsers, FiClipboard, FiMessageCircle, FiBookOpen} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type Solution = {
    category: string
    description: string
    cta: string
    Icon: IconType
}

const solutions: Solution[] = [
    {
        category: 'Leadership Assessments',
        description: 'Understand current capability, future potential and leadership-development priorities.',
        cta: 'Explore Leadership Assessments',
        Icon: FiUsers,
    },
    {
        category: 'Psychometric Testing',
        description: 'Improve hiring, role-fit and talent decisions through evidence-based insight.',
        cta: 'Explore Psychometric Testing',
        Icon: FiClipboard,
    },
    {
        category: 'Engagement Surveys',
        description: 'Measure employee sentiment, culture, engagement and the drivers of retention.',
        cta: 'Explore Engagement Surveys',
        Icon: FiMessageCircle,
    },
    {
        category: 'Training & Development',
        description: 'Turn assessment insight into practical individual, team and organisational development.',
        cta: 'Explore Training & Development',
        Icon: FiBookOpen,
    },
]

export default function SolutionCards() {
    return (
        <section className="bg-contain md:pb-20 pb-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="md:text-center mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           ASSESSMENT AUTHORITY
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        World-Class Leadership Development. Grounded in African Context.
                    </h2>
                    <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed font-Montserrat mt-5 max-w-3xl mx-auto">
                        Generic leadership tools often overlook the relational dynamics, communication patterns and
                        cultural values that shape performance in high-context workplaces. <strong>Zanga</strong> combines robust
                        assessment science with contextual intelligence to help organisations identify, develop and
                        retain leaders who can succeed in the environments where they actually work.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, i) => (
                        <Reveal key={solution.category} y={24} delayMs={i * 80}>
                            <div className={`border border-slate-200 p-4 rounded-xl bg-[#FAF8F6] group transition-all duration-500 ease-in-out lg:hover:shadow-lg lg:hover:border-slate-300 ${i % 2 === 0 ? 'lg:hover:-rotate-[10deg]' : 'lg:hover:rotate-[10deg]'}`}>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 transition-transform duration-300 ease-in-out lg:group-hover:scale-[1.2]">
                                    <solution.Icon size={22} className="text-gray-700" aria-hidden="true"/>
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 font-MonaSans mb-2">{solution.category}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-Montserrat mb-3">
                                    {solution.description}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta font-Montserrat hover:underline"
                                >
                                    {solution.cta}
                                    <FiArrowRight size={13} className="shrink-0" aria-hidden="true"/>
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
