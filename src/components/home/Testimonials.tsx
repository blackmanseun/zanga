import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

type Testimonial = {
  title: string
  quote: string
  attribution: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    title: 'Building an Emerging Leaders Bench for a Pan-African Bank',
    quote:
      "The training emphasised the importance of emotional intelligence for leaders. Being self-aware, understanding one's personality type, and leveraging it effectively to collaborate with individuals with different personalities is crucial.",
    attribution: 'Acting Head of Human Resources, Ecobank Zambia',
    initials: 'EZ',
  },
  {
    title: 'Turning Technical Managers into Confident People Leaders',
    quote:
      "I entered the programme with low expectations — it seemed like just another box to tick. But afterwards, it felt like the mental chains holding me had loosened.",
    attribution: 'Participant, Airtel Zambia Leadership Academy',
    initials: 'AZ',
  },
  {
    title: 'Answering the Succession Question with Data, Not Instinct',
    quote: 'The succession readiness HR analytic report was spot on. This was a major deliverable for us.',
    attribution: 'Kansanshi HR Team',
    initials: 'KH',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[url('/images/footer_bg.webp')] bg-contain py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
            Testimonials and Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.title}
              className="relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <span
                className="absolute top-3 right-5 text-6xl font-serif text-olive/15 select-none leading-none"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <h3 className="text-base font-bold text-gray-900 font-MonaSans mb-3 pr-8">{testimonial.title}</h3>
              <p className="text-sm text-gray-600 font-Montserrat leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-olive/10 text-olive flex items-center justify-center font-semibold font-MonaSans text-sm shrink-0">
                  {testimonial.initials}
                </span>
                <p className="text-sm font-semibold text-gray-900 font-Montserrat leading-snug">
                  {testimonial.attribution}
                </p>
              </div>
              <Link
                href="/resources"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta font-Montserrat hover:underline"
              >
                Read the Full Case Study
                <FiArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
