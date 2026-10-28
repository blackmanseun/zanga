'use client'

import React, {useEffect, useRef, useState} from 'react'
import {FaRegCheckSquare} from 'react-icons/fa'
import {FiArrowRight, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import CardAction from '@/components/ui/CardAction'

type Point = {
    title?: string
    text: string
}

type SolutionCategory = {
    slug: string
    href: string
    bg: string
    title: string
    description: string
    points: Point[]
    useCase: string
    cta: string
}

const CATEGORIES: SolutionCategory[] = [
    {
        slug: 'solutions-leadership-intelligence',
        href: '/products/fit-by-zanga',
        bg: 'bg-olive-dark',
        title: 'Leadership Intelligence',
        description: 'Bring evidence into coaching conversations.',
        points: [
            {
                text: "Use Zanga's Leadership Competency Assessment and 360 Feedback Assessment to identify leadership strengths, behavioural patterns, blind spots and development priorities.",
            },
            {
                text: 'Apply the resulting insight to focus coaching conversations, inform leadership development plans and support more meaningful assessment debriefs.',
            },
        ],
        useCase: 'Incorporate leadership assessments into executive coaching or leadership development programmes to establish a clearer baseline and target development priorities.',
        cta: 'Explore Leadership Assessments',
    },
    {
        slug: 'solutions-psychometric-talent-intelligence',
        href: '#',
        bg: 'bg-olive',
        title: 'Psychometric & Talent Intelligence',
        description: 'Understand behaviour, role fit and working styles more clearly.',
        points: [
            {
                title: 'Psychometric Assessments',
                text: 'Bring structured behavioural and personality insight into coaching, talent and organisational engagements.',
            },
            {
                title: 'Fit by Zanga',
                text: 'Support role-fit, recruitment and talent-selection conversations where clients require more structured evidence.',
            },
        ],
        useCase: 'Apply psychometric and role-fit assessments within talent advisory, leadership selection or career development engagements to support more informed recommendations.',
        cta: 'Explore Talent Solutions',
    },
    {
        slug: 'solutions-team-workforce-intelligence',
        href: '#',
        bg: 'bg-terracotta',
        title: 'Team & Workforce Intelligence',
        description: 'Help clients understand what is happening across teams and organisations.',
        points: [
            {
                title: 'Team Assessments',
                text: 'Support team development, collaboration and effectiveness engagements.',
            },
            {
                title: 'Pulse by Zanga',
                text: 'Bring employee engagement, culture and workforce sentiment into broader organisational work.',
            },
            {
                title: 'Employee Engagement Surveys',
                text: 'Help clients understand employee experience and identify areas requiring attention.',
            },
        ],
        useCase: 'Integrate team assessments, engagement surveys or workforce intelligence into team offsites, organisational development, culture and change-management engagements.',
        cta: 'Explore Workforce Solutions',
    },
    {
        slug: 'solutions-training-development',
        href: '#',
        bg: 'bg-terracotta-dark',
        title: 'Training & Development',
        description: 'Connect insight directly to capability building.',
        points: [
            {
                text: 'Use Zanga leadership and development programmes alongside assessments to help clients move from identifying capability gaps to targeted development.',
            },
            {
                text: 'Depending on the engagement, this may include leadership development, emerging-leader programmes, team development, group coaching, assessment debriefs and executive development.',
            },
        ],
        useCase: 'Use baseline assessment findings to design and deliver targeted leadership or team-development programmes, with follow-up assessment where appropriate to understand progress.',
        cta: 'Explore Training & Development',
    },
]

export default function CoachesConsultantsSolutions() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    // Open the card named in the URL hash (e.g. #solutions-training-development) and scroll it
    // into view — lets the challenge links above point straight at a specific solution.
    useEffect(() => {
        if (!swiper) return

        const openHashCard = () => {
            const hash = window.location.hash.slice(1)
            const index = CATEGORIES.findIndex((category) => category.slug === hash)
            if (index === -1) return
            swiper.slideToLoop(index, 0)
            sectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }

        openHashCard()
        window.addEventListener('hashchange', openHashCard)
        return () => window.removeEventListener('hashchange', openHashCard)
    }, [swiper])

    return (
        <section ref={sectionRef} id="coaches-solutions" className="scroll-mt-24 bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
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
                                            {category.points.map((point) => (
                                                <li key={point.text} className="flex items-start gap-2.5">
                                                    <FaRegCheckSquare
                                                        className="mt-1 shrink-0 text-gray-400"
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                    <div>
                                                        {point.title && (
                                                            <p className="text-gray-900 text-sm font-bold font-Montserrat mb-0.5">
                                                                {point.title}
                                                            </p>
                                                        )}
                                                        <p className="text-gray-500 text-[13px] font-Montserrat leading-relaxed">
                                                            {point.text}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-5 pt-4 border-t border-slate-100">
                                            <p className="text-gray-500 text-[13px] font-Montserrat leading-relaxed">
                                                <span className="font-bold text-gray-900">Use case: </span>
                                                {category.useCase}
                                            </p>
                                        </div>
                                    </div>
                                </CardAction>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        type="button"
                        onClick={() => swiper?.slidePrev()}
                        aria-label="Previous solutions"
                        className="absolute left-0 lg:-left-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronLeft size={20} aria-hidden="true"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => swiper?.slideNext()}
                        aria-label="Next solutions"
                        className="absolute right-0 lg:-right-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronRight size={20} aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </section>
    )
}
