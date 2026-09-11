'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const IMAGES = [
    '/images/24.jpg',
    '/images/36.jpg',
    '/images/14.jpg',
    '/images/farming-one.jpg',
    '/images/39.jpg',
]

export default function LeadershipAssessmentsHeroSwiper() {
    return (
        <div className="hidden md:block ml-auto w-[550px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1.2}
                spaceBetween={20}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="rounded-2xl [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
            >
                {IMAGES.map((src) => (
                    <SwiperSlide key={src} className="group">
                        <div
                            className="min-h-[300px] rounded-2xl bg-cover bg-top relative overflow-hidden"
                            style={{ backgroundImage: `url('${src}')` }}
                        >
                            <div className="absolute inset-0 bg-slate-800 opacity-30 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
