import React from 'react'
import Link from 'next/link'
import { FiFileText, FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

export default function ResearchAndEvidence() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#282A30' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Research and Evidence
            </span>
            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-white mt-3 font-MonaSans max-w-3xl">
              Building a stronger evidence base for how Africa leads and works.
            </h2>
            <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed font-Montserrat mt-5 max-w-3xl">
              Zanga&apos;s research transforms assessment and workforce data into insight for
              employers, leaders, partners and policymakers. Our growing dataset helps surface
              patterns across leadership competencies, cultural values, gender, generations and
              workplace experience.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden grid md:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat">
                Featured Research
              </span>
              <h3 className="text-2xl md:text-[1.75rem] font-bold text-white mt-2 mb-3 font-MonaSans">
                The Africa Workforce Report
              </h3>
              <p className="text-white/70 font-Montserrat leading-relaxed text-[16px] mb-6 max-w-2xl">
                Explore what our data reveals about leadership capability, cultural values and the
                future of work across African organisations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                >
                  Download the Report
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors font-Montserrat"
                >
                  Explore Zanga Research
                </Link>
              </div>
            </div>

            <div className="relative min-h-[16rem] md:min-h-full">
              <img
                src="/images/6.jpg"
                alt="A diverse team joining hands together"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(40,42,48,0.75) 0%, rgba(40,42,48,0.05) 45%, transparent 70%)',
                }}
              />
              <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-olive text-white flex items-center justify-center shadow-lg">
                <FiFileText size={18} aria-hidden="true" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
