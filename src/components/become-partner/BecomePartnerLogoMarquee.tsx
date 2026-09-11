'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, FreeMode} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import Reveal from '@/components/ui/Reveal'

const LOGOS = [
    {src: '/images/logos/africa-finance-corporation-logo.png', alt: 'Africa Finance Corporation'},
    {src: '/images/logos/africa-works-logo.png', alt: 'Africa Works'},
    {src: '/images/logos/airtel-logo.png', alt: 'Airtel'},
    {src: '/images/logos/bca-leadership-logo.png', alt: 'BCA Leadership'},
    {src: '/images/logos/bnr-logo.png', alt: 'BNR'},
    {src: '/images/logos/cabinet-office-logo.png', alt: 'Cabinet Office'},
    {src: '/images/logos/cdi-africa-logo.png', alt: 'CDI Africa'},
    {src: '/images/logos/ctl-leadership-logo.png', alt: 'CTL Leadership'},
    {src: '/images/logos/fnb-logo.png', alt: 'FNB'},
    {src: '/images/logos/giz-logo.png', alt: 'GIZ'},
    {src: '/images/logos/grz-logo.png', alt: 'GRZ'},
    {src: '/images/logos/who-logo.png', alt: 'WHO'},
    {src: '/images/logos/zicb-logo.png', alt: 'ZICB'}
]

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS]

export default function BecomePartnerLogoMarquee() {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <p className="text-primary/30 text-15px mb-6 font-Montserrat">
                        Trusted by our growing network of partners across Africa.
                    </p>
                    <div className="overflow-hidden relative">
                        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
                        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>

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
                            {MARQUEE_LOGOS.map(({src, alt}, i) => (
                                <SwiperSlide key={i} style={{width: 'auto'}}>
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="h-12 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 md:grayscale md:hover:grayscale-0"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
