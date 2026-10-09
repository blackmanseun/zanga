'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiBriefcase,
    FiChevronDown,
    FiGlobe,
    FiLayers,
    FiSearch,
    FiTrendingUp,
    FiUserCheck,
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
        question: 'Does Diligence by Zanga replace financial or legal diligence?',
        answer: (
            <>No. <strong>Diligence by Zanga</strong> is designed to complement existing financial, commercial, legal and operational diligence by adding structured insight into founder and management capability. The scope and timing can be agreed around the investment process.</>
        ),
    },
    {
        Icon: FiSearch,
        question: 'What kind of insight does Diligence by Zanga provide?',
        answer:
            'Depending on the engagement, the assessment can provide insight into leadership strengths, behavioural tendencies, management capability, development areas and other people-related factors relevant to the investment or portfolio company.',
    },
    {
        Icon: FiUserCheck,
        question: 'Can Zanga support C-suite recruitment across portfolio companies?',
        answer: (
            <>Yes. <strong>Fit by Zanga</strong> and relevant leadership assessments can support executive hiring by adding structured behavioural, leadership and role-fit insights alongside interviews and references.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'Can Zanga support portfolio companies after investment?',
        answer:
            'Yes. Assessment insight can be used to shape founder coaching, leadership development, succession planning and critical executive hiring after investment.',
    },
    {
        Icon: FiBriefcase,
        question: 'Is Diligence by Zanga available for single deals or broader portfolio engagements?',
        answer: (
            <>Yes. <strong>Zanga</strong> can structure engagements around a single transaction, selected portfolio companies or a broader portfolio programme, depending on the investor&apos;s needs.</>
        ),
    },
    {
        Icon: FiGlobe,
        question: 'How does Zanga account for cultural context during founder assessments?',
        answer: (
            <><strong>Zanga</strong>&apos;s approach considers how factors such as hierarchy, communication norms, relationships and local business context may influence how leadership behaviour is expressed. This helps assessment insight remain relevant to African and other high-context environments.</>
        ),
    },
]

export default function InvestorsFundManagersFaq() {
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
