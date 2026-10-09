'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiClock,
    FiFileText,
    FiGlobe,
    FiMessageCircle,
    FiShield,
    FiUsers,
    FiUserCheck,
    FiWifiOff,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiMessageCircle,
        question: 'Can Zanga support beneficiary and community feedback?',
        answer: (
            <>Yes. <strong>Voice by Zanga</strong> can support structured stakeholder listening across beneficiaries, communities, partners and other relevant groups, depending on the engagement design.</>
        ),
    },
    {
        Icon: FiShield,
        question: 'Can Zanga support confidential reporting?',
        answer: (
            <><strong>Voice by Zanga</strong> can support confidential feedback and controlled access to information. The exact configuration should be defined during implementation based on the needs of the programme and stakeholder group.</>
        ),
    },
    {
        Icon: FiGlobe,
        question: 'Can Zanga support multi-country programmes?',
        answer: (
            <>Yes. <strong>Zanga</strong> can structure assessment, engagement and stakeholder-listening programmes across multiple locations, with reporting organised by programme, location or other relevant groupings.</>
        ),
    },
    {
        Icon: FiWifiOff,
        question: 'Can assessments be delivered in low-connectivity settings?',
        answer:
            'Yes. Voice and workforce tools support asynchronous data collection and low-bandwidth channels, allowing field teams and community members to participate reliably regardless of infrastructure.',
    },
    {
        Icon: FiUserCheck,
        question: 'Can Zanga assess local implementing partners?',
        answer:
            'Yes. Leadership and organisational assessments can be used to better understand the strengths and development needs of local partners or grantee organisations.',
    },
    {
        Icon: FiUsers,
        question: 'Can Zanga support workforce engagement across dispersed teams?',
        answer: (
            <>Yes. <strong>Pulse by Zanga</strong> can support employee engagement and workforce-listening programmes across country offices, programme teams and other distributed groups.</>
        ),
    },
    {
        Icon: FiFileText,
        question: 'Can Zanga reporting support programme and donor reporting?',
        answer: (
            <><strong>Zanga</strong> can help structure leadership, workforce and stakeholder data into clearer reports and organisational insights. The exact reporting format should be agreed based on the programme&apos;s reporting requirements.</>
        ),
    },
    {
        Icon: FiClock,
        question: 'How quickly can Zanga be deployed for a new programme?',
        answer: (
            <>Deployment depends on the scope of the engagement, the number of locations or stakeholder groups involved, and any customisation required. <strong>Zanga</strong> works with the organisation to define the programme, configure the appropriate assessment or listening tools, and agree reporting and implementation requirements before launch.</>
        ),
    },
]

export default function DevelopmentOrganisationsFaq() {
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
