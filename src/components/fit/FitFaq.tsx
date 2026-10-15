'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiLayers,
    FiMessageCircle,
    FiClock,
    FiSliders,
    FiAward,
    FiUsers,
    FiMonitor,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode[]
}

const faqs: FaqItem[] = [
    {
        Icon: FiLayers,
        question: 'Is Fit by Zanga a psychometric test?',
        answer: [
            'Psychometric assessment can form part of Fit, but the product is broader than a single test. Depending on the role and engagement, Fit can combine behavioural or personality insight with role requirements and, for senior appointments, relevant leadership assessment.',
        ],
    },
    {
        Icon: FiMessageCircle,
        question: 'Does Fit replace interviews?',
        answer: [
            "No. Fit is designed to strengthen hiring decisions, not make them. Assessment insight should be considered alongside interviews, relevant experience, references and the organisation's own selection criteria.",
        ],
    },
    {
        Icon: FiClock,
        question: 'How long does a candidate assessment take?',
        answer: [
            'Completion time depends on the assessment used. Assessments are completed online and are designed to be straightforward, with no specialist preparation required.',
        ],
    },
    {
        Icon: FiSliders,
        question: 'Can Fit be configured for a specific role?',
        answer: [
            'Depending on the engagement, the assessment approach can be aligned to the requirements of a particular role, level or function so the resulting insight is relevant to the decision being made.',
        ],
    },
    {
        Icon: FiAward,
        question: 'Can Fit be used for senior and executive appointments?',
        answer: [
            'Yes. For senior positions, relevant psychometric assessment can be combined with leadership assessment to provide a deeper view of capability, behaviour and areas requiring further exploration.',
        ],
    },
    {
        Icon: FiUsers,
        question: 'Can Fit support high-volume recruitment?',
        answer: [
            'Yes. Structured assessment can be used across larger candidate pools to support more consistent screening and comparison. The reporting approach will depend on the scale and design of the recruitment programme.',
        ],
    },
    {
        Icon: FiMonitor,
        question: 'What does the candidate experience?',
        answer: [
            'Candidates complete the assessment online through a straightforward digital process. Clear instructions should be provided before they begin, and no specialist preparation is required.',
        ],
    },
]

export default function FitFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

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
                                                <div className="space-y-3 pl-[52px]">
                                                    {faq.answer.map((paragraph, p) => (
                                                        <p key={p} className="text-sm text-gray-500 font-Montserrat leading-relaxed">
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
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
