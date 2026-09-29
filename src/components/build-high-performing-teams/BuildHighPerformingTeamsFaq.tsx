'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiAward,
    FiBarChart2,
    FiCalendar,
    FiChevronDown,
    FiLayers,
    FiTrendingUp,
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
        Icon: FiBarChart2,
        question: 'What does a team assessment measure?',
        answer: (
            <>The exact measures depend on the assessment used, but team assessment can help surface behavioural preferences, communication styles, working patterns and differences that may influence how effectively people collaborate.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'Is this suitable for teams that are already performing well?',
        answer: (
            <>Yes. Team assessment is not only for teams experiencing problems. It can also help high-performing teams deepen self-awareness, improve collaboration and prepare for growth or change.</>
        ),
    },
    {
        Icon: FiCalendar,
        question: 'Can Zanga support a team offsite or strategy session?',
        answer: (
            <>Yes. Assessment insight can be used as part of a facilitated offsite, team-development session or strategy workshop to create a more productive conversation about how the team works together.</>
        ),
    },
    {
        Icon: FiAward,
        question: 'Can this be used for leadership teams?',
        answer: (
            <>Yes. Team assessment is particularly useful for leadership and management teams where communication, trust and decision-making patterns have wider organisational consequences.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Do all team members need to complete an assessment?',
        answer: (
            <>Usually, the strongest team-level insight comes from broad participation, but the right approach will depend on the size of the team and the purpose of the engagement.</>
        ),
    },
    {
        Icon: FiLayers,
        question: 'Can Zanga support larger teams or multiple departments?',
        answer: (
            <>Yes. <strong>Zanga</strong> can work with individual teams, leadership groups or multiple teams across an organisation, with reporting and facilitation structured around the scope of the engagement.</>
        ),
    },
]

export default function BuildHighPerformingTeamsFaq() {
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
