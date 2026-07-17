import React from 'react'
import Link from 'next/link'
import { FiSearch, FiBarChart2, FiTrendingUp, FiArrowUpRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'

function AssessMockup({ accent }: { accent: string }) {
  const options = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  return (
    <div>
      <p className="text-[11px] text-gray-400 text-center font-Montserrat mb-3">Question 2 of 4</p>
      <p className="text-sm font-semibold text-gray-900 text-center font-MonaSans mb-4">
        I feel confident about our leadership pipeline
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
        {options.map((option) => {
          const selected = option === 'Agree'
          return (
            <span
              key={option}
              className={`text-[10px] px-2.5 py-1.5 rounded-md border font-Montserrat ${
                selected ? 'text-white border-transparent' : 'bg-gray-50 text-gray-500 border-gray-200'
              }`}
              style={selected ? { backgroundColor: accent } : undefined}
            >
              {option}
            </span>
          )
        })}
      </div>
      <div className="h-8 rounded-md border border-gray-200 bg-gray-50" />
    </div>
  )
}

function UnderstandMockup({ accent }: { accent: string }) {
  const rows = [
    { label: 'Strategic Thinking', value: 82 },
    { label: 'Decision Making', value: 65 },
    { label: 'Team Leadership', value: 90 },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Leadership Readiness</p>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-Montserrat"
          style={{ color: accent, backgroundColor: `${accent}1A` }}
        >
          +12%
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-[11px] text-gray-500 font-Montserrat mb-1">
              <span>{row.label}</span>
              <span>{row.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100">
              <div className="h-full rounded-full" style={{ width: `${row.value}%`, backgroundColor: accent }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DevelopMockup({ accent }: { accent: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Development Plan</p>
        <span className="text-[11px] font-semibold font-Montserrat" style={{ color: accent }}>
          Add
        </span>
      </div>
      <div
        className="rounded-lg border p-3 mb-2"
        style={{ borderColor: `${accent}40`, backgroundColor: `${accent}14` }}
      >
        <p className="text-[10px] uppercase tracking-wide font-semibold font-Montserrat mb-1" style={{ color: accent }}>
          Communication
        </p>
        <p className="text-xs font-semibold text-gray-900 font-MonaSans mb-2">
          Advancing Proactive Communication Skills
        </p>
        <span
          className="text-[9px] px-2 py-0.5 rounded-full font-Montserrat text-white"
          style={{ backgroundColor: accent }}
        >
          Recommended focus area
        </span>
      </div>
      <div className="rounded-lg border border-gray-100 p-3">
        <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat mb-1">
          Work Ethic
        </p>
        <p className="text-xs font-semibold text-gray-700 font-MonaSans">Strengthening Strategic Leadership</p>
      </div>
    </div>
  )
}

type Card = {
  label: string
  Icon: IconType
  description: string
  color: string
  arrowFg: string
  mockup: React.ReactNode
}

const cards: Card[] = [
  {
    label: 'Assess',
    Icon: FiSearch,
    description: 'Psychometric assessments, engagement surveys and workforce diagnostics.',
    color: '#FE7191',
    arrowFg: 'text-gray-900',
    mockup: <AssessMockup accent="#FE7191" />,
  },
  {
    label: 'Understand',
    Icon: FiBarChart2,
    description: 'Leadership analytics and culturally intelligent insights.',
    color: '#FDBF12',
    arrowFg: 'text-gray-900',
    mockup: <UnderstandMockup accent="#FDBF12" />,
  },
  {
    label: 'Develop',
    Icon: FiTrendingUp,
    description: 'Coaching, learning and leadership development programmes.',
    color: '#6C56C2',
    arrowFg: 'text-white',
    mockup: <DevelopMockup accent="#6C56C2" />,
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
        className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            What Zanga Does
          </span>
          <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold text-gray-900 mt-3 font-MonaSans max-w-3xl">
            One Platform. Three Capabilities. Better Leadership Decisions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.label} className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: `${card.color}5A` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-[24px] font-bold font-MonaSans text-gray-900">{card.label}</h3>
                </div>
                <Link
                  href="/solutions"
                  aria-label={`Explore ${card.label}`}
                  className={`w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center ${card.arrowFg} hover:brightness-95 transition-all`}
                  style={{ backgroundColor: card.color }}
                >
                  <FiArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <p className="text-gray-700 text-sm font-Montserrat leading-relaxed mb-6">{card.description}</p>
              <div className="bg-white rounded-xl shadow-sm p-4">{card.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
