'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, FreeMode} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const LOGOS = [
    {src: '/images/logos/1.svg', alt: 'Achim Global Construction Ltd '},
    {src: '/images/logos/2.svg', alt: 'Ashtech Capital Limited '},
    {src: '/images/logos/3.svg', alt: 'Corporate Wizards'},
    {src: '/images/logos/4.svg', alt: 'Evana Homes Limited'},
    {src: '/images/logos/5.svg', alt: 'Everight Clinic Limited'},
    {src: '/images/logos/6.svg', alt: 'Mangrove Delicious Food ltd'},
    {src: '/images/logos/7.svg', alt: 'Sangtech Technologies Nig. Limited '},
    {src: '/images/logos/8.svg', alt: 'Tummy Tummy Foods'},
    {src: '/images/logos/9.svg', alt: 'Everight Diagnostic and Laboratory Services Limited'},
    {src: '/images/logos/10.svg', alt: 'Rento Hotels and Suites'}
]

export default function LogoMarquee() {
    return (
        <div className="mt-12">
            <p className="text-primary/30 text-15px mb-6 font-Montserrat">
                Trusted by organisations making better people decisions.
            </p>
            <div className="overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"/>
                <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"/>

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={40}
                    loop
                    freeMode
                    autoplay={{delay: 0, disableOnInteraction: false}}
                    speed={3000}
                    className="!overflow-hidden"
                >
                    {LOGOS.map(({src, alt}, i) => (
                        <SwiperSlide key={i} style={{width: 'auto'}}>
                            <img
                                src={src}
                                alt={alt}
                                className="h-9 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 md:grayscale md:hover:grayscale-0"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
