'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {FiArrowRight, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Stage = {
    title: string
    text: string
    image: string
    alt: string
    bg: string
}

const stages: Stage[] = [
    {
        title: 'Private Equity & Venture Capital',
        text: 'Understand founders and management teams before investing and support leadership development after capital is deployed.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/152',
        alt: '',
        bg: 'bg-[#282A30]',
    },
    {
        title: 'Fund Managers',
        text: 'Build a more consistent view of leadership capability and management depth across selected portfolio companies.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/148',
        alt: '',
        bg: 'bg-[#282A30]',
    },
    {
        title: 'Development Finance & Impact Investors',
        text: 'Add leadership and organisational insight to investee assessment, capacity building and portfolio support.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/172',
        alt: 'Impact investors reviewing an investee leadership report',
        bg: 'bg-[#282A30]',
    },
    {
        title: 'Banks & SME Lenders',
        text: 'Add structured management insight where founder or leadership capability is an important part of understanding the borrower.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/158',
        alt: 'A lender meeting with the management team of a growing business',
        bg: 'bg-[#282A30]',
    },
]

// Only loop when there are more cards than fit in the desktop view.
const SLIDES_PER_VIEW_DESKTOP = 3

export default function DiligenceOrganisationStages() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Diligence by Zanga
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl">
                        Built for different capital providers
                    </h2>
                </Reveal>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        onSwiper={setSwiper}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={stages.length > SLIDES_PER_VIEW_DESKTOP}
                        autoplay={{delay: 3500, disableOnInteraction: false}}
                        pagination={{clickable: true}}
                        breakpoints={{
                            768: {slidesPerView: SLIDES_PER_VIEW_DESKTOP},
                        }}
                        className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
                    >
                        {stages.map((stage) => (
                            <SwiperSlide key={stage.title} className="!h-auto">
                                <div className={`${stage.bg} h-full flex flex-col rounded-3xl border border-white/10 md:p-8 px-4 py-6 sm:p-10`}>
                                    <h3 className="text-xl font-bold text-white font-MonaSans mb-3">
                                        {stage.title}
                                    </h3>
                                    <p className="text-white/70 text-[15px] font-Montserrat leading-relaxed mb-6">
                                        {stage.text}
                                    </p>
                                    <img
                                        src={stage.image}
                                        alt={stage.alt}
                                        className="mt-auto w-full h-48 sm:h-56 object-cover object-[50%_10%] rounded-2xl"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        type="button"
                        onClick={() => swiper?.slidePrev()}
                        aria-label="Previous capital provider"
                        className="absolute left-0 md:-left-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronLeft size={20} aria-hidden="true"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => swiper?.slideNext()}
                        aria-label="Next capital provider"
                        className="absolute right-0 md:-right-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronRight size={20} aria-hidden="true"/>
                    </button>
                </div>

                <Reveal delayMs={150} className="mt-10">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Talk to Zanga About Your Investment Approach
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
