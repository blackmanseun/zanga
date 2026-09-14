'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiUsers,
    FiTrendingUp,
    FiUser,
    FiLayers,
    FiHelpCircle,
    FiFileText,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiUsers,
        question: 'What is the difference between the Leadership Competency Assessment and the 360° Feedback Leadership Assessment?',
        answer: (
            <>The Leadership Competency Assessment is a self-assessment that gives the individual a structured view of their own leadership capability. The 360&deg; Feedback Leadership Assessment adds feedback from managers, peers and direct reports, allowing the leader to compare their own perception with how their leadership is experienced by others.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'Which assessment should we use for succession planning?',
        answer: (
            <>The Leadership Potential Assessment is particularly useful when the objective is to understand future capability and readiness for greater responsibility. Depending on the organisation&apos;s needs, it may also be combined with competency assessment, 360&deg; feedback or other talent data.</>
        ),
    },
    {
        Icon: FiUser,
        question: 'Can the assessments be used for individual leaders?',
        answer: (
            <>Yes. Some <strong>Zanga</strong> leadership assessments can be completed by individual leaders for personal development. Organisations can also use them across leadership teams, talent cohorts or enterprise-wide programmes.</>
        ),
    },
    {
        Icon: FiLayers,
        question: 'Can Zanga assess an entire leadership team?',
        answer: (
            <>Yes. <strong>Zanga</strong> can support cohort-based leadership assessment programmes and provide aggregated insights that help organisations understand common strengths, capability gaps and development priorities across the group.</>
        ),
    },
    {
        Icon: FiHelpCircle,
        question: 'Do assessment results determine whether someone should be promoted?',
        answer: (
            <>No. Assessments should support leadership and talent decisions rather than replace professional judgement. Results are most useful when considered alongside performance, experience, organisational requirements and other relevant evidence.</>
        ),
    },
    {
        Icon: FiFileText,
        question: 'What happens after the assessment?',
        answer: (
            <>Assessment insight can be used to create individual development plans, inform coaching, shape leadership-development programmes or support broader talent and succession discussions. <strong>Zanga</strong> can also support the development journey beyond an assessment.</>
        ),
    },
]

export default function LeadershipAssessmentsFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <span className="text-olive text-sm tracking-widest font-Montserrat font-semibold">
                                FAQs
                            </span>
                            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                                Frequently Asked Questions
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
