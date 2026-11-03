'use client'

import React from 'react'
import Link from 'next/link'
import WorkforceAssessmentsLogoMarquee from '@/components/workforce-assessments/WorkforceAssessmentsLogoMarquee'
import WorkforceAssessmentsHeroGrid from '@/components/workforce-assessments/WorkforceAssessmentsHeroGrid'
import OpenModalButton from '@/components/modal/OpenModalButton'

export default function WorkforceAssessmentsHero() {
  return (
      <section
          style={{ backgroundColor: 'rgb(250, 248, 246)' }}
          className="z-10 overflow-hidden relative w-full font-Montserrat px-4 sm:px-6 lg:px-8"
      >
        <div className="py-16 md:py-20 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 xl:grid-cols-2 md:gap-10">
          <div className="order-1 md:order-none md:col-span-3 md:col-start-1 xl:col-span-1 md:row-start-1 text-left">
            <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
              Understand what is happening <span className="md:text-terracotta">across your <br className="hidden md:block"/> workforce</span>, and why
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed font-Montserrat max-w-xl mb-10">
              <strong>Zanga's</strong> workforce assessments help organisations understand employee experience, engagement, culture, team effectiveness and the factors shaping retention and performance.
              <br/>Built for African and other high-context workplaces, Zanga combines structured workforce data with cultural intelligence to help leaders understand what their people are experiencing and where attention may be needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenModalButton
                  modal="book-a-demo"
                  className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
              >
                Request a Demo
              </OpenModalButton>
              <Link
                  href="#compare-assessments"
                  className="md:text-[16px] text-[14px] text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-bold hover:bg-terracotta/10 transition-colors font-Montserrat"
              >
                Find the Right Assessment
              </Link>
            </div>
            <WorkforceAssessmentsLogoMarquee/>
          </div>

          <div className="order-2 md:order-none md:col-span-2 xl:col-span-1 xl:col-start-2 md:row-start-1">
            <WorkforceAssessmentsHeroGrid/>
          </div>
        </div>
      </section>
  )
}
