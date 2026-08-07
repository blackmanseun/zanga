'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  FiHelpCircle,
  FiGrid,
  FiBriefcase,
  FiAward,
  FiEdit3,
  FiClock,
  FiDollarSign,
  FiShield,
  FiFlag,
  FiLink,
  FiChevronDown,
  FiArrowRight,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

type FaqItem = {
  Icon: IconType
  question: string
  answer: React.ReactNode
}

const faqs: FaqItem[] = [
  {
    Icon: FiGrid,
    question: 'What solutions does Zanga offer?',
    answer:
      'Zanga provides an integrated suite of leadership intelligence solutions, including leadership assessments, psychometric assessments, employee engagement surveys, workforce analytics, leadership development programmes, stakeholder engagement solutions, and enterprise reporting. Together, these solutions help organisations identify, develop, and retain exceptional leaders while making better workforce decisions.',
  },
  {
    Icon: FiBriefcase,
    question: 'What types of organisations does Zanga work with?',
    answer:
      "Zanga works with organisations of all sizes, from growing SMEs to large enterprises, government institutions, development organisations, universities, and consulting firms. Our solutions are designed for organisations that want to make better decisions about hiring, leadership development, employee engagement, succession planning, and workforce performance across Africa and other high-context markets.",
  },
  {
    Icon: FiHelpCircle,
    question: "I've never used leadership assessments before. How do they work?",
    answer:
      "Getting started is straightforward. We help you identify the right assessment for your objectives, whether you're developing leaders, hiring new talent, or planning succession. Participants complete their assessments online, after which they receive detailed reports and practical recommendations. Your organisation also receives aggregated insights that highlight trends, strengths, capability gaps, and development priorities.",
  },
  {
    Icon: FiAward,
    question: 'What makes Zanga different from other HR tools or assessment providers?',
    answer:
      "Most leadership assessments are developed for Western workplace contexts. Zanga combines globally recognised methodologies with deep cultural intelligence to deliver assessments, analytics, and development solutions designed for how leadership actually works in Africa and other high-context markets. We don't just generate reports. We help organisations turn people data into better business decisions.",
  },
  {
    Icon: FiEdit3,
    question: 'Can we customise the platform to match our brand or our industry?',
    answer:
      'Yes. Zanga offers white-label and custom-branded solutions for organisations, consulting firms, coaches, and learning providers. We can tailor branding, competency frameworks, reports, and user experiences to reflect your organisation, industry, and leadership priorities.',
  },
  {
    Icon: FiClock,
    question: 'How long does it take to get started?',
    answer:
      'Implementation depends on the scope of your project. Smaller assessment programmes can often be launched within days, while enterprise-wide deployments involving multiple assessments, surveys, integrations, or customised reporting may take several weeks. Our team works with you to create an implementation plan that fits your timeline.',
  },
  {
    Icon: FiDollarSign,
    question: 'What does pricing look like?',
    answer: (
      <>
        We offer flexible pricing based on your organisation&apos;s size, objectives, and the solutions
        you require. Whether you&apos;re looking for a single assessment, a leadership development
        programme, or an enterprise-wide partnership, we&apos;ll recommend the most appropriate package
        for your needs.{' '}
        <Link href="#" className="text-olive underline hover:no-underline">
          Talk to us about pricing
        </Link>
        .
      </>
    ),
  },
  {
    Icon: FiShield,
    question: 'How does Zanga protect our data?',
    answer:
      'Data privacy and confidentiality are fundamental to our platform. Assessment data is securely managed, access is controlled, and reporting is designed to protect individual confidentiality while providing meaningful organisational insights. We work with organisations to ensure data is handled responsibly and in line with applicable privacy requirements.',
  },
  {
    Icon: FiFlag,
    question: 'Can we run a pilot before making a larger commitment?',
    answer:
      "Absolutely. Many organisations begin with a pilot programme to evaluate the platform, experience the quality of the insights, and demonstrate value before scaling across teams or the wider organisation. We'll work with you to design a pilot that aligns with your goals and provides meaningful results.",
  },
  {
    Icon: FiLink,
    question: 'Can Zanga integrate with our existing HR systems?',
    answer:
      'Yes. Zanga is designed to complement your existing HR processes and technology. Depending on your requirements, we can support integrations, data exports, and implementation approaches that fit within your existing HR ecosystem, making it easier to incorporate leadership insights into everyday decision-making.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#282A30]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-4 py-2 font-Montserrat mb-6">
                <FiHelpCircle size={14} className="text-olive" aria-hidden="true" />
                FAQs
              </span>
              <h2 className="max-w-2xl text-3xl md:text-[2.75rem] font-bold font-MonaSans leading-tight text-white">
                Questions Organisations Ask Before Getting Started
              </h2>
            </div>
            <div className="md:text-right shrink-0">
              <p className="text-white/60 font-Montserrat mb-2">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold font-Montserrat hover:text-olive transition-colors"
              >
                Talk to our team
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {[0, 1].map((colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {faqs.map((faq, i) => {
                  if (i % 2 !== colIndex) return null
                  const open = openIndex === i
                  return (
                    <div key={faq.question} className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                        className="w-full flex items-center gap-4 text-left"
                      >
                        <span className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-olive">
                          <faq.Icon size={16} aria-hidden="true" />
                        </span>
                        <span className="flex-1 text-sm font-semibold text-white font-Montserrat">
                          {faq.question}
                        </span>
                        <FiChevronDown
                          size={18}
                          aria-hidden="true"
                          className={`shrink-0 text-white/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-white/60 font-Montserrat leading-relaxed pl-[52px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
