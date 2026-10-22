'use client'

import React, {useState} from 'react'
import {FaRegCheckSquare} from 'react-icons/fa'
import {FiArrowRight, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import CardAction from '@/components/ui/CardAction'

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
        href: '/products/fit-by-zanga',
        bg: 'bg-olive-dark',
        title: 'Leadership Intelligence',
        description: 'Bring evidence into coaching conversations.',
        checklist: [
            {
                title: 'Leadership Assessments & 360 Feedback',
                description: 'Uncover strengths, blind spots and development priorities, then use the insight to focus coaching conversations and development plans.',
            },
        ],
        cta: 'Fit by Zanga',
    },
    {
        href: '#',
        bg: 'bg-olive',
        title: 'Psychometric & Talent Intelligence',
        description: 'Understand behaviour, fit and working style more clearly.',
        checklist: [
            {
                title: 'Psychometric Assessments',
                description: 'Bring structured behavioural and personality insight into coaching, talent or organisational engagements.',
            },
            {
                title: 'Fit by Zanga',
                description: 'Support role-fit, talent and selection conversations where clients need more structured evidence.',
            },
        ],
        cta: 'Explore Talent Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta',
        title: 'Team & Workforce Intelligence',
        description: 'Help clients understand what is happening across teams and organisations.',
        checklist: [
            {
                title: 'Workforce Assessments',
                description: 'Support team-development, collaboration and effectiveness engagements.',
            },
            {
                title: 'Pulse by Zanga',
                description: 'Bring employee engagement, culture and workforce sentiment into broader organisational work.',
            },
            {
                title: 'Employee Engagement Surveys',
                description: 'Help clients understand employee experience and identify areas requiring attention.',
            },
        ],
        cta: 'Explore Workforce Solutions',
    },
    {
        href: '#',
        bg: 'bg-terracotta-dark',
        title: 'Training & Development',
        description: 'Connect insight directly to capability building. Use Zanga leadership and development programmes alongside assessment where clients require a structured pathway from insight to development.',
        checklist: [
            {title: 'Leadership development', description: ''},
            {title: 'Emerging-leader programmes', description: ''},
            {title: 'Team development', description: ''},
            {title: 'Group coaching', description: ''},
            {title: 'Assessment debriefs', description: ''},
            {title: 'Executive development', description: ''},
        ],
        cta: 'Explore Training & Development',
    },
]

export default function CoachesConsultantsSolutions() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center mb-16">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            How Coaches &amp; Consultants Use Zanga
                        </span>
                        <h2 className="hidden md:block text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Bring Zanga Into the Work You Already Do
                        </h2>
                        <h2 className="block md:hidden text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Bring Zanga into the work you already do
                        </h2>
                    </div>
                </Reveal>

                <div className="relative">
                    <Swiper
                        modules={[Pagination]}
                        onSwiper={setSwiper}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop
                        pagination={{clickable: true}}
                        breakpoints={{
                            768: {slidesPerView: 3},
                        }}
                        className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
                    >
                        {CATEGORIES.map((category) => (
                            <SwiperSlide key={category.title} className="!h-auto">
                                <CardAction
                                    href={category.href}
                                    wholeCard
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
                                                        {item.description && (
                                                            <p className="text-gray-500 text-[13px] font-Montserrat leading-relaxed">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardAction>
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
