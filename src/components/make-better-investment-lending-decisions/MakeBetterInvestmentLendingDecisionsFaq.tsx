'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiAlertCircle,
    FiArrowRight,
    FiBriefcase,
    FiChevronDown,
    FiClipboard,
    FiLayers,
    FiMessageCircle,
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
        Icon: FiLayers,
        question: 'Does Diligence by Zanga replace financial or credit analysis?',
        answer: (
            <>No. Diligence by <strong>Zanga</strong> is designed to complement conventional financial, legal, operational and commercial diligence by adding structured insight into founder and management capability.</>
        ),
    },
    {
        Icon: FiClipboard,
        question: 'What does Diligence by Zanga assess?',
        answer: (
            <>The exact assessment pathway depends on the engagement, but it can include founder or management-team capability, leadership strengths, behavioural patterns, potential development areas and people-related risk indicators.</>
        ),
    },
    {
        Icon: FiBriefcase,
        question: 'Is Diligence by Zanga suitable for SME lending?',
        answer: (
            <>Yes. It is particularly relevant where founder or management capability is an important part of understanding business resilience and execution risk.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Can Zanga assess an entire management team?',
        answer: (
            <>Yes. Depending on the engagement, <strong>Zanga</strong> can assess founders, individual executives or broader management teams and provide both individual and aggregated insight.</>
        ),
    },
    {
        Icon: FiAlertCircle,
        question: 'Can the results be used to decline a loan or investment?',
        answer: (
            <>Assessment insight should not be used as a stand-alone decision rule. It is most useful when considered alongside the institution&apos;s existing credit, investment and risk processes.</>
        ),
    },
    {
        Icon: FiMessageCircle,
        question: 'Is Diligence by Zanga available as a self-service product?',
        answer: (
            <>Diligence by <strong>Zanga</strong> is currently positioned for selected enterprise and pilot engagements rather than self-service use. Institutions can speak with the <strong>Zanga</strong> team to define the appropriate scope.</>
        ),
    },
]

export default function MakeBetterInvestmentLendingDecisionsFaq() {
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
