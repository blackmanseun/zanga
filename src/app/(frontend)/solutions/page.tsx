import React from 'react'
import Link from 'next/link'

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

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We start with a structured conversation to understand your organisation\'s goals, challenges, and culture.',
  },
  {
    step: '02',
    title: 'Coach Matching',
    description: 'Our team curates a shortlist of coaches with the right expertise, industry background, and coaching style.',
  },
  {
    step: '03',
    title: 'Programme Design',
    description: 'Together we co-design a programme tailored to your specific objectives and timelines.',
  },
  {
    step: '04',
    title: 'Delivery & Tracking',
    description: 'Coaching begins with built-in progress tracking and regular check-ins to ensure the engagement stays on course.',
  },
  {
    step: '05',
    title: 'Reporting & Renewal',
    description: 'At programme end, you receive a full impact report. Most clients renew or expand their engagement.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Our Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            Coaching Solutions Built for Business Results
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            From executive coaching to enterprise-wide leadership transformation, Zanga offers a
            comprehensive suite of solutions designed to deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              Six Core Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
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
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-MonaSans">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-bold text-highlight/20 font-MonaSans mb-3">{s.step}</div>
                <h3 className="text-base font-semibold mb-2 font-MonaSans">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-Montserrat">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-highlight text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-MonaSans">
            Find the Right Solution for Your Organisation
          </h2>
          <p className="text-white/80 mb-8 font-Montserrat text-lg">
            Speak with a Zanga advisor to identify the best-fit programme for your leadership needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-highlight px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors font-Montserrat inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
