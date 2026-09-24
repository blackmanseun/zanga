'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiAward,
    FiBarChart2,
    FiChevronDown,
    FiGrid,
    FiHelpCircle,
    FiLayers,
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
        Icon: FiHelpCircle,
        question: 'Do we need to assess leaders before putting them into a development programme?',
        answer: (
            <>Not always, but assessment can make development more focused. It helps identify the capabilities that require the greatest attention so organisations can target coaching and learning more effectively.</>
        ),
    },
    {
        Icon: FiGrid,
        question: 'Which leadership assessment should we use?',
        answer: (
            <>The right assessment depends on what you are trying to understand. The Executive Leadership Assessment focuses on current capability, the 360 Feedback Leadership Assessment adds feedback from others, and the Leadership Potential Assessment is designed to support future-readiness and succession decisions.</>
        ),
    },
    {
        Icon: FiLayers,
        question: 'Can Zanga combine assessment and leadership development?',
        answer: (
            <>Yes. Assessment insight can be used to shape development plans, coaching and leadership programmes so that development begins with clear evidence of what each leader or cohort needs.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Can Zanga support leadership development across a large organisation?',
        answer: (
            <>Yes. <strong>Zanga</strong> can support leadership cohorts and provide aggregated insight into common strengths, capability gaps and development priorities across teams, levels or functions.</>
        ),
    },
    {
        Icon: FiAward,
        question: 'Can Zanga support executive development?',
        answer: (
            <>Yes. Leadership assessment, 360 feedback and coaching can be used to support senior and executive leaders, depending on the objectives of the engagement.</>
        ),
    },
    {
        Icon: FiBarChart2,
        question: 'Can we measure progress after development?',
        answer: (
            <>Where appropriate, follow-up assessment or repeat measurement can help organisations understand how leadership capability or perception changes over time.</>
        ),
    },
]

export default function DevelopStrongerLeadersFaq() {
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
