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

export default function HomeInsightsReport() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(250, 248, 246)'
      }}
      className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Case Study
          </span>
          <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans text-gray-700">
            Turning stakeholder voice into actionable intelligence.
          </h2>
          <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
            For a client working with farmers and other ecosystem stakeholders in Zambia, <strong>Zanga </strong>
            provides an accessible grievance and feedback channel, structured case management,
            escalation support and recurring insight. The solution helps the organisation engage
            stakeholders more consistently while strengthening its ESG evidence and response
            systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
            >
              Explore Voice by Zanga
              <FiArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
            >
              Read Full Case Study
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <Panel
                src="/images/farming-one.jpg"
                alt="A team celebrating over their annual report findings"
                className="h-64"
              />
              <Panel
                src="/images/farming-four.jpg"
                alt="A worker on site carrying rolled-up plans"
                className="h-40"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Panel
                src="/images/farming-three.jpg"
                alt="A diverse team reviewing documents together in the office"
                className="h-40"
              />
              <Panel
                src="/images/farming-two.jpg"
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
