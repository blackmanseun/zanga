'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiGlobe,
    FiPieChart,
    FiShield,
    FiSliders,
    FiTrendingUp,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiGlobe,
        question: 'Can Zanga support institutions with large branch networks?',
        answer: (
            <>Yes. Assessment, engagement and workforce-intelligence programmes can be structured across branches, regions, functions and subsidiaries, with reporting designed to show both institution-wide patterns and relevant differences between groups.</>
        ),
    },
    {
        Icon: FiSliders,
        question: 'Can assessments be aligned to our internal competency framework?',
        answer: (
            <>Depending on the engagement, <strong>Zanga</strong> can work with institutions to align assessment and reporting approaches with existing competency frameworks, leadership priorities and internal talent processes.</>
        ),
    },
    {
        Icon: FiShield,
        question: 'How does Zanga handle confidentiality in employee reporting channels?',
        answer: (
            <><strong>Voice by Zanga</strong> can support confidential reporting, controlled access and structured escalation. The specific confidentiality, anonymity and case-management configuration should be agreed as part of the implementation so employees understand how information will be handled.</>
        ),
    },
    {
        Icon: FiPieChart,
        question: 'Can executives and boards receive consolidated insight?',
        answer:
            'Yes. Organisational engagements can include aggregated reporting and executive-level summaries that help leadership teams understand capability, engagement, culture and other relevant workforce patterns.',
    },
    {
        Icon: FiTrendingUp,
        question: 'Is Diligence by Zanga available now?',
        answer: (
            <><strong>Diligence by Zanga</strong> is currently positioned for selected enterprise and pilot engagements rather than self-serve use. Institutions interested in founder, borrower or portfolio intelligence can discuss the appropriate scope directly with <strong>Zanga</strong>.</>
        ),
    },
]

export default function FinancialInstitutionsFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

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
