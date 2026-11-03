'use client'

import React, { useState } from 'react'
import {
    FiArrowRight,
    FiChevronDown,
    FiUsers,
    FiLayers,
    FiSettings,
    FiBarChart2,
    FiRepeat,
    FiGlobe,
    FiFileText,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import OpenModalButton from '@/components/modal/OpenModalButton'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiUsers,
        question: 'What is the difference between an Employee Engagement Survey and a Culture Assessment?',
        answer: (
            <>An Employee Engagement Survey focuses on how employees are experiencing the organisation, including engagement, sentiment and the factors influencing that experience. A Culture Assessment looks more specifically at how organisational values, behaviours and ways of working are experienced in practice. The two can also be used together where an organisation needs a broader view.</>
        ),
    },
    {
        Icon: FiLayers,
        question: 'Can Zanga assess our entire workforce?',
        answer: (
            <>Yes. <strong>Zanga</strong> can structure workforce and engagement programmes across teams, functions and business units, with reporting designed to support organisational decision-making.</>
        ),
    },
    {
        Icon: FiSettings,
        question: 'Can workforce assessments be customised?',
        answer: (
            <>Yes. Depending on the engagement, <strong>Zanga</strong> can tailor survey questions, assessment design and reporting around specific organisational priorities.</>
        ),
    },
    {
        Icon: FiBarChart2,
        question: 'Can we compare results across different teams or employee groups?',
        answer: (
            <>Yes. Comparative reporting can be included where the group sizes and programme design allow meaningful interpretation.</>
        ),
    },
    {
        Icon: FiRepeat,
        question: 'Can Zanga support recurring workforce measurement?',
        answer: (
            <>Yes. Engagement and workforce listening can be structured as recurring programmes, including annual surveys, periodic pulse checks or follow-up measurement.</>
        ),
    },
    {
        Icon: FiGlobe,
        question: 'How does Zanga account for cultural context?',
        answer: (
            <><strong>Zanga</strong> combines structured workforce data with cultural intelligence designed for African and other high-context workplaces, helping organisations understand not only what the data says but what it may mean within the environment where people work.</>
        ),
    },
    {
        Icon: FiFileText,
        question: 'What happens after we receive the results?',
        answer: (
            <><strong>Zanga</strong> can support organisations in interpreting the findings, identifying priority areas and determining appropriate next steps, which may include leadership action, team interventions, culture initiatives, development programmes or follow-up measurement.</>
        ),
    },
]

export default function WorkforceAssessmentsFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section
            id="assessment-faqs"
            className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <span className="text-olive text-sm tracking-widest font-Montserrat font-semibold">
                                FAQs
                            </span>
                            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                                Frequently asked questions
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {[0, 1].map((colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-4">
                            {faqs.map((faq, i) => {
                                if (i % 2 !== colIndex) return null
                                const open = openIndex === i
                                return (
                                    <div key={faq.question}
                                         className="rounded-xl border border-gray-300 p-5">
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(open ? null : i)}
                                            aria-expanded={open}
                                            className="w-full flex items-center gap-4 text-left"
                                        >
                                            <span className="w-9 h-9 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-olive">
                                                <faq.Icon size={16} aria-hidden="true"/>
                                            </span>
                                            <span className="flex-1 text-sm font-semibold text-gray-900 font-Montserrat">
                                                {faq.question}
                                            </span>
                                            <FiChevronDown
                                                size={18}
                                                aria-hidden="true"
                                                className={`shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-sm text-gray-500 font-Montserrat leading-relaxed pl-[52px]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
                <div className="mt-14 shrink-0">
                    <p className="text-gray-500 font-Montserrat mb-2">
                        Can&apos;t find what you&apos;re looking for?
                    </p>
                    <OpenModalButton
                        modal="book-a-demo"
                        className="inline-flex items-center gap-2 text-gray-900 font-semibold font-Montserrat hover:text-olive transition-colors"
                    >
                        Talk to our team
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </OpenModalButton>
                </div>
            </div>
        </section>
    )
}
