import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

const questions: string[] = [
    'Which candidates align most closely with what this role requires?',
    'What strengths does each person bring?',
    'Where might a candidate need additional support?',
    'What should we explore further during interview?',
    'Are candidates being compared on a consistent basis?',
    'How might this person work with the team they are joining?',
    'What should the manager know when onboarding the successful candidate?',
]

type Audience = {
    title: string
    text: string
}

const audiences: Audience[] = [
    {
        title: 'For HR & Talent Leaders',
        text: 'Create a more consistent assessment approach and give hiring teams stronger evidence for selection decisions.',
    },
    {
        title: 'For Hiring Managers',
        text: 'Understand the candidate more clearly and know which areas are worth exploring further at interview.',
    },
    {
        title: 'For Executives',
        text: 'Add deeper insight to senior and business-critical appointments.',
    },
    {
        title: 'For Recruiters & Search Firms',
        text: 'Bring structured assessment into candidate evaluation and strengthen the evidence behind client recommendations.',
    },
]

export default function FitDashboardQuestions() {
    return (
        <section
            id="hiring-analytics" className="scroll-mt-24 md:py-28 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <Reveal>
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            From Assessment Insights to Better Decisions
                        </span>
                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-tight">
                            Your hiring report should answer more than &ldquo;Who scored highest?&rdquo;
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                            <strong>Fit</strong> is designed to help hiring teams answer practical questions such
                            as:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {questions.map((q) => (
                                <li key={q} className="flex items-start gap-3 text-gray-600 font-Montserrat leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0 mt-2.5" aria-hidden="true"/>
                                    {q}
                                </li>
                            ))}
                        </ul>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Product Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                    </Reveal>

                    <Reveal delayMs={100} className="lg:mt-40">
                        <div>
                            {audiences.map((audience, i) => (
                                <div key={audience.title} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="shrink-0 w-2.5 h-2.5 rounded-full bg-terracotta mt-2" aria-hidden="true"/>
                                        {i < audiences.length - 1 && (
                                            <span className="flex-1 w-px bg-terracotta/20 my-1" aria-hidden="true"/>
                                        )}
                                    </div>
                                    <div className={i < audiences.length - 1 ? 'pb-8' : ''}>
                                        <h4 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                            {audience.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">
                                            {audience.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
