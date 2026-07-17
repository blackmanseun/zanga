import React from 'react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Executive Coaching',
    description: 'One-on-one coaching for C-suite leaders navigating complex business challenges.',
    icon: '🎯',
  },
  {
    title: 'Leadership Development',
    description: 'Structured programmes that build capability at every level of the organisation.',
    icon: '📈',
  },
  {
    title: 'Team Coaching',
    description: 'Unlock collective intelligence and drive high-performance team dynamics.',
    icon: '🤝',
  },
  {
    title: 'Organisational Consulting',
    description: 'Strategic advisory support for culture transformation and change management.',
    icon: '🏢',
  },
]

export default function Solutions() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
            Coaching Solutions for Every Challenge
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-Montserrat">
            Whether you're developing a single leader or transforming an entire organisation, Zanga has the right solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-olive/40 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-MonaSans">{s.title}</h3>
              <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/solutions"
            className="inline-block border border-gray-300 text-gray-700 px-7 py-3 rounded-md font-semibold text-sm hover:border-olive hover:text-olive transition-colors font-Montserrat"
          >
            View All Solutions →
          </Link>
        </div>
      </div>
    </section>
  )
}
