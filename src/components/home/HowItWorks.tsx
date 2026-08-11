import React from 'react'
import Link from 'next/link'
import { FiInbox, FiBarChart2, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

function CollectMockup({ accent }: { accent: string }) {
  const channels = ['Assessments', 'Surveys', 'WhatsApp', 'Hotline', 'Web Form', 'Email']
  return (
    <div>
      <p className="text-[11px] text-gray-400 text-center font-Montserrat mb-3">6 Channels Connected</p>
      <p className="text-sm font-semibold text-gray-900 text-center font-MonaSans mb-4">
        Collecting sentiment from every source
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
        {channels.map((channel) => {
          const selected = channel === 'WhatsApp'
          return (
            <span
              key={channel}
              className={`text-[10px] px-2.5 py-1.5 rounded-md border font-Montserrat ${
                selected ? 'text-white border-transparent' : 'bg-gray-50 text-gray-500 border-gray-200'
              }`}
              style={selected ? { backgroundColor: accent } : undefined}
            >
              {channel}
            </span>
          )
        })}
      </div>
      <div className="h-8 rounded-md border border-gray-200 bg-gray-50" />
    </div>
  )
}

function AnalyseMockup({ accent }: { accent: string }) {
  const rows = [
    { label: 'Engagement Sentiment', value: 74 },
    { label: 'Emerging Risk Signals', value: 38 },
    { label: 'Capability Gaps', value: 56 },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Pattern Detection</p>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-Montserrat"
          style={{ color: accent, backgroundColor: `${accent}1A` }}
        >
          Live
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

function ActMockup({ accent }: { accent: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Recommended Actions</p>
        <span className="text-[11px] font-semibold font-Montserrat" style={{ color: accent }}>
          View All
        </span>
      </div>
      <div
        className="rounded-lg border p-3 mb-2"
        style={{ borderColor: `${accent}40`, backgroundColor: `${accent}14` }}
      >
        <p className="text-[10px] uppercase tracking-wide font-semibold font-Montserrat mb-1" style={{ color: accent }}>
          Retention Risk
        </p>
        <p className="text-xs font-semibold text-gray-900 font-MonaSans mb-2">
          Review Compensation in the Ops Team
        </p>
        <span
          className="text-[9px] px-2 py-0.5 rounded-full font-Montserrat text-white"
          style={{ backgroundColor: accent }}
        >
          High priority
        </span>
      </div>
      <div className="rounded-lg border border-gray-100 p-3">
        <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat mb-1">
          Leadership Readiness
        </p>
        <p className="text-xs font-semibold text-gray-700 font-MonaSans">Fast-Track Two Emerging Leaders</p>
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
    label: '1. Collect',
    Icon: FiInbox,
    description:
      'Gather insight from employees, candidates, leaders, customers, suppliers or communities through assessments, surveys, digital forms, WhatsApp, hotlines and supported channels.',
    color: '#a3a748',
    arrowFg: 'text-gray-900',
    mockup: <CollectMockup accent="#a3a748" />,
  },
  {
    label: '2. Understand',
    Icon: FiBarChart2,
    description:
      'Bring the data together to identify patterns, strengths, gaps, sentiment and emerging risk in context.',
    color: '#FDBF12',
    arrowFg: 'text-gray-900',
    mockup: <AnalyseMockup accent="#FDBF12" />,
  },
  {
    label: '3. Act',
    Icon: FiCheckCircle,
    description:
      'Use clear reports, dashboards, benchmarks and recommendations to improve decisions, development and organisational response.',
    color: '#475569',
    arrowFg: 'text-white',
    mockup: <ActMockup accent="#475569" />,
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(250, 248, 246)'
      }}
      className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            How It Works
          </span>
          <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
            From dispersed sentiment to decisions your organisation can use.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.label} delayMs={i * 90} className="h-full">
              <div
                className="group h-full rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: `${card.color}5A` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[24px] font-bold font-MonaSans text-gray-900">{card.label}</h3>
                  </div>
                  <Link
                    href="#"
                    aria-label={`Explore ${card.label}`}
                    className={`w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center ${card.arrowFg} hover:brightness-95 transition-all`}
                    style={{ backgroundColor: card.color }}
                  >
                    <FiArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
                <p className="text-gray-700 text-sm font-Montserrat leading-relaxed mb-6">{card.description}</p>
                <div className="bg-white rounded-xl shadow-sm p-4">{card.mockup}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
