'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiChevronDown,
    FiClock,
    FiGlobe,
    FiGrid,
    FiSliders,
    FiTrendingUp,
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
        question: 'Is Zanga only for large organisations?',
        answer: (
            <>No. <strong>Zanga</strong> supports organisations at different stages of growth. Smaller businesses can begin with a single assessment, a small cohort or an open-enrolment programme, and expand into broader solutions as their needs grow.</>
        ),
    },
    {
        Icon: FiSliders,
        question: 'Do we need an HR team to use Zanga?',
        answer: (
            <>No. <strong>Zanga</strong>&apos;s solutions are designed to provide clear, practical insight that founders, managers and business leaders can use directly. Where additional interpretation is useful, <strong>Zanga</strong> can also provide debrief and advisory support.</>
        ),
    },
    {
        Icon: FiGrid,
        question: 'What is the smallest engagement Zanga can support?',
        answer: (
            <>Depending on the product, <strong>Zanga</strong> can support individual assessments and single participants on scheduled programmes, so businesses do not need a large cohort to get started.</>
        ),
    },
    {
        Icon: FiTrendingUp,
        question: 'Can we start small and expand later?',
        answer:
            'Yes. A business might begin with a critical hire or manager assessment, then add leadership development, team assessment or employee-engagement tools as the organisation grows.',
    },
    {
        Icon: FiClock,
        question: 'How long does an assessment take?',
        answer:
            'Completion times vary by assessment. Most individual assessments are designed to be completed online in a single sitting, with no specialist preparation required.',
    },
]

export default function SmesFaq() {
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
