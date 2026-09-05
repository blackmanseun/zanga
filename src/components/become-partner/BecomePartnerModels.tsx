'use client'

import React from 'react'
import Reveal from '@/components/ui/Reveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type PartnerModel = {
    bg: string
    title: string
    description: string
    steps: string[]
}

const MODELS: PartnerModel[] = [
    {
        bg: 'bg-secondary',
        title: 'Practitioner Model',
        description:
            'For coaches and consultants who want to use Zanga assessments within their own client work.',
        steps: ['Training / certification', 'Portal access', 'Assessment credits', 'Client delivery'],
    },
    {
        bg: 'bg-olive',
        title: 'Referral Model',
        description:
            'For partners who identify opportunities and connect Zanga with qualified clients.',
        steps: ['Referral', 'Qualification', 'Zanga sales and delivery', 'Agreed commercial benefit'],
    },
    {
        bg: 'bg-terracotta',
        title: 'Reseller Model',
        description: 'For partners who actively market and sell approved Zanga products.',
        steps: ['Partner onboarding', 'Commercial agreement', 'Market activation', 'Sales and delivery support'],
    },
    {
        bg: 'bg-accent',
        title: 'Franchise Model',
        description:
            'For selected partners developing a broader Zanga presence within an agreed territory.',
        steps: ['Qualification', 'Territory agreement', 'Training and implementation', 'Market development'],
    },
    {
        bg: 'bg-secondary',
        title: 'White-label Model',
        description:
            'For organisations that want selected Zanga capabilities delivered under their own brand or within an existing offer.',
        steps: ['Requirements', 'Scope', 'Configuration', 'Implementation', 'Licence or volume arrangement'],
    },
    {
        bg: 'bg-olive',
        title: 'Strategic / Institutional Model',
        description:
            'For larger partnerships involving research, technology, market access or joint product development.',
        steps: ['Opportunity definition', 'Joint scope', 'Commercial or institutional agreement', 'Implementation'],
    },
]

export default function BecomePartnerModels() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <div className="md:text-center">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Partner Models
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                            Choose How You Want to Work With Zanga
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mt-5 max-w-2xl mx-auto">
                            Zanga offers different partnership routes depending on whether you want to use our
                            assessments with your clients, refer opportunities, resell or franchise Zanga
                            solutions, embed our tools within your own offer, or collaborate on research and
                            market development.
                        </p>
                    </div>
                </Reveal>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
                >
                    {MODELS.map((model) => (
                        <SwiperSlide key={model.title} className="!h-auto">
                            <div
                                className={`${model.bg} rounded-3xl flex flex-col h-full min-h-[440px] transition-all duration-300`}
                            >
                                <div className="p-8 pb-6">
                                    <h3 className="text-white text-2xl font-bold font-MonaSans mb-3 leading-snug">
                                        {model.title}
                                    </h3>
                                    <p className="text-white/70 text-[15px] font-Montserrat leading-relaxed">
                                        {model.description}
                                    </p>
                                </div>

                                <div className="border border-slate-200 w-[85%] ml-auto flex-1 bg-white rounded-3xl rounded-tr-none rounded-b-none p-6">
                                    <p className="text-gray-400 text-xs uppercase tracking-widest font-Montserrat font-semibold mb-5">
                                        Typical structure
                                    </p>
                                    <div className="space-y-4">
                                        {model.steps.map((step, i) => (
                                            <div key={step} className="flex items-center gap-3">
                                                <span className="text-xl font-extrabold text-olive/25 font-MonaSans leading-none shrink-0 w-7">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <span className="text-gray-800 text-[14px] font-Montserrat leading-relaxed">
                                                    {step}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
