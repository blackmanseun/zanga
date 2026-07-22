import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiBarChart2, FiTrendingUp, FiUsers, FiGlobe, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

function Panel({
  src,
  alt,
  className = '',
  objectPosition = '50% 50%',
  badgeIcons,
  overlayTitle,
  overlaySubtitle,
}: {
  src: string
  alt: string
  className?: string
  objectPosition?: string
  badgeIcons?: IconType[]
  overlayTitle?: string
  overlaySubtitle?: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
      />

      {badgeIcons && (
        <div className="absolute top-3 left-3 flex gap-2">
          {badgeIcons.map((Icon, i) => (
            <span
              key={i}
              className="w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-olive"
            >
              <Icon size={14} aria-hidden="true" />
            </span>
          ))}
        </div>
      )}

      {(overlayTitle || overlaySubtitle) && (
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          {overlayTitle && (
            <p className="text-white text-sm font-bold font-MonaSans leading-snug">{overlayTitle}</p>
          )}
          {overlaySubtitle && (
            <p className="text-white/70 text-xs font-Montserrat mt-0.5">{overlaySubtitle}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default function InsightsReport() {
  return (
    <section className="bg-[url('/images/footer_bg.webp')] bg-contain py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Zanga Human Capital Insights Report
          </span>
          <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
            What Does Africa&apos;s Workforce Actually Look Like? We Measured It
          </h2>
          <p className="text-gray-800 font-Montserrat font-semibold leading-relaxed mb-4">
            Most conversations about Africa&apos;s workforce are driven by opinion. Ours is driven by evidence.
          </p>
          <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
            The Zanga Human Capital Insights Report draws on leadership assessment data collected across
            African organisations to reveal the competencies, cultural dynamics, gender patterns, and
            generational shifts shaping the future of work. It gives executives, HR leaders, boards,
            policymakers, educators, and investors the insights they need to make better people decisions
            with confidence.
          </p>
          <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
            This is more than a report. It is part of Zanga&apos;s growing leadership intelligence platform,
            transforming workforce data into practical insights that help organisations build stronger
            leaders, stronger teams, and stronger institutions.
          </p>
          <Link
            href="/big-data-report"
            className="inline-flex items-center gap-2 bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
          >
            Download the Report
            <FiArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <Panel
                src="/images/9.jpg"
                alt="A team celebrating over their annual report findings"
                className="h-64"
              />
              <Panel
                src="/images/2.jpg"
                alt="A worker on site carrying rolled-up plans"
                className="h-40"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <Panel
                src="/images/13.jpg"
                alt="A diverse team reviewing documents together in the office"
                className="h-40"
              />
              <Panel
                src="/images/5.jpg"
                alt="A leader holding a folder of assessment findings"
                className="h-64"
                objectPosition="50% 20%"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
