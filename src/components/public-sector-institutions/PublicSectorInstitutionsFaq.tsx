'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiGlobe,
    FiLock,
    FiMessageCircle,
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
        Icon: FiGlobe,
        question: 'Can Zanga support large public-sector organisations?',
        answer: (
            <>Yes. <strong>Zanga</strong> can structure assessment, engagement and stakeholder-listening programmes across multiple departments, grades or locations, with reporting designed around the scope of the engagement.</>
        ),
    },
    {
        Icon: FiUserCheck,
        question: 'Can Zanga support recruitment and promotion panels?',
        answer:
            'Yes. Assessment insight can provide an additional structured evidence base for selection and promotion processes. It should be considered alongside institutional criteria, experience, interviews and other relevant information.',
    },
    {
        Icon: FiTrendingUp,
        question: 'Can Zanga support succession planning?',
        answer:
            'Yes. Leadership Competency assessments and other surveys can help institutions understand current capability, future readiness and where succession gaps may exist.',
    },
    {
        Icon: FiMessageCircle,
        question: 'Can citizens or service users provide feedback through Zanga?',
        answer: (
            <>Yes. <strong>Voice by Zanga</strong> can support structured stakeholder listening and complaint or grievance channels, depending on the implementation.</>
        ),
    },
    {
        Icon: FiBarChart2,
        question: 'Can Zanga support capability assessment before and after training?',
        answer:
            'Yes. Where appropriate, assessment can be used to establish a baseline before development activity and repeated later to understand how capability has changed.',
    },
    {
        Icon: FiLock,
        question: 'How does Zanga protect assessment and stakeholder data?',
        answer: (
            <>Access, confidentiality and reporting arrangements should be defined as part of each implementation. <strong>Zanga</strong> can structure reporting so that authorised users receive the information appropriate to their role while protecting sensitive individual or stakeholder data.</>
        ),
    },
]

export default function PublicSectorInstitutionsFaq() {
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
