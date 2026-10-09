'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {FaRegCheckSquare} from 'react-icons/fa'
import {FiArrowRight, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {Pagination} from 'swiper/modules'
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
        description: 'Strengthen leadership capability across portfolio companies.',
        checklist: [
            {
                title: 'Diligence by Zanga',
                description: 'Identify founder and management capability, leadership strengths and behavioural patterns.',
            },
            {
                title: 'Leadership Competency Assessment',
                description: 'Understand the strengths and development priorities of founders, executives and senior managers.',
            },
            {
                title: '360 Feedback Leadership Assessment',
                description: 'Compare self-perception with feedback from colleagues and teams.',
            },
        ],
        cta: 'Explore Leadership Solutions',
    },
    {
        href: '#',
        bg: 'bg-olive',
        title: 'Workforce Intelligence',
        description: 'Understand the experience of employees within your portfolio companies.',
        checklist: [
            {
                title: 'Pulse by Zanga',
                description: 'Track employee engagement, culture and workforce sentiment.',
            },
            {
                title: 'Employee Engagement Surveys',
                description: 'Understand the factors shaping employee experience and retention.',
            },
            {
                title: 'Workforce Analytics',
                description: 'Bring workforce data together to identify patterns across teams, functions or locations.',
            },
        ],
        cta: 'Explore Workforce Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta',
        title: 'Talent Intelligence',
        description: 'Bring more structure to senior hiring inside your portfolio.',
        checklist: [
            {
                title: 'Fit by Zanga',
                description: 'Support recruitment and hiring decisions for C-suite and senior management roles.',
            },
            {
                title: 'Psychometric Assessments',
                description: 'Understand behavioural and personality characteristics relevant to leadership and workplace performance.',
            },
        ],
        cta: 'Explore Talent Solutions',
    },
]

export default function InvestorsFundManagersSolutions() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center mb-16">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Solutions
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Zanga Solutions for Investors and Fund Managers
                        </h2>
                    </div>
                </Reveal>

                <div className="relative">
                    <Swiper
                        modules={[Pagination]}
                        onSwiper={setSwiper}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={CATEGORIES.length > 3}
                        rewind={CATEGORIES.length <= 3}
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
                    <button
                        type="button"
                        onClick={() => swiper?.slidePrev()}
                        aria-label="Previous solutions"
                        className="absolute left-0 md:-left-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronLeft size={20} aria-hidden="true"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => swiper?.slideNext()}
                        aria-label="Next solutions"
                        className="absolute right-0 md:-right-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronRight size={20} aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </section>
    )
}
