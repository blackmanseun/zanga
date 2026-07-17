import React from 'react'
import Link from 'next/link'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

type Solution = {
  category: string
  headline: string
  bullets: string[]
  cta: string
}

const solutions: Solution[] = [
  {
    category: 'Leadership Assessments',
    headline: 'Make Better Leadership Decisions with Confidence',
    bullets: ['Strengths & Capability Gaps', 'Succession & Promotion Readiness', 'Emerging to Executive Evaluation'],
    cta: 'Explore Leadership Assessments',
  },
  {
    category: 'Psychometric Testing',
    headline: 'Understand the People Behind the Performance',
    bullets: ['Thinking & Communication Style', 'Decision-Making Under Pressure', 'Team Fit & Placement'],
    cta: 'Explore Psychometric Assessments',
  },
  {
    category: 'Workforce Analytics and Reporting',
    headline: 'Turn People Data into Better Business Decisions',
    bullets: ['High-Potential Talent Identification', 'Leadership Readiness Dashboards', 'Succession Risk Monitoring'],
    cta: 'Explore Workforce Analytics',
  },
  {
    category: 'Employee Engagement Surveys',
    headline: 'Understand What Drives Engagement and Retention',
    bullets: ['Motivation & Trust Drivers', 'Retention Insights', 'Practical Action Recommendations'],
    cta: 'Explore Employee Engagement Surveys',
  },
  {
    category: 'Leadership Development',
    headline: "Leadership Capability Doesn't Happen by Accident",
    bullets: ['Executive & Team Coaching', 'Management Development Programmes', 'Assessment-Led Learning Journeys'],
    cta: 'Explore Leadership Development',
  },
  {
    category: 'Enterprise Solutions',
    headline: 'One Integrated Platform. End-to-End Leadership Intelligence.',
    bullets: ['One Integrated Platform', 'Flexible Annual Partnerships', 'Dedicated Ongoing Support'],
    cta: 'Explore Enterprise Solutions',
  },
]

export default function SolutionCards() {
  return (
    <section className="bg-[url('/images/footer_bg.webp')] bg-contain py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold text-gray-900 mt-3 font-MonaSans max-w-2xl mx-auto">
            Everything You Need to Build Better Leaders
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col gap-10 md:gap-6">
            {solutions.map((solution, i) => {
              const isLeft = i % 2 === 0
              const card = (
                <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1">{solution.category}</h3>
                  <p className="text-sm text-gray-500 font-Montserrat mb-4">{solution.headline}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-gray-700 font-Montserrat">
                        <FiCheckCircle className="text-olive shrink-0" size={16} aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta font-Montserrat hover:underline"
                  >
                    {solution.cta}
                    <FiArrowRight size={14} className="shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              )

              return (
                <div
                  key={solution.category}
                  className="flex flex-col md:grid md:grid-cols-[1fr_56px_1fr] gap-4 md:gap-6"
                >
                  <div className="order-2 md:order-none md:col-start-1 md:self-center">{isLeft && card}</div>
                  <div className="order-1 md:order-none md:col-start-2 flex flex-col items-center md:h-full">
                    <div
                      className={`hidden md:block flex-1 w-px -mt-3 ${i > 0 ? 'bg-gray-200' : 'bg-transparent'}`}
                      aria-hidden="true"
                    />
                    <span className="w-14 h-14 shrink-0 rounded-full bg-white border-2 border-olive flex items-center justify-center text-olive font-bold font-MonaSans z-10">
                      {i + 1}
                    </span>
                    <div
                      className={`hidden md:block flex-1 w-px -mb-3 ${
                        i < solutions.length - 1 ? 'bg-gray-200' : 'bg-transparent'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="order-2 md:order-none md:col-start-3 md:self-center">{!isLeft && card}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
