'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiFileText,
    FiGitPullRequest,
    FiLock,
    FiMessageSquare,
    FiPhone,
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
        Icon: FiUsers,
        question: 'Who can Voice by Zanga be used with?',
        answer: (
            <>Voice by <strong>Zanga</strong> can support engagement with different stakeholder groups, including employees, customers, suppliers, farmers, communities and other people connected to an organisation&apos;s operations.</>
        ),
    },
    {
        Icon: FiMessageSquare,
        question: 'What kinds of feedback can be collected?',
        answer: (
            <>Depending on the implementation, organisations can collect general feedback, complaints, grievances, safeguarding concerns, service issues or other structured stakeholder input.</>
        ),
    },
    {
        Icon: FiGitPullRequest,
        question: 'Can issues be tracked after they are reported?',
        answer: (
            <>Yes. Voice by <strong>Zanga</strong> can support structured case management, assignment and escalation so organisations have a clearer view of how issues move from reporting to response.</>
        ),
    },
    {
        Icon: FiLock,
        question: 'Can stakeholders provide feedback confidentially?',
        answer: (
            <>Depending on the implementation, <strong>Zanga</strong> can support confidential reporting pathways and controlled access to case information. The exact confidentiality and anonymity settings should be defined as part of the engagement.</>
        ),
    },
    {
        Icon: FiFileText,
        question: 'Can Voice by Zanga support ESG or sustainability reporting?',
        answer: (
            <>It can help create a more structured evidence base around stakeholder engagement, grievances and response. The specific way that evidence is used in ESG or sustainability reporting will depend on the organisation&apos;s reporting framework and requirements.</>
        ),
    },
    {
        Icon: FiPhone,
        question: 'Can Zanga support stakeholders who are not primarily online?',
        answer: (
            <>Yes. The appropriate listening channels should reflect how the stakeholder group actually communicates. Depending on the programme, this can include assisted or low-friction channels alongside digital options.</>
        ),
    },
]

export default function ListenToStakeholdersFaq() {
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
