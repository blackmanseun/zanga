import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

const questions: string[] = [
    'How does this founder make decisions under pressure?',
    'What leadership strengths are most relevant to the next stage of growth?',
    'Where may management depth be limited?',
    'How dependent is the business on one or two individuals?',
    'What should we explore further before committing capital?',
    'Where might founder or management support be most valuable after the deal?',
    'How does leadership capability compare across selected portfolio companies?',
    'Is leadership capability strengthening over time?',
]

type Audience = {
    title: string
    text: string
}

const audiences: Audience[] = [
    {
        title: 'For Investment Teams',
        text: 'Bring structured insight into how you understand founders and management teams, alongside the judgement you already bring.',
    },
    {
        title: 'For Credit and Lending Teams',
        text: 'Understand the leadership and management capability of a loan applicant before making a lending decision, especially where the owner and the business are closely linked.',
    },
    {
        title: 'For Portfolio and Value-Creation Teams',
        text: 'See where founders and leadership teams need support, and direct it with greater focus.',
    },
    {
        title: 'For Investment Committees and Boards',
        text: 'Get a clearer, more consistent view of management quality across deals and portfolio companies.',
    },
]

export default function DiligenceDashboardQuestions() {
    return (
        <section className="md:py-28 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <Reveal>
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            From Assessment Results to Better Capital Decisions
                        </span>
                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-tight">
                            Your report should answer more than &ldquo;Is this a good founder?&rdquo;
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                            <strong>Diligence</strong> is designed to help investment and credit teams answer practical
                            questions such as:
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
                            Talk to Zanga About Early Access
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
