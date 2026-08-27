import React from 'react'
import Link from 'next/link'

const industries = [
  {
    icon: '🏦',
    name: 'Financial Services',
    description:
      'From banks to fintech, we help financial leaders navigate regulatory pressure, digital disruption, and talent retention.',
    focus: ['Risk & compliance leadership', 'Digital transformation readiness', 'Board-level coaching'],
  },
  {
    icon: '⚡',
    name: 'Energy & Resources',
    description:
      'Supporting leaders in oil & gas, renewables, and mining as they manage the energy transition and ESG commitments.',
    focus: ['Change leadership for energy transition', 'Safety culture development', 'Stakeholder engagement'],
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    description:
      'Equipping healthcare executives and clinical leaders with the human skills needed to lead in high-stakes environments.',
    focus: ['Clinical leadership development', 'Resilience & wellbeing coaching', 'Operational efficiency'],
  },
  {
    icon: '💻',
    name: 'Technology',
    description:
      'Helping tech founders, CTOs, and engineering leaders scale their organisations without losing culture or velocity.',
    focus: ['Founder & CTO coaching', 'Engineering culture', 'Hypergrowth leadership'],
  },
  {
    icon: '🎓',
    name: 'Education',
    description:
      'Transforming how academic institutions develop leaders — from school principals to university vice-chancellors.',
    focus: ['Educational leadership', 'Institution transformation', 'Student outcomes focus'],
  },
  {
    icon: '🏛️',
    name: 'Government & Public Sector',
    description:
      'Supporting public sector leaders to deliver citizen-centred outcomes through improved decision-making and accountability.',
    focus: ['Policy leadership', 'Service delivery transformation', 'Cross-departmental collaboration'],
  },
  {
    icon: '🏭',
    name: 'Manufacturing & FMCG',
    description:
      'Driving operational excellence and people development in high-volume, process-intensive industries.',
    focus: ['Lean leadership', 'Front-line manager development', 'Supply chain leadership'],
  },
  {
    icon: '📡',
    name: 'Telecommunications',
    description:
      'Helping telecom leaders build adaptive cultures that keep pace with technology change and growing customer expectations.',
    focus: ['Customer-centric leadership', 'Digital transition', 'Cross-functional collaboration'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Industries We Serve
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            Deep Sector Expertise, Real-World Impact
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Our coaches don't just know coaching — they understand your industry. Every match
            considers sector experience to ensure relevant, credible, and impactful engagements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              8 Industries. 15+ Countries.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex gap-6 p-7 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl shrink-0">{industry.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-MonaSans">{industry.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed font-Montserrat">{industry.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {industry.focus.map((f) => (
                      <li
                        key={f}
                        className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full font-Montserrat"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why sector matters */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Sector Relevance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 font-MonaSans">
            Why Industry Experience Matters in Coaching
          </h2>
          <p className="text-gray-400 font-Montserrat leading-relaxed mb-6">
            A great coach is a great coach — but a great coach who has led a bank through a regulatory crisis,
            or scaled a healthtech startup, brings something qualitatively different to the conversation. They
            speak the language. They understand the constraints. They challenge blind spots that only insiders can see.
          </p>
          <p className="text-gray-400 font-Montserrat leading-relaxed">
            At <strong>Zanga</strong>, sector alignment is a core part of every matching decision. We don't just look at coaching
            methodology and style — we factor in lived industry experience to ensure every engagement is credible,
            contextual, and immediately relevant to the challenges your leaders face.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-highlight text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-MonaSans">
            Don't See Your Industry?
          </h2>
          <p className="text-white/80 mb-8 font-Montserrat text-lg">
            Our network spans many more sectors. Reach out and we'll find the right coach for your context.
          </p>
          <Link
            href="/contact"
            className="bg-white text-highlight px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors font-Montserrat inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
