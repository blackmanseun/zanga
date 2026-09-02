'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiLayers,
    FiRepeat,
    FiSliders,
    FiBarChart2,
    FiShield,
    FiTrendingUp,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiLayers,
        question: 'Is Pulse just an employee engagement survey?',
        answer:
            'No. Employee engagement is one important application, but Pulse is intended to provide a broader view of workforce sentiment. Depending on the programme, organisations can explore culture, leadership experience, retention, communication, trust and other aspects of employee experience.',
    },
    {
        Icon: FiRepeat,
        question: 'How often should we survey employees?',
        answer: (
            <>There is no single correct frequency. Some organisations need an annual comprehensive survey supported by shorter pulse checks, while others may need targeted listening around a particular change or workforce issue. <strong>Zanga</strong> can recommend an approach based on what you are trying to understand.</>
        ),
    },
    {
        Icon: FiSliders,
        question: 'Can we customise the questions?',
        answer:
            'Depending on the engagement, Pulse can combine core measurement areas with questions relevant to your organisation, workforce or current priorities. Customisation should retain enough consistency to make the resulting data meaningful and comparable.',
    },
    {
        Icon: FiBarChart2,
        question: 'Can we compare different teams or business units?',
        answer:
            'For organisational programmes, reporting can be structured to help authorised users understand relevant differences across teams, departments, locations or other agreed employee groups, subject to appropriate confidentiality thresholds.',
    },
    {
        Icon: FiShield,
        question: 'How is employee confidentiality protected?',
        answer: (
            <>Employee feedback is most valuable when people feel safe to respond honestly. Pulse by <strong>Zanga</strong> is designed to protect respondent confidentiality through appropriate survey design, controlled access to results and reporting practices that avoid identifying individuals in small groups. Organisational reporting is presented in aggregate so leaders can understand patterns without compromising employee trust.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'What happens after the survey?',
        answer:
            'Pulse is designed to support action, not simply measurement. Results can be translated into organisational priorities, management conversations, leadership interventions and follow-up measurement so organisations can track whether the employee experience is improving.',
    },
]

export default function PulseFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
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
                                    <div key={faq.question} className="rounded-xl border border-gray-300 p-5">
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
