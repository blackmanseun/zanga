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
    avatar: string
}

const testimonials: Testimonial[] = [
    {
        quote:
            "Our overall engagement score looked healthy, but attrition kept rising in one region and we couldn't explain why. Pulse showed us that managers there were coming through as far less supportive and recognition felt inconsistent, even though the headline score didn't show it. We ran targeted coaching for that management team and adjusted how we recognised people locally. Within two quarters, voluntary turnover in the region had come down, and it was the fastest-improving region in our next pulse survey.",
        name: 'Chiamaka Nwosu',
        role: 'Head of People, Meridian Logistics Group',
        avatar: '/images/headshot/3.jpg',
    },
    {
        quote:
            'We knew turnover was highest in the first six months, but not why. Pulse showed new hires felt unsupported in their first few weeks, especially outside our head office. We rebuilt onboarding around a 90-day check-in cadence and gave line managers a simple playbook. Early-tenure attrition is down significantly since we made the change.',
        name: 'Ngozi Adeyemi',
        role: 'Chief People Officer, FirstBank Group',
        avatar: '/images/headshot/7.jpg',
    },
    {
        quote:
            'Our values were clear on paper, but employees in different regions were experiencing them very differently. Pulse surfaced exactly where that gap was widest. We ran targeted culture workshops with those store teams instead of a blanket, company-wide programme. Our next survey showed those regions closing the gap faster than anywhere else.',
        name: 'Kwena Mshindi',
        role: 'HR Director, Regional Retail Group',
        avatar: '/images/headshot/6.jpg',
    },
    {
        quote:
            "Leadership assumed communication was working because nobody complained. Pulse told a different story: frontline teams felt genuinely uninformed about decisions that affected them. We introduced regular manager-led briefings and a simple monthly update from the executive team. Our 'feeling informed' score moved more in one quarter than it had in three years.",
        name: 'Ademola Bamidele',
        role: 'VP People Operations, Continental Manufacturing',
        avatar: '/images/headshot/1.jpg',
    },
    {
        quote:
            "We were losing strong performers who, on paper, had nothing to complain about. Pulse showed they simply couldn't see a path forward here. We built out clearer development conversations and internal mobility options. It's still early, but retention among our top performers has already improved.",
        name: 'Amaka Johnson',
        role: 'Head of Talent & Culture, Savanna Logistics',
        avatar: '/images/headshot/2.jpg',
    },
    {
        quote:
            'After bringing two teams together, leadership assumed things had settled. Pulse showed people still felt like two separate groups, with real gaps in trust and collaboration. We used the results to design joint working sessions and changed how we recognised cross-team work. Belonging scores in the merged team are now among the highest in the business.',
        name: 'Fatima Bello',
        role: 'People Experience Lead, Northbridge Financial Services',
        avatar: '/images/headshot/5.jpg',
    },
]

export default function PulseTestimonial() {
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
                        What listening better <br className="hidden md:block"/> <span className="text-olive">can change</span>
                    </h2>
                </div>

                <div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
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
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-11 h-11 rounded-full object-cover object-top shrink-0"
                                        />
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
