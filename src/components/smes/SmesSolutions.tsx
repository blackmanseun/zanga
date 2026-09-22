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
        title: 'Talent Intelligence',
        description: 'Make better hiring and selection decisions.',
        checklist: [
            {
                title: 'Fit by Zanga',
                description: 'Bring structured insight into hiring, role-fit and candidate-selection decisions.',
            },
            {
                title: 'Psychometric Assessments',
                description: 'Understand behavioural and personality characteristics relevant to workplace performance.',
            },
            {
                title: 'Recruitment Assessments',
                description: 'Create greater consistency when comparing candidates for important roles.',
            },
        ],
        cta: 'Explore Talent Solutions',
    },
    {
        href: '#',
        bg: 'bg-olive',
        title: 'Leadership Intelligence',
        description: 'Build management capability as the business grows.',
        checklist: [
            {
                title: 'Leadership Competency Assessment',
                description: 'Understand current leadership strengths and development priorities.',
            },
            {
                title: '360 Feedback Assessment',
                description: 'Help managers compare how they see their leadership with how others experience it.',
            },
            {
                title: 'Leadership Potential Assessment',
                description: 'Identify people who may be ready to take on greater responsibility.',
            },
        ],
        cta: 'Explore Leadership Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta',
        title: 'Workforce Intelligence',
        description: 'Understand how your people are experiencing the business.',
        checklist: [
            {
                title: 'Pulse by Zanga',
                description: 'Track employee engagement, culture and retention signals.',
            },
            {
                title: 'Employee Engagement Surveys',
                description: 'Understand the factors shaping employee experience.',
            },
            {
                title: 'Team Effectiveness Assessments',
                description: 'Identify how teams collaborate, communicate and work together.',
            },
        ],
        cta: 'Explore Workforce Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta-dark',
        title: 'Leadership Development',
        description: 'Turn assessment insight into practical development.',
        checklist: [
            {
                title: 'Open-Enrolment Programmes',
                description: 'Develop one or two managers without needing to commission a full in-house programme.',
            },
            {
                title: 'Self-Paced Learning',
                description: 'Give managers structured development they can complete around the working day.',
            },
            {
                title: 'Group Coaching Cohorts',
                description: 'Give managers access to guided development and peer learning at a more accessible cost.',
            },
        ],
        cta: 'Explore Training and Development',
    },
]

export default function SmesSolutions() {
    return (
        <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center mb-16">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Solutions
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Zanga Solutions for Growing Businesses
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
