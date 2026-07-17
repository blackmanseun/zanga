import React from 'react'
import Link from 'next/link'

const resourceTypes = [
  { label: 'All Resources', count: 24 },
  { label: 'Whitepapers', count: 7 },
  { label: 'Case Studies', count: 6 },
  { label: 'Toolkits', count: 5 },
  { label: 'Webinars', count: 4 },
  { label: 'Templates', count: 2 },
]

const resources = [
  {
    type: 'Whitepaper',
    icon: '📄',
    title: 'The State of Executive Coaching in Africa 2025',
    description:
      "A deep dive into how African organisations are investing in coaching and the outcomes they're achieving.",
    tags: ['Research', 'Executive Coaching', 'Africa'],
    downloadLabel: 'Download PDF',
  },
  {
    type: 'Case Study',
    icon: '📁',
    title: 'From Silos to Synergy: Team Coaching at Scale in a Pan-African Bank',
    description:
      'How a top-tier African bank used team coaching to break down organisational silos and improve cross-functional collaboration.',
    tags: ['Financial Services', 'Team Coaching', 'Case Study'],
    downloadLabel: 'Read Case Study',
  },
  {
    type: 'Toolkit',
    icon: '🛠️',
    title: "The Leader's Reflection Toolkit",
    description:
      'A practical workbook for leaders to assess their strengths, identify blind spots, and create a personal development plan.',
    tags: ['Self-Development', 'Templates', 'Toolkit'],
    downloadLabel: 'Download Toolkit',
  },
  {
    type: 'Webinar',
    icon: '🎥',
    title: "Leading Through Disruption: Lessons from Africa's Top CEOs",
    description:
      'A recorded panel discussion with three CEOs on navigating uncertainty, building resilience, and staying strategically focused.',
    tags: ['Leadership', 'CEO Insights', 'Webinar'],
    downloadLabel: 'Watch Recording',
  },
  {
    type: 'Whitepaper',
    icon: '📄',
    title: 'The ROI of Leadership Coaching: A Framework for CHROs',
    description:
      'A practical guide to measuring and presenting the return on investment of coaching programmes to your board and executive committee.',
    tags: ['HR', 'ROI', 'Measurement'],
    downloadLabel: 'Download PDF',
  },
  {
    type: 'Case Study',
    icon: '📁',
    title: 'How a Lagos HealthTech Company Built a Leadership Pipeline in 18 Months',
    description:
      "The story of how one fast-growing health technology firm used Zanga's Emerging Leaders Programme to build bench strength.",
    tags: ['Healthcare', 'Emerging Leaders', 'Case Study'],
    downloadLabel: 'Read Case Study',
  },
  {
    type: 'Toolkit',
    icon: '🛠️',
    title: 'Succession Planning Playbook for African Organisations',
    description:
      'Step-by-step guidance for building a succession pipeline that works within African talent markets and cultural contexts.',
    tags: ['Succession', 'HR Strategy', 'Toolkit'],
    downloadLabel: 'Download Playbook',
  },
  {
    type: 'Webinar',
    icon: '🎥',
    title: 'Psychological Safety in African Workplaces: A Practical Guide',
    description:
      'A recorded session exploring how to create psychologically safe environments that respect African cultural norms while improving performance.',
    tags: ['Culture', 'Performance', 'Webinar'],
    downloadLabel: 'Watch Recording',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            Tools and Knowledge for African Leaders
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Download whitepapers, case studies, toolkits, and more — all free for leaders and HR
            professionals committed to building stronger organisations.
          </p>
        </div>
      </section>

      {/* Resource Type Filter */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4">
            {resourceTypes.map((rt, i) => (
              <button
                key={rt.label}
                className={`whitespace-nowrap text-sm font-semibold pb-1 border-b-2 font-Montserrat transition-colors flex items-center gap-1.5 ${
                  i === 0
                    ? 'border-highlight text-highlight'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {rt.label}
                <span className="text-xs font-normal bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">
                  {rt.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {resources.map((r) => (
              <div
                key={r.title}
                className="flex gap-5 p-7 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl shrink-0">{r.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-highlight text-xs font-semibold uppercase tracking-wider font-Montserrat">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold mb-2 font-MonaSans leading-snug">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 font-Montserrat">{r.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {r.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full font-Montserrat"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-highlight text-sm font-semibold hover:underline font-Montserrat">
                    {r.downloadLabel} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-semibold text-sm hover:border-gray-900 transition-colors font-Montserrat">
              Load More Resources
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Can't find what you need?
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4 font-MonaSans">
            Talk to a Zanga Advisor
          </h2>
          <p className="text-gray-400 mb-8 font-Montserrat">
            Our team can point you to the right resources or create bespoke content for your organisation's specific needs.
          </p>
          <Link
            href="/contact"
            className="bg-highlight text-white px-8 py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
