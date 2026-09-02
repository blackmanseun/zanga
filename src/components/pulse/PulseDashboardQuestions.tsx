import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

const questions: string[] = [
    'Where is engagement strongest and weakest?',
    'What is driving employee sentiment?',
    'Which teams are having significantly different experiences?',
    'Where may retention concerns be emerging?',
    'Which aspects of culture are employees experiencing consistently?',
    'What should leaders pay attention to first?',
    'Are actions taken since the previous survey making a difference?',
]

type Audience = {
    title: string
    text: string
    image?: string
}

const audiences: Audience[] = [
    {
        title: 'For HR Leaders',
        text: 'Move from administering surveys to providing workforce intelligence. Pulse gives HR teams a structured evidence base to support leadership conversations, workforce planning and targeted people interventions.',
    },
    {
        title: 'For Executives',
        text: 'See the people factors affecting organisational performance without interpreting hundreds of individual survey responses.',
        image: '/images/31.jpg',
    },
    {
        title: 'For Managers',
        text: 'Understand what employees are experiencing within your team and where your leadership or management approach may need attention.',
    },
    {
        title: 'For Boards',
        text: 'Access a higher-level view of workforce culture, leadership and people risks that may require oversight.',
    },
]

export default function PulseDashboardQuestions() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <Reveal>
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            From Survey Results to Better Decisions
                        </span>
                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-tight">
                            Your dashboard should answer more than &ldquo;What was our score?&rdquo;
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                            Pulse is designed to help leadership teams answer practical questions such as:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {questions.map((q) => (
                                <li key={q} className="flex items-start gap-3 text-gray-600 font-Montserrat leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0 mt-2.5" aria-hidden="true"/>
                                    {q}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Product Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
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
                                        <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                            {audience.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">
                                            {audience.text}
                                        </p>
                                        {audience.image && (
                                            <img
                                                src={audience.image}
                                                alt=""
                                                className="w-full h-44 object-cover object-[25%_20%] rounded-2xl mt-4"
                                            />
                                        )}
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
