'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import LogoMarquee from "@/components/solutions/LogoMarquee";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFlip } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-flip'

type PersonCard = {
  image: string
  trait: string
  score: number
  heightClass: string
  barColor: string
}

const columnOne: PersonCard[] = [
  { image: '/images/headshot/6.jpg', trait: 'Leadership Potential', score: 91, heightClass: 'min-h-[150px] md:min-h-[200px]', barColor: '#c55e36' },
  { image: '/images/headshot/3.jpg', trait: 'Cognitive Agility', score: 84, heightClass: 'min-h-[150px] md:min-h-[200px]', barColor: '#0F3460' },
  { image: '/images/headshot/2.jpg', trait: 'Cultural Fit', score: 88, heightClass: 'min-h-[150px] md:min-h-[200px]', barColor: '#a3a748' },
  { image: '/images/headshot/7.jpg', trait: 'Emotional Intelligence', score: 86, heightClass: 'min-h-[180px]', barColor: '#c55e36' }
  ]

const columnTwo: PersonCard[] = [
  { image: '/images/headshot/5.jpg', trait: 'Collaboration', score: 87, heightClass: 'min-h-[200px]', barColor: '#a3a748' },
  { image: '/images/headshot/1.jpg', trait: 'Adaptability', score: 90, heightClass: 'min-h-[150px]', barColor: '#0F3460' },
  { image: '/images/headshot/4.png', trait: 'Resilience', score: 92, heightClass: 'min-h-[150px]', barColor: '#E94560' },
  { image: '/images/headshot/8.jpg', trait: 'Role Readiness', score: 89, heightClass: 'min-h-[200px]', barColor: '#E94560' },
]

const allCards: PersonCard[] = [...columnOne, ...columnTwo]

function PersonInsightCard({ card, className }: { card: PersonCard; className?: string }) {
  return (
    <div className={`${className ?? `${card.heightClass} md:w-[200px]`} rounded-lg relative overflow-hidden shadow-lg`}>
      <img
        src={card.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-800/40 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 bottom-0 p-3">
        <p className="text-white text-xs font-semibold font-Montserrat mb-1.5">{card.trait}</p>
        <div className="h-1.5 rounded-full bg-white/25">
          <div
            className="h-full rounded-full"
            style={{ width: `${card.score}%`, backgroundColor: card.barColor }}
          />
        </div>
        <p className="text-white/80 text-[10px] font-Montserrat mt-1">{card.score}%</p>
      </div>
    </div>
  )
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mql.matches)
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [])
  return isDesktop
}

export default function Hero() {
  const ref = useRef(null)
  const isDesktop = useIsDesktop()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scaleYProgress = useTransform(scrollYProgress, [0, 1], [-20, -220])
  const reverseScaleYProgress = useTransform(scrollYProgress, [0, 1], [80, 400])

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'rgb(250, 248, 246)' }}
      className="z-10 overflow-hidden relative w-full font-Montserrat"
    >
      <div className="px-4 md:px-0 py-16 md:pt-0 md:pb-28 mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10 max-w-7xl">
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0">
          <div className="order-1 md:order-none md:pt-[50px] md:col-span-7 md:row-start-1 text-left z-10 relative md:mt-[70px]">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
              Make better hiring <br className="hidden md:block"/>decisions with insight
              <br className="hidden md:block"/>
              <span className=" leading-[1.4] px-1">that goes beyond the CV.</span>
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed font-Montserrat max-w-xl mb-10">
              Find people who don&apos;t just look right on paper, but have the capabilities,
              behaviours and potential to succeed in the role and your organisation. Zanga
              combines culturally intelligent psychometric and leadership assessments with
              actionable talent insights to help you select with greater confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          <div className="order-2 md:order-none md:col-start-8 md:col-span-5 md:row-start-1 md:row-span-2 md:relative md:w-[80%] md:mt-0">
            <div className="md:hidden mx-auto">
              <Swiper
                effect="flip"
                modules={[EffectFlip, Autoplay]}
                slidesPerView={1}
                loop
                grabCursor
                autoplay={{ delay: 2600, disableOnInteraction: false }}
              >
                {allCards.map((card) => (
                  <SwiperSlide key={`${card.image}-${card.trait}`}>
                    <PersonInsightCard card={card} className="h-72" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden md:flex justify-center gap-4 flex-row">
              <motion.div
                style={isDesktop ? { translateY: scaleYProgress } : {}}
                transition={{ type: 'spring', stiffness: 80 }}
                className="flex flex-col gap-5"
              >
                {columnOne.map((card) => (
                  <PersonInsightCard key={`${card.image}-${card.trait}`} card={card} />
                ))}
              </motion.div>

              <motion.div
                style={isDesktop ? { translateY: reverseScaleYProgress } : {}}
                transition={{ type: 'spring', stiffness: 80 }}
                className="flex flex-col gap-5"
              >
                {columnTwo.map((card) => (
                  <PersonInsightCard key={`${card.image}-${card.trait}`} card={card} />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="order-3 md:order-none md:col-start-1 md:col-span-7 md:row-start-2">
            <LogoMarquee/>
          </div>
        </div>
      </div>
    </section>
  )
}
