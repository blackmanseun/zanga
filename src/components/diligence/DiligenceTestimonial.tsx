'use client'

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Testimonial = {
    quote: string
    name: string
    role: string
    initials: string
}

const testimonials: Testimonial[] = [
    {
        quote:
            'The impact of their programs and expertise has been profound ... Of particular note is their Women in Leadership program, which has empowered our female leaders with the skills, confidence, and knowledge to excel in their roles.',
        name: 'Kizito Nsarhaza, PhD',
        role: 'Strategic Adviser, Management & Transformation, Office of the Regional Director, World Health Organization – Regional Office for Africa',
        initials: 'KN',
    },
    {
        quote:
            'What I value the most about the Zanga African Metrics assessment is the contextual grounded-ness and the valuing of the collective that aligns not just with the African value-systems of honouring the collective, but is relevant and applicable in any context that seeks to tap into collective wisdom.',
        name: 'Dr Dumi Magadlela',
        role: 'Executive & Team Coach, Certified Zanga Metrics Professional',
        initials: 'DM',
    },
]

export default function DiligenceTestimonial() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What understanding the team<br className="hidden md:block"/> <span className="text-olive">can change</span>
                    </h2>
                </div>

                <div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        rewind
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                        }}
                        className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.name} className="!h-auto pb-2">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col">
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <AiFillStar key={i} className="text-amber-400 w-4 h-4" />
                                        ))}
                                    </div>
                                    <p className="text-gray-500 font-Montserrat leading-relaxed mb-8 flex-1">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="w-11 h-11 rounded-full bg-olive/10 text-olive text-sm font-bold font-MonaSans flex items-center justify-center shrink-0">
                                            {testimonial.initials}
                                        </span>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 font-Montserrat">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400 font-Montserrat">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
