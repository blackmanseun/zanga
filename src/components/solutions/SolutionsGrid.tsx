import React from 'react'
import Reveal from '@/components/ui/Reveal'

const solutions = [
  {
    icon: '🎯',
    title: 'Executive Coaching',
    description:
      'One-on-one coaching for senior executives navigating strategic decisions, transitions, and performance challenges. Conducted by coaches with direct C-suite experience.',
    outcomes: ['Sharper strategic thinking', 'Stronger stakeholder management', 'Improved decision-making under pressure'],
  },
  {
    icon: '📈',
    title: 'Leadership Development Programmes',
    description:
      'Structured multi-session programmes for emerging and mid-level leaders. Builds the capability pipeline your organisation needs for long-term resilience.',
    outcomes: ['360° leadership assessment', 'Personalised development plans', 'Cohort-based learning journeys'],
  },
  {
    icon: '🤝',
    title: 'Team Coaching',
    description:
      'Helps leadership teams improve how they work together—building trust, resolving conflict, and aligning on shared goals. Ideal during mergers, restructures, or growth phases.',
    outcomes: ['Team alignment workshops', 'Communication & conflict frameworks', 'Shared accountability systems'],
  },
  {
    icon: '🏢',
    title: 'Organisational Consulting',
    description:
      'Strategic advisory support for culture transformation, change management, and capability building at scale. We work alongside HR and executive teams as a trusted partner.',
    outcomes: ['Culture diagnostics', 'Change management roadmaps', 'Capability frameworks'],
  },
  {
    icon: '🌱',
    title: 'Emerging Leaders Programme',
    description:
      'Identifies and accelerates high-potential talent early in their careers, ensuring your bench strength is deep and ready to lead.',
    outcomes: ['Talent identification tools', 'Mentoring & sponsorship structures', 'Fast-track development plans'],
  },
  {
    icon: '📊',
    title: 'Impact Measurement & Reporting',
    description:
      'We donu\'t just deliver coaching — we prove it works. Our data infrastructure tracks behaviour change, business outcomes, and ROI across every engagement.',
    outcomes: ['Pre/post assessments', 'Engagement dashboards', 'Executive ROI reports'],
  },
]

export default function SolutionsGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
            Six Core Solutions
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delayMs={(i % 3) * 90}>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-MonaSans">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-Montserrat">{s.description}</p>
                <ul className="space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-gray-600 font-Montserrat">
                      <span className="text-highlight mt-0.5">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
