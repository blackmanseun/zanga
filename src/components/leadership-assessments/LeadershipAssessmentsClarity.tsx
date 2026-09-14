import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import EnterprisesPolaroid from '@/components/enterprises/EnterprisesPolaroid'

const points: string[] = [
    'Current leadership capability',
    'Individual strengths and development gaps',
    'Future leadership potential',
    'Readiness for greater responsibility',
    'How leaders are experienced by colleagues',
    'Areas of alignment or disconnect between self-perception and external feedback',
    'Organisational leadership patterns across teams or cohorts',
]

export default function LeadershipAssessmentsClarity() {
    return (
        <section
            className="bg-white relative overflow-hidden pb-20 md:py-28 px-4 sm:px-6 lg:px-8"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] mx-auto md:block mt-16">
                            <EnterprisesPolaroid
                                imgClassName="md:h-[250px] h-[200px]"
                                src="/images/headshot/2.jpg"
                                className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[200px] h-[180px]"
                                src="/images/headshot/6.jpg"
                                className="w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[220px] h-[180px]"
                                src="/images/headshot/8.jpg"
                                className="w-[60%] top-[46%] md:left-[-2%] left-2 rotate-[-10deg] z-30"
                            />
                            <span
                                className="animate-pulse absolute right-2 bottom-0 w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/20"
                                aria-hidden="true"
                            />
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="md:max-w-lg xl:max-w-xl">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Leadership Clarity
                            </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                Understand leadership <br className="hidden md:block"/>more clearly
                            </h2>

                            <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                                Leadership decisions are often made using a combination of performance
                                history, manager judgement and instinct.
                            </p>

                            <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                                Those inputs matter, but they do not always reveal the full picture.
                            </p>

                            <p className="text-gray-700 font-semibold font-Montserrat mb-4">
                                <strong>Zanga&apos;s</strong> leadership assessments give organisations a more structured way to understand:
                            </p>

                            <ul className="space-y-3 mb-6">
                                {points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed"
                                    >
                                        <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-500 font-Montserrat leading-relaxed">
                                The result is a clearer evidence base for leadership development, succession,
                                promotion and talent decisions.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
