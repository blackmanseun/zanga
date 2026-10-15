import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

const questions: string[] = [
    'What are stakeholders most concerned about?',
    'Which issues keep recurring?',
    'Where are concerns concentrated?',
    'Which matters are still open or overdue?',
    'Are sensitive cases being escalated as intended?',
    'How quickly are different types of issues being addressed?',
    'Are particular locations, teams or stakeholder groups showing recurring patterns?',
    'What should leadership pay attention to next?',
]

type Audience = {
    title: string
    text: string
}

const audiences: Audience[] = [
    {
        title: 'For ESG and Sustainability Leads',
        text: 'Bring greater structure to stakeholder feedback and create a clearer record of issues, response and resolution.',
    },
    {
        title: 'For Community and Stakeholder Relations Teams',
        text: 'Track concerns across stakeholder groups and identify where attention is needed most.',
    },
    {
        title: 'For HR and People Leaders',
        text: 'Provide employees and contractors with a clearer route for confidential feedback and workplace concerns.',
    },
    {
        title: 'For Programme & Operations Teams',
        text: 'Understand recurring stakeholder issues that may be affecting delivery.',
    },
    {
        title: 'For Executives and Boards',
        text: 'See emerging stakeholder themes and unresolved issues without reviewing every case individually.',
    },
]

export default function VoiceDashboardQuestions() {
    return (
        <section className="md:py-28 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <Reveal>
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            From Case Logs to Better Decisions
                        </span>
                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-tight">
                            Your reports should answer more than &ldquo;How many complaints did we get?&rdquo;
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                            <strong>Voice by Zanga</strong> is designed to help organisations answer practical
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
