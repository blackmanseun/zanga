'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiAward,
    FiUsers,
    FiDollarSign,
    FiGlobe,
    FiTag,
    FiCpu,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

type FaqItem = {
    Icon: IconType
    question: string
    answer: React.ReactNode
}

const faqs: FaqItem[] = [
    {
        Icon: FiAward,
        question: 'Do I need to be certified to use Zanga assessments?',
        answer: (
            <>Certification requirements depend on the assessment and the type of partnership. Some tools may require practitioner training before they can be administered or debriefed professionally. <strong>Zanga</strong> will confirm the relevant requirements during onboarding.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Can I use Zanga assessments with my own clients?',
        answer: (
            <>Yes. This is one of the core purposes of the Coaches &amp; Practitioners model. Approved practitioners can use eligible <strong>Zanga</strong> assessments as part of their own coaching, consulting or development engagements.</>
        ),
    },
    {
        Icon: FiDollarSign,
        question: 'Does Zanga offer referral commissions?',
        answer: (
            <><strong>Zanga</strong> can structure commercial arrangements for approved referral partners. The specific model, eligibility criteria and commercial terms are agreed as part of the partnership.</>
        ),
    },
    {
        Icon: FiGlobe,
        question: 'Can I become the exclusive Zanga partner in my country?',
        answer:
            'Territorial or exclusive arrangements would be considered only for selected reseller or franchise partnerships and would depend on market potential, partner capability and agreed performance expectations.',
    },
    {
        Icon: FiTag,
        question: 'Does Zanga offer white-label solutions?',
        answer: (
            <>Selected <strong>Zanga</strong> products, reports or delivery models may be available on a white-label basis depending on the requirements, scale and technical configuration of the engagement.</>
        ),
    },
    {
        Icon: FiCpu,
        question: 'Can technology companies integrate Zanga into their platforms?',
        answer: (
            <><strong>Zanga</strong> is open to technology and embedded partnerships where there is a strong strategic fit. Available integration options will depend on the capabilities of the relevant Zanga product and platform at the time of engagement.</>
        ),
    },
]

export default function BecomePartnerFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="py-20 px-4 sm:px-6 lg:px-8">
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
