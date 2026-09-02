'use client'

import React from 'react'
import Link from 'next/link'
import SolutionsLogoMarquee from "@/components/solutions/SolutionsLogoMarquee";
import HeroImageGrid from "@/components/ui/HeroImageGrid";

export default function SolutionsHero() {
  return (
    <section
      style={{ backgroundColor: 'rgb(250, 248, 246)' }}
      className="z-10 overflow-hidden relative w-full font-Montserrat px-4 sm:px-6 lg:px-8"
    >
      <div className="py-16 md:pt-10 md:pb-20 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[7fr_5fr] items-center">
        <div className="md:pt-8 order-1 md:order-none md:col-start-1 md:row-start-1 text-left">
          <h1 className="text-[2.2rem] md:text-[3rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
            Make better hiring <br className="hidden md:block"/>decisions with insight
            <br className="hidden xl:block"/>
            <span className=" leading-[1.4] px-1"> that goes beyond the CV</span>
          </h1>
          <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed font-Montserrat max-w-xl mb-10">
            Find people who don&apos;t just look right on paper, but have the capabilities,
            behaviours and potential to succeed in the role and your organisation. <strong>Zanga </strong>
            combines culturally intelligent psychometric and leadership assessments with
            actionable talent insights to help you select with greater confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
            >
              Take a Free Assessment
            </Link>
            <Link
              href="#"
              className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px] hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="order-2 md:order-none md:col-start-2 md:row-start-1">
          <HeroImageGrid/>
        </div>
        <div className="order-3 md:order-none">
          <SolutionsLogoMarquee/>
        </div>
      </div>
    </section>
  )
}
