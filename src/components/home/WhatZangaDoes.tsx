import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Card = {
  label: string
  description: string
  cta: string
  color: string
}

const cards: Card[] = [
  {
    label: 'Hire with greater confidence',
    description:
      'Use culturally relevant psychometric and fit insights to improve selection and reduce costly hiring mistakes.',
    cta: 'Explore Hiring Solutions',
    color: '#a3a748',
  },
  {
    label: 'Develop stronger leaders',
    description:
      'Identify capability, potential and development priorities with leadership assessments and 360 feedback.',
    cta: 'Explore Leadership Solutions',
    color: '#FDBF12',
  },
  {
    label: 'Improve engagement and retention',
    description:
      'Understand employee sentiment, culture and the conditions shaping performance and retention.',
    cta: 'Explore Pulse',
    color: '#c55e36',
  },
  {
    label: 'Strengthen succession decisions',
    description: 'Identify high-potential talent, leadership readiness and organisational capability gaps.',
    cta: 'Explore Succession Solutions',
    color: '#a3a748',
  },
  {
    label: 'Listen to customers and communities',
    description:
      'Collect, manage and interpret stakeholder feedback across confidential, digital and assisted channels.',
    cta: 'Explore Voice',
    color: '#FDBF12',
  },
  {
    label: 'Understand founder and portfolio risk',
    description: 'Add leadership and sentiment intelligence to lending, investment and portfolio decisions.',
    cta: 'Explore Diligence',
    color: '#c55e36',
  },
]

export default function WhatZangaDoes() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(250, 248, 246)',
        backgroundImage:
          'linear-gradient(rgba(16, 24, 58, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 58, 0.05) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Business Outcomes
          </span>
          <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
            What does your organisation need to understand better?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.label} delayMs={(i % 3) * 90} className="h-full">
              <div className="group h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold font-MonaSans text-gray-800">{card.label}</h3>
                  <Link
                    href="#"
                    aria-label={card.cta}
                    className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center hover:brightness-95 transition-all"
                    style={{ backgroundColor: card.color }}
                  >
                    <FiArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
                <p className="text-gray-700 text-sm font-Montserrat leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold font-Montserrat"
                  style={{ color: card.color }}
                >
                  {card.cta}
                  <FiArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
