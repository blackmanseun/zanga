'use client'

import React, { useState } from 'react'
import {
    FiArrowRight,
    FiChevronDown,
    FiLayers,
    FiUsers,
    FiPhone,
    FiLock,
    FiMessageCircle,
    FiFileText,
    FiGitPullRequest,
    FiClock,
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
        Icon: FiLayers,
        question: 'Is Voice by Zanga just a complaints hotline?',
        answer: [
            'No. A hotline can be one channel within Voice, but the product is broader than intake alone.',
            'Voice can support how concerns are received, recorded, categorised, escalated, tracked and analysed so stakeholder feedback becomes useful organisational insight.',
        ],
    },
    {
        Icon: FiUsers,
        question: 'Who can use Voice by Zanga?',
        answer: [
            'Voice can be configured for communities, farmers, suppliers, contractors, customers, agents, beneficiaries, citizens, employees and other stakeholder groups, depending on who the organisation needs to hear from.',
        ],
    },
    {
        Icon: FiPhone,
        question: 'Can stakeholders use Voice without reliable internet access?',
        answer: [
            'Depending on the implementation, Voice can incorporate phone, messaging or assisted channels alongside digital options, allowing the listening approach to reflect how stakeholders actually communicate.',
        ],
    },
    {
        Icon: FiLock,
        question: 'Can people report confidentially or anonymously?',
        answer: [
            'Depending on the programme design, confidential or anonymous reporting options can be incorporated where appropriate. The exact process should be agreed during implementation.',
        ],
    },
    {
        Icon: FiMessageCircle,
        question: 'Can Voice support employee speak-up?',
        answer: [
            'Yes. Voice can be configured to provide employees and contractors with an additional channel for workplace concerns, welfare issues or matters they may not feel comfortable raising through ordinary management channels.',
        ],
    },
    {
        Icon: FiFileText,
        question: 'Can Voice support ESG, safeguarding or funder reporting?',
        answer: [
            'Voice can create a clearer evidence base around stakeholder feedback, issue handling and resolution.',
            'Where an organisation has specific ESG, safeguarding or funder-reporting requirements, the reporting approach can be discussed and configured around the engagement. Voice should not be presented as automatically satisfying a particular standard unless that has been formally validated.',
        ],
    },
    {
        Icon: FiGitPullRequest,
        question: 'What happens after a concern is raised?',
        answer: [
            'The issue is logged and categorised, then routed according to the agreed workflow. Its status can be tracked as it moves through review, response and resolution.',
        ],
    },
    {
        Icon: FiClock,
        question: 'How quickly can Voice be deployed?',
        answer: [
            'Deployment depends on the stakeholder groups involved, the channels required, the case categories, escalation workflows and reporting needs.',
            <><strong>Zanga</strong> will define the implementation scope and rollout plan with the organisation before launch.</>,
        ],
    },
]

export default function VoiceFaq() {
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
