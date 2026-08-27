'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiAward,
    FiChevronDown,
    FiClock,
    FiEdit3,
    FiGrid,
    FiHelpCircle,
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
        Icon: FiHelpCircle,
        question: 'Should an assessment decide who we hire?',
        answer: (
            <>No. <strong>Zanga</strong> assessments are designed to improve professional judgement, not replace it. Results should be considered alongside relevant experience, technical competence, interviews, references and the specific requirements of the role.</>
        ),
    },
    {
        Icon: FiClock,
        question: 'When should we use assessments in the recruitment process?',
        answer: (
            <>It depends on the role and hiring process. Assessments can support initial screening, candidate shortlisting, final-stage interviews or executive selection. <strong>Zanga</strong> can help determine where assessment adds the greatest value within your recruitment journey.</>
        ),
    },
    {
        Icon: FiGrid,
        question: 'Which assessment should we use?',
        answer: (
            <>The right assessment depends on the decision you are making. You may need insight into personality, behaviour, role fit, leadership capability or future potential. Tell us what you are recruiting for, and <strong>Zanga</strong> can recommend the most appropriate pathway.</>
        ),
    },
    {
        Icon: FiAward,
        question: 'Can Zanga support executive recruitment?',
        answer: (
            <>Yes. <strong>Zanga</strong>&apos;s leadership assessments can provide deeper insight into leadership capability, potential strengths and development areas for senior and business-critical appointments. These insights can also inform final interviews, references and onboarding.</>
        ),
    },
    {
        Icon: FiUsers,
        question: 'Can Zanga support larger recruitment cohorts?',
        answer: (
            <>Yes. Depending on the assessment and programme design, <strong>Zanga</strong> can support cohort and organisational assessment programmes, including reporting and comparative insights for larger groups of candidates.</>
        ),
    },
    {
        Icon: FiEdit3,
        question: "What makes Zanga's assessments different?",
        answer: (
            <><strong>Zanga</strong> combines assessment science with cultural intelligence. Our approach recognises that workplace behaviour is influenced by context, including relationships, hierarchy and communication norms, helping organisations interpret people data more meaningfully in African and other high-context workplaces.</>
        ),
    },
]

export default function Faq() {
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
                                Frequently Asked Questions
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
