'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, FreeMode} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const LOGOS = [
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/africa-finance-corporation-logo', alt: 'Africa Finance Corporation'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/africa-works-logo', alt: 'Africa Works'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/airtel-logo', alt: 'Airtel'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/bca-leadership-logo', alt: 'BCA Leadership'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/bnr-logo', alt: 'BNR'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/cabinet-office-logo', alt: 'Cabinet Office'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/cdi-africa-logo', alt: 'CDI Africa'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/ctl-leadership-logo', alt: 'CTL Leadership'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/fnb-logo', alt: 'FNB'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/giz-logo', alt: 'GIZ'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/grz-logo', alt: 'GRZ'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/who-logo', alt: 'WHO'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/logos/zicb-logo', alt: 'ZICB'}
]

// Repeated so the strip always overflows this section's wide container — Swiper's
// loop mode has nothing to scroll (and just sits static/left-aligned) if the
// slide track is narrower than the viewport.
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS]

export default function PulseLogoMarquee() {
    return (
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
                            className="h-12 w-auto object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
