'use client'

import React from 'react'
import Link from 'next/link'
import {FaRegCheckSquare} from 'react-icons/fa'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type ChecklistItem = {
    title: string
    description: string
}

type SolutionCategory = {
    href: string
    bg: string
    title: string
    description: string
    checklist: ChecklistItem[]
    cta: string
}

const CATEGORIES: SolutionCategory[] = [
    {
        href: '#',
        bg: 'bg-olive-dark',
        title: 'Leadership Intelligence',
        description: 'Build visibility into leadership capability, readiness and continuity.',
        checklist: [
            {
                title: 'Leadership Competency Assessment',
                description: 'Understand current leadership strengths and development priorities.',
            },
            {
                title: '360 Feedback Assessment',
                description: 'Compare self-perception with feedback from managers, peers and direct reports.',
            },
        ],
        cta: 'Explore Leadership Solutions',
    },
    {
        href: '#',
        bg: 'bg-olive',
        title: 'Workforce Intelligence',
        description: 'Understand employee experience across the institution.',
        checklist: [
            {
                title: 'Pulse by Zanga',
                description: 'Track engagement, culture, retention and workforce sentiment.',
            },
            {
                title: 'Employee Engagement Surveys',
                description: 'Identify the factors shaping employee experience.',
            },
            {
                title: 'Workforce Analytics',
                description: 'Turn employee and leadership data into insight for executives, HR teams and decision-makers.',
            },
        ],
        cta: 'Explore Workforce Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta',
        title: 'Talent Intelligence',
        description: 'Bring greater consistency to recruitment and promotion.',
        checklist: [
            {
                title: 'Fit by Zanga',
                description: 'Support hiring, role-fit and selection decisions with structured insight.',
            },
            {
                title: 'Psychometric Assessments',
                description: 'Understand behavioural and personality characteristics relevant to workplace performance.',
            },
        ],
        cta: 'Explore Talent Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta-dark',
        title: 'Stakeholder Intelligence',
        description: 'Listen to the people who shape trust, reputation and service quality.',
        checklist: [
            {
                title: 'Voice by Zanga',
                description: 'Collect and interpret feedback from employees, customers, agents, suppliers and other stakeholders through structured listening, confidential reporting and grievance-management channels.',
            },
        ],
        cta: 'Explore Voice by Zanga',
    },
    {
        href: '#',
        bg: 'bg-olive-dark',
        title: 'Diligence Intelligence (Enterprise and pilot)',
        description: 'Add people insight to lending and investment decisions.',
        checklist: [
            {
                title: 'Diligence by Zanga',
                description: 'Structured founder, borrower and management-team assessment designed to provide an additional layer of leadership and people insight within selected lending, investment and portfolio engagements.',
            },
        ],
        cta: 'Talk to Zanga About Diligence',
    },
]

export default function FinancialInstitutionsSolutions() {
    return (
        <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center mb-16">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Solutions
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Zanga Solutions for Financial Institutions
                        </h2>
                    </div>
                </Reveal>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    breakpoints={{
                        768: {slidesPerView: 3},
                    }}
                    className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
                >
                    {CATEGORIES.map((category) => (
                        <SwiperSlide key={category.title} className="!h-auto">
                            <Link
                                href={category.href}
                                className={`${category.bg} rounded-3xl flex flex-col h-full min-h-[440px] hover:shadow-xl transition-all duration-300 group`}
                            >
                                <div className="p-8 pb-6 min-h-[230px]">
                                    <h3 className="text-white text-2xl font-bold font-MonaSans mb-3 leading-snug">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/70 text-sm font-Montserrat leading-relaxed mb-5">
                                        {category.description}
                                    </p>
                                    <span
                                        className="inline-flex items-center gap-1.5 text-white font-semibold text-sm font-Montserrat transition-all"
                                    >
                                        {category.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </span>
                                </div>

                                <div
                                    className="border border-slate-200 w-[85%] ml-auto flex-1 bg-white rounded-3xl rounded-tr-none rounded-b-none p-6">
                                    <ul className="flex flex-col gap-4">
                                        {category.checklist.map((item) => (
                                            <li key={item.title} className="flex items-start gap-2.5">
                                                <FaRegCheckSquare
                                                    className="mt-1 shrink-0 text-gray-400"
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                                <div>
                                                    <p className="text-gray-900 text-sm font-bold font-Montserrat mb-0.5">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-gray-500 text-[13px] font-Montserrat leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
