'use client'

import React, { useState } from 'react'
import {
    FiArrowRight,
    FiChevronDown,
    FiClock,
    FiLayers,
    FiSearch,
    FiCalendar,
    FiEye,
    FiBriefcase,
    FiTrendingUp,
    FiSettings,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import OpenModalButton from '@/components/modal/OpenModalButton'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode[]
}

const faqs: FaqItem[] = [
    {
        Icon: FiClock,
        question: 'Is Diligence by Zanga available now?',
        answer: [
            <>Diligence is currently in early access. <strong>Zanga</strong> is working with selected investors and lenders to refine how the product is delivered across investment, lending and portfolio contexts.</>,
        ],
    },
    {
        Icon: FiLayers,
        question: 'Does Diligence replace financial or commercial due diligence?',
        answer: [
            'No. Diligence adds structured insight into founder and management capability. It is designed to complement financial, commercial, legal and operational diligence, not replace them.',
        ],
    },
    {
        Icon: FiSearch,
        question: 'What kind of insight does Diligence provide?',
        answer: [
            'Depending on the engagement, Diligence can provide insight into leadership strengths, behavioural tendencies, management depth, team dynamics, key-person dependency and development priorities.',
        ],
    },
    {
        Icon: FiCalendar,
        question: 'Can Diligence be used before an investment or loan decision?',
        answer: [
            'Yes. Depending on the scope and timing, founder or management assessment can be incorporated into an investment or credit process.',
        ],
    },
    {
        Icon: FiEye,
        question: 'Do founders and borrowers know they are being assessed?',
        answer: [
            'Yes. Assessment should be completed with the knowledge and participation of the people being assessed. How findings are shared and used should be agreed as part of the engagement.',
        ],
    },
    {
        Icon: FiBriefcase,
        question: 'Can Diligence be used for SME lending?',
        answer: [
            'Yes. It can be particularly relevant where the founder or management team is closely linked to business performance and the lender wants a clearer view of management capability alongside conventional credit information.',
        ],
    },
    {
        Icon: FiTrendingUp,
        question: 'Can Diligence be used after capital is deployed?',
        answer: [
            'Yes. Findings can inform founder coaching, management development, executive recruitment, succession planning and other post-investment support.',
        ],
    },
    {
        Icon: FiSettings,
        question: 'Is Diligence a self-service product?',
        answer: [
            "Not currently. Diligence is positioned for selected enterprise, institutional and early-access engagements, with the scope designed around the capital provider's decision or portfolio need.",
        ],
    },
]

export default function DiligenceFaq() {
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
