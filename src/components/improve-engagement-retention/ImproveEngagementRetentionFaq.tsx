'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiBarChart2,
    FiCalendar,
    FiCheckCircle,
    FiChevronDown,
    FiLock,
    FiSliders,
    FiUserMinus,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiCalendar,
        question: 'How often should we measure employee engagement?',
        answer: (
            <>There is no single ideal frequency. Some organisations benefit from an annual engagement survey supported by shorter pulse checks, while others may need more targeted listening around specific workforce issues or periods of change.</>
        ),
    },
    {
        Icon: FiUserMinus,
        question: 'Can Zanga help us understand why employees are leaving?',
        answer: (
            <><strong>Zanga</strong> can help identify patterns and factors associated with disengagement and retention risk. This can include employee sentiment, management experience, communication, culture and other workplace factors relevant to the organisation.</>
        ),
    },
    {
        Icon: FiBarChart2,
        question: 'Can we compare results across teams or locations?',
        answer: (
            <>Yes. Depending on the scope of the programme, reporting can be structured to compare relevant groups such as teams, functions, locations or business units, subject to appropriate confidentiality safeguards.</>
        ),
    },
    {
        Icon: FiSliders,
        question: 'Can Pulse by Zanga be customised?',
        answer: (
            <>Depending on the engagement, <strong>Zanga</strong> can combine core engagement and culture measures with questions tailored to the organisation&apos;s priorities.</>
        ),
    },
    {
        Icon: FiLock,
        question: 'How is employee confidentiality protected?',
        answer: (
            <>Employee feedback is most valuable when people feel safe to respond honestly. Pulse by Zanga is designed to protect respondent confidentiality through appropriate survey design, controlled access to results and reporting practices that avoid identifying individuals in small groups. Organisational reporting is presented in aggregate so leaders can understand patterns without compromising employee trust.</>
        ),
    },
    {
        Icon: FiCheckCircle,
        question: 'What happens after the survey?',
        answer: (
            <><strong>Zanga</strong> can help translate results into clear priorities, management conversations and follow-up actions. Where appropriate, repeat measurement can then be used to understand whether employee experience is improving over time.</>
        ),
    },
]

export default function ImproveEngagementRetentionFaq() {
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
