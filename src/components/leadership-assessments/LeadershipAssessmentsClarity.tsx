import React from 'react'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

function Panel({
    src,
    alt,
    className = '',
    objectPosition = '[object-position:50%_50%]',
}: {
    src: string
    alt: string
    className?: string
    objectPosition?: string
}) {
    return (
        <div className={`relative overflow-hidden bg-gray-100 border border-gray-200 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className={`object-cover ${objectPosition}`}
            />
        </div>
    )
}

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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <Panel
                                    src="/images/5.jpg"
                                    alt="A leader reviewing work on a laptop"
                                    className="md:h-[500px] h-56 rounded-2xl rounded-br-none"
                                    objectPosition="[object-position:50%_20%]"
                                />
                                <Panel
                                    src="/images/49.jpg"
                                    alt="Two colleagues in a feedback conversation"
                                    className="md:h-44 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                                <Panel
                                    src="/images/47.jpg"
                                    alt="A leader focused on his laptop at a desk"
                                    className="md:h-[400px] h-36 rounded-2xl rounded-bl-none"
                                    objectPosition="[object-position:50%_25%]"
                                />
                                <Panel
                                    src="/images/48.jpg"
                                    alt="A leader working at his desk"
                                    className="md:h-44 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                                    objectPosition="[object-position:50%_20%]"
                                />
                            </div>
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
