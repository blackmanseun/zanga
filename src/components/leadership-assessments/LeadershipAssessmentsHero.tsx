'use client'

import React from 'react'
import Link from 'next/link'
import LeadershipAssessmentsLogoMarquee from '@/components/leadership-assessments/LeadershipAssessmentsLogoMarquee'
import LeadershipAssessmentsHeroSwiper from '@/components/leadership-assessments/LeadershipAssessmentsHeroSwiper'

export default function LeadershipAssessmentsHero() {
  return (
    <section
      style={{ backgroundColor: 'rgb(250, 248, 246)' }}
      className="z-10 overflow-hidden relative w-full font-Montserrat px-4 sm:px-6 lg:px-8"
    >
      <div className="py-16 md:py-20 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 xl:grid-cols-[7fr_5fr] items-end">
        <div className="order-1 md:order-none md:col-span-3 md:col-start-1 md:row-start-1 text-left">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
            See what your <span className="md:text-olive">leaders <br className="hidden md:block"/> can do</span>, and where they <br className="hidden md:block"/> can go next
          </h1>
          <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed font-Montserrat max-w-xl mb-10">
            <strong>Zanga's</strong> leadership assessments help organisations understand current capability, future potential, development priorities and how leadership is experienced by others.
            <br/>Built for African and other high-context workplaces, our assessments combine robust leadership insight with the cultural context needed to make better development, succession and talent decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
            >
              Request a demo
            </Link>
            <Link
              href="#"
              className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px] hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
            >
              Take a Free Assessment
            </Link>
          </div>
        </div>

        <div className="order-2 md:order-none md:col-span-2 xl:col-start-2 md:row-start-1">
          <LeadershipAssessmentsHeroSwiper/>
          <LeadershipAssessmentsLogoMarquee/>
        </div>
      </div>
    </section>
  )
}
