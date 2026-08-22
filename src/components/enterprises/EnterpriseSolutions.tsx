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
        bg: 'bg-secondary',
        title: 'Leadership Intelligence',
        description: 'Build visibility into leadership capability and future readiness.',
        checklist: [
            {
                title: 'Leadership Competency Assessment',
                description: 'Understand current leadership strengths and development priorities.',
            },
            {
                title: '360 Leadership Assessment',
                description: 'Compare self-perception with feedback from managers, peers and direct reports.',
            },
            {
                title: 'Leadership Potential Assessment',
                description: 'Identify future capability, readiness and high-potential talent.',
            },
        ],
        cta: 'Explore Leadership Solutions',
    },
    {
        href: '#',
        bg: 'bg-olive',
        title: 'Workforce Intelligence',
        description: 'Understand what is happening across your workforce and why it matters.',
        checklist: [
            {
                title: 'Pulse by Zanga',
                description: 'Track engagement, culture, retention and employee sentiment.',
            },
            {
                title: 'Employee Engagement Surveys',
                description: 'Identify the factors shaping employee experience and performance.',
            },
            {
                title: 'Culture Assessments',
                description: 'Understand how organisational values and behaviours are experienced in practice.',
            },
            {
                title: 'Workforce Analytics',
                description: 'Turn people data into organisational insight for leadership and decision-makers.',
            },
        ],
        cta: 'Explore Workforce Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta',
        title: 'Talent Intelligence',
        description: 'Make recruitment and talent decisions with stronger evidence.',
        checklist: [
            {
                title: 'Fit by Zanga',
                description: 'Support hiring, role-fit and talent-selection decisions.',
            },
            {
                title: 'Psychometric Assessments',
                description: 'Understand behavioural and personality characteristics relevant to workplace performance.',
            },
            {
                title: 'Recruitment Assessments',
                description: 'Add structured insight to candidate screening and selection.',
            },
        ],
        cta: 'Explore Talent Solutions',
    },
    {
        href: '#',
        bg: 'bg-accent',
        title: 'Stakeholder Intelligence',
        description:
            'Understand the people outside your workforce who also shape organisational performance and risk.',
        checklist: [
            {
                title: 'Voice by Zanga',
                description:
                    'Collect and interpret feedback from customers, suppliers, communities and other stakeholders through structured listening and grievance-management channels.',
            },
        ],
        cta: 'Explore Voice by Zanga',
    },
]

export default function EnterpriseSolutions() {
    return (
        <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           Solutions
          </span>
                        <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Solutions for Enterprise Organisations
                        </h2>
                    </div>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">

                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">

                    </h2>
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
                                <div className="p-8 pb-6">
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
