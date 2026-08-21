import React from 'react'
import Reveal from '@/components/ui/Reveal'

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

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-MonaSans">
            How It Works
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delayMs={i * 110}>
              <div className="relative">
                <div className="text-5xl font-bold text-highlight/20 font-MonaSans mb-3">{s.step}</div>
                <h3 className="text-base font-semibold mb-2 font-MonaSans">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-Montserrat">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
