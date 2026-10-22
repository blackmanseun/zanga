'use client'

import React, {useState} from 'react'
import {FiArrowRight, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import OpenModalButton from '@/components/modal/OpenModalButton'

type Stage = {
    title: string
    text: string
    image: string
    alt: string
    bg: string
}

const stages: Stage[] = [
    {
        title: 'Growing Organisations',
        text: 'Build a clearer understanding of culture and employee experience before informal ways of working become difficult to manage.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/96',
        alt: '',
        bg: 'bg-[#282A30]',
    },
    {
        title: 'Mid-Sized Organisations',
        text: 'Track engagement across teams, strengthen management capability and identify emerging retention or culture risks.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/56',
        alt: '',
        bg: 'bg-[#282A30]',
    },
    {
        title: 'Enterprises',
        text: 'Compare experiences across business units, locations and employee groups while giving executives and boards a consolidated view of workforce sentiment.',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/30',
        alt: 'Executives reviewing a consolidated workforce report',
        bg: 'bg-[#282A30]',
    },
]

// Only loop when there are more cards than fit in the desktop view.
const SLIDES_PER_VIEW_DESKTOP = 3

export default function PulseOrganisationStages() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Pulse by Zanga
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl">
                        Built for organisations at different stages
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
                        aria-label="Previous organisation stage"
                        className="absolute left-0 lg:-left-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronLeft size={20} aria-hidden="true"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => swiper?.slideNext()}
                        aria-label="Next organisation stage"
                        className="absolute right-0 lg:-right-5 top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                    >
                        <FiChevronRight size={20} aria-hidden="true"/>
                    </button>
                </div>

                <Reveal delayMs={150} className="mt-10">
                    <OpenModalButton
                        modal="book-a-demo"
                        className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Talk to Zanga About Your Organisation
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </OpenModalButton>
                </Reveal>
            </div>
        </section>
    )
}
