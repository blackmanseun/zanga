import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Solution = {
  category: string
  headline: string
  body: string[]
  cta: string
}

const solutions: Solution[] = [
  {
    category: 'Leadership Assessments',
    headline: 'Make Better Leadership Decisions with Confidence',
    body: [
      'Identify leadership strengths, capability gaps, and future potential using culturally intelligent assessments designed for high-context workplaces.',
      "Whether you're developing emerging leaders or evaluating senior executives, Zanga provides the evidence you need to make better hiring, promotion, and succession decisions.",
    ],
    cta: 'Explore Leadership Assessments',
  },
  {
    category: 'Psychometric Testing',
    headline: 'Understand the People Behind the Performance',
    body: [
      'Great leadership begins with self-awareness. Our science-backed psychometric assessments reveal how individuals think, communicate, make decisions, and respond under pressure.',
        'Organisations use these insights to strengthen teams, improve collaboration, and place people where they perform best.'
    ],
    cta: 'Explore Psychometric Assessments',
  },
  {
    category: 'Workforce Analytics and Reporting',
    headline: 'Turn People Data into Better Business Decisions',
    body: [
      'Assessment data only becomes valuable when it drives action. Zanga transforms workforce data into intuitive dashboards and executive reports that help you identify high-potential talent, monitor leadership readiness, manage succession risk, and prioritise development across your organisation.',
    ],
    cta: 'Explore Workplace Analytics',
  },
  {
    category: 'Employee Engagement Surveys',
    headline: 'Understand What Drives Engagement and Retention',
    body: [
      'Employee engagement is about more than satisfaction scores. Our culturally grounded engagement surveys uncover what influences motivation, performance, trust, and retention within your organisation, providing practical recommendations that leaders can act on immediately.',
    ],
    cta: 'Explore Employee Engagement Surveys',
  },
  {
    category: 'Leadership Development',
    headline: "Leadership Capability Doesn't Happen by Accident",
    body: [
      'Our coaching, management development programmes, and leadership learning journeys are tailored using assessment insights, ensuring every development intervention addresses real capability gaps and delivers measurable business impact.',
    ],
    cta: 'Explore Leadership Development',
  },
  {
    category: 'Enterprise Solutions',
    headline: 'One Integrated Platform. End-to-End Leadership Intelligence.',
    body: [
      'For organisations committed to building high-performing workforces, Zanga brings together leadership assessments, psychometric testing, workforce analytics, employee engagement, coaching, and development within one integrated platform.',
        'Flexible annual partnerships provide ongoing insights, dedicated support, and scalable solutions for enterprise organisations.'
    ],
    cta: 'Explore Enterprise Solutions',
  },
]

export default function SolutionCards() {
  return (
    <section className="bg-[url('/images/footer_bg.webp')] bg-contain py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-[80%] mx-auto">
        <div className="md:text-center mb-16">
          <span className="text-olive text-md uppercase tracking-widest font-Montserrat font-semibold">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-[3rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
            Everything You Need to Build Better Leaders
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {solutions.map((solution, i) => {
              const isLeft = i % 2 === 0
              const card = (
                <Reveal x={isLeft ? -40 : 40} y={0} delayMs={80}>
                  <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-[24px] font-bold text-gray-7W00 font-MonaSans mb-1">{solution.category}</h3>
                    <p className="text-md font-semibold text-gray-800 font-Montserrat mb-2">{solution.headline}</p>
                    <div className="space-y-3 mb-4">
                      {solution.body.map((paragraph, idx) => (
                        <p key={idx} className="text-md text-gray-600 leading-relaxed font-Montserrat">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-md font-semibold text-terracotta font-Montserrat hover:underline"
                    >
                      {solution.cta}
                      <FiArrowRight size={14} className="shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              )

              return (
                <div
                  key={solution.category}
                  className="flex flex-col md:grid md:grid-cols-[1fr_56px_1fr] gap-4 md:gap-6"
                >
                  <div className="order-2 md:order-none md:col-start-1 md:self-center">{isLeft && card}</div>
                  <div className="order-1 md:order-none md:col-start-2 hidden md:flex flex-col md:items-center md:h-full">
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
