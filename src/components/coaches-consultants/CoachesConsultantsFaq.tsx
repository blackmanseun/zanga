'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {
    FiArrowRight,
    FiAward,
    FiChevronDown,
    FiGift,
    FiLayers,
    FiRefreshCw,
    FiUserCheck,
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
        question: 'Who can work with Zanga as a Coach or Consultant?',
        answer: (
            <><strong>Zanga</strong> works with executive coaches, leadership coaches, facilitators, HR consultants, organisational-development practitioners and other professionals who want to bring structured assessment insight into their client work.</>
        ),
    },
    {
        Icon: FiAward,
        question: 'Do I need to be certified to use Zanga assessments?',
        answer: (
            <>Certification or practitioner training may be required for particular assessments or partner models. Zanga Certification Training provides practitioners with the foundation to understand the relevant methodologies, assessments and reporting approaches. <strong>Zanga</strong> will confirm the requirements applicable to your practice during onboarding.</>
        ),
    },
    {
        Icon: FiGift,
        question: 'What do I receive as a Zanga partner?',
        answer:
            'Depending on the partnership model, this may include access to assessments, reports, practitioner resources, the Coach Portal, commercial support, professional development and collaboration opportunities.',
    },
    {
        Icon: FiUserCheck,
        question: 'Can I use Zanga assessments with my existing clients?',
        answer:
            'Yes. Approved practitioners can use eligible Zanga assessments within coaching, leadership development, facilitation and consulting engagements, subject to the relevant partnership and certification requirements.',
    },
    {
        Icon: FiLayers,
        question: 'Can I add Zanga assessments to my own leadership or coaching programmes?',
        answer:
            'Yes. Zanga assessments can be integrated into broader development engagements to provide baseline insight, focus development priorities and support follow-up conversations.',
    },
    {
        Icon: FiRefreshCw,
        question: 'What happens after I become a partner?',
        answer:
            'The relationship can continue through access to tools and resources, professional development, the partner community, updated methodologies and opportunities for collaboration and business development.',
    },
]

export default function CoachesConsultantsFaq() {
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
