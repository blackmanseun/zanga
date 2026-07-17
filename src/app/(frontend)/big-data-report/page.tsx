import React from 'react'
import Link from 'next/link'

const findings = [
  {
    stat: '40%',
    label: 'Higher Retention',
    description:
      'Organisations that invest in leadership coaching retain senior talent at 40% higher rates than peers.',
  },
  {
    stat: '3.5×',
    label: 'ROI on Coaching',
    description:
      'Every $1 invested in coaching yields an average return of $3.50 in improved performance and productivity.',
  },
  {
    stat: '67%',
    label: 'Better Decision-Making',
    description:
      '67% of coached leaders report significantly better quality decision-making within 6 months of engagement.',
  },
  {
    stat: '82%',
    label: 'Engagement Uplift',
    description:
      'Employee engagement scores improve by an average of 82% in teams led by coached managers.',
  },
]

const sections = [
  {
    title: 'Executive Landscape',
    description:
      'A comprehensive analysis of executive performance trends, tenure patterns, and leadership gaps across 8 industries in Africa.',
  },
  {
    title: 'Coaching ROI by Sector',
    description:
      'Sector-by-sector breakdown of coaching investment, programme types, and measurable business outcomes.',
  },
  {
    title: 'Gender & Inclusion in Leadership',
    description:
      'How African organisations are progressing on gender parity at the leadership level — and where the gaps remain.',
  },
  {
    title: 'Digital Leadership Readiness',
    description:
      'A new index measuring the readiness of African executives to lead digital transformation initiatives.',
  },
  {
    title: 'Talent Pipeline Health',
    description:
      'Assessment of succession planning maturity and bench strength across 15+ countries in our network.',
  },
  {
    title: 'Regional Insights',
    description:
      'Country-level data across West, East, Southern, Central, and North Africa with contextual commentary.',
  },
]

export default function BigDataReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Annual Research
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight">
              Zanga Big Data Report 2025
            </h1>
            <p className="text-gray-300 text-lg font-Montserrat leading-relaxed mb-8">
              Our flagship annual research publication analysing leadership development, coaching impact,
              and talent trends across Africa. Based on data from 1,000+ coaching engagements, 200+ coaches,
              and 15+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#download"
                className="bg-highlight text-white px-8 py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat inline-block text-center"
              >
                Download Free Report
              </Link>
              <Link
                href="/contact"
                className="border border-gray-500 text-white px-8 py-4 rounded-md font-semibold hover:border-white transition-colors font-Montserrat inline-block text-center"
              >
                Request a Briefing
              </Link>
            </div>
          </div>
          <div className="bg-secondary border border-accent/40 rounded-2xl p-10 flex items-center justify-center min-h-[280px]">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-400 font-Montserrat text-sm">2025 Report Cover</p>
              <p className="text-gray-600 font-Montserrat text-xs mt-1">PDF · 84 pages · Free download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Key Findings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              The Numbers That Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {findings.map((f) => (
              <div key={f.label} className="bg-gray-50 rounded-xl p-8 border border-gray-100 text-center">
                <p className="text-5xl font-bold text-highlight font-MonaSans">{f.stat}</p>
                <p className="text-gray-900 font-semibold mt-2 mb-3 font-MonaSans">{f.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-Montserrat">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Sections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              What's Inside
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              6 Chapters. 84 Pages. Actionable Data.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <div key={s.title} className="bg-white rounded-xl p-7 border border-gray-100">
                <div className="text-highlight font-bold text-sm font-MonaSans mb-3">
                  Chapter {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-MonaSans">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-Montserrat">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section id="download" className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Free Download
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-MonaSans">
              Get the Full Report
            </h2>
            <p className="text-gray-400 mt-3 font-Montserrat">
              Complete the form below and we'll send the 2025 Big Data Report directly to your inbox.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-primary border border-accent/40 text-white placeholder-gray-500 focus:outline-none focus:border-highlight text-sm font-Montserrat"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-primary border border-accent/40 text-white placeholder-gray-500 focus:outline-none focus:border-highlight text-sm font-Montserrat"
              />
            </div>
            <input
              type="email"
              placeholder="Work Email"
              className="w-full px-4 py-3 rounded-md bg-primary border border-accent/40 text-white placeholder-gray-500 focus:outline-none focus:border-highlight text-sm font-Montserrat"
            />
            <input
              type="text"
              placeholder="Company / Organisation"
              className="w-full px-4 py-3 rounded-md bg-primary border border-accent/40 text-white placeholder-gray-500 focus:outline-none focus:border-highlight text-sm font-Montserrat"
            />
            <select className="w-full px-4 py-3 rounded-md bg-primary border border-accent/40 text-gray-400 focus:outline-none focus:border-highlight text-sm font-Montserrat">
              <option value="">Select Your Industry</option>
              <option>Financial Services</option>
              <option>Energy & Resources</option>
              <option>Healthcare</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Government</option>
              <option>Manufacturing</option>
              <option>Other</option>
            </select>
            <button
              type="submit"
              className="w-full bg-highlight text-white py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat"
            >
              Download the Report →
            </button>
            <p className="text-gray-600 text-xs text-center font-Montserrat">
              By submitting this form you agree to Zanga's Privacy Policy. We'll never share your data.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
