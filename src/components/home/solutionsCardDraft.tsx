import React from 'react'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Solution = {
    category: string
    description: string
    cta: string
}

const solutions: Solution[] = [
    {
        category: 'Leadership Assessments',
        description: 'Understand current capability, future potential and leadership-development priorities.',
        cta: 'Explore Leadership Assessments',
    },
    {
        category: 'Psychometric Testing',
        description: 'Improve hiring, role-fit and talent decisions through evidence-based insight.',
        cta: 'Explore Psychometric Testing',
    },
    {
        category: 'Engagement Surveys',
        description: 'Measure employee sentiment, culture, engagement and the drivers of retention.',
        cta: 'Explore Engagement Surveys',
    },
    {
        category: 'Training & Development',
        description: 'Turn assessment insight into practical individual, team and organisational development.',
        cta: 'Explore Training & Development',
    },
]

export default function SolutionCards() {
    return (
        <section className="bg-[url('/images/footer_bg.webp')] bg-contain py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="md:max-w-[80%] mx-auto">
                <div className="md:text-center mb-16">
          <span className="text-olive text-md uppercase tracking-widest font-Montserrat font-semibold">
           ASSESSMENT AUTHORITY
          </span>
                    <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        World-class leadership development. Grounded in African context.
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-Montserrat mt-5 max-w-3xl mx-auto">
                        Generic leadership tools often overlook the relational dynamics, communication patterns and
                        cultural values that shape performance in high-context workplaces. <strong>Zanga</strong> combines robust
                        assessment science with contextual intelligence to help organisations identify, develop and
                        retain leaders who can succeed in the environments where they actually work.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {solutions.map((solution, i) => {
                            const isLeft = i % 2 === 0
                            const card = (
                                <Reveal x={isLeft ? -40 : 40} y={0} delayMs={80}>
                                    <div
                                        className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                                        <h3 className="text-[24px] font-bold text-gray-700 font-MonaSans mb-2">{solution.category}</h3>
                                        <p className="text-md text-gray-600 leading-relaxed font-Montserrat mb-4">
                                            {solution.description}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-1.5 text-md font-semibold text-terracotta font-Montserrat hover:underline"
                                        >
                                            {solution.cta}
                                            <FiArrowRight size={14} className="shrink-0" aria-hidden="true"/>
                                        </Link>
                                    </div>
                                </Reveal>
                            )

                            return (
                                <div
                                    key={solution.category}
                                    className="flex flex-col md:grid md:grid-cols-[1fr_56px_1fr] gap-4 md:gap-6"
                                >
                                    <div
                                        className="order-2 md:order-none md:col-start-1 md:self-center">{isLeft && card}</div>
                                    <div
                                        className="order-1 md:order-none md:col-start-2 hidden md:flex flex-col md:items-center md:h-full">
                                        <div
                                            className={`hidden md:block flex-1 w-px -mt-3 ${i > 0 ? 'bg-gray-200' : 'bg-transparent'}`}
                                            aria-hidden="true"
                                        />
                                        <span
                                            className="w-14 h-14 shrink-0 rounded-full bg-white border-2 border-olive flex items-center justify-center text-olive font-bold font-MonaSans z-10">
                      {i + 1}
                    </span>
                                        <div
                                            className={`hidden md:block flex-1 w-px -mb-3 ${
                                                i < solutions.length - 1 ? 'bg-gray-200' : 'bg-transparent'
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div
                                        className="order-2 md:order-none md:col-start-3 md:self-center">{!isLeft && card}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
