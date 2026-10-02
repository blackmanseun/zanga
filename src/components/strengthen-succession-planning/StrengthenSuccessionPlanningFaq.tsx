'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiAward,
    FiChevronDown,
    FiGitBranch,
    FiLayers,
    FiStar,
    FiTrendingUp,
    FiUsers,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiGitBranch,
        question: 'What is the difference between leadership potential and current performance?',
        answer: (
            <>Current performance reflects how successful someone is in their present role. Leadership potential focuses on their capacity and readiness to take on greater or more complex responsibility in the future. The two are related, but not the same.</>
        ),
    },
    {
        Icon: FiAward,
        question: 'Which assessment is best for succession planning?',
        answer: (
            <>The Leadership Assessments and Fit by <strong>Zanga</strong> bundle is especially useful for understanding future capability and readiness, as well as other talent information.</>
        ),
    },
    {
        Icon: FiStar,
        question: 'Can Zanga help identify high-potential employees?',
        answer: (
            <>Yes. <strong>Zanga</strong> supports organisations to assess leadership potential and readiness across identified talent pools, helping distinguish strong current performers from those with broader future capacity.</>
        ),
    },
    {
        Icon: FiLayers,
        question: 'Can Zanga support succession planning across multiple roles or business units?',
        answer: (
            <>Yes. <strong>Zanga</strong> can work with cohorts across functions, levels or business units and provide aggregated insight that helps organisations understand succession depth and leadership-pipeline gaps.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Can assessment results be used on their own to make succession decisions?',
        answer: (
            <>No. Assessment should support, not replace, professional judgement. Results are most useful when considered alongside performance history, experience, organisational needs and other relevant evidence.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'What happens after potential successors are identified?',
        answer: (
            <>Assessment insight can be used to create targeted development plans, coaching, stretch assignments or leadership programmes to help individuals build the capability required for future roles.</>
        ),
    },
]

export default function StrengthenSuccessionPlanningFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
              <span
                  className="text-olive text-sm tracking-widest font-Montserrat font-semibold">
                  FAQs
              </span>
                            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                                Frequently asked questions
                            </h2>
                        </div>
                    </div>
                </div>

                <div>
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
                        <span
                            className="w-9 h-9 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-olive">
                          <faq.Icon size={16} aria-hidden="true"/>
                        </span>
                                                <span
                                                    className="flex-1 text-sm font-semibold text-gray-900 font-Montserrat">
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
                </div>
                <div className="mt-14 shrink-0">
                    <p className="text-gray-500 font-Montserrat mb-2">
                        Can&apos;t find what you&apos;re looking for?
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-gray-900 font-semibold font-Montserrat hover:text-olive transition-colors"
                    >
                        Talk to our team
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}
