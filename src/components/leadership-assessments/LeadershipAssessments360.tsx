import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const canSupport: string[] = [
    'Senior leadership development',
    'Executive coaching',
    'Leadership-team development',
    'Promotion and succession conversations',
    'Individual development planning',
    'Behavioural change',
]

export default function LeadershipAssessments360() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Leadership assessments for different decisions
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        360&deg; feedback leadership <br className="hidden md:block"/> assessment
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-4">
                            See leadership from different perspectives.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Leadership is not only about how individuals see themselves. It is also about
                            how their behaviour is experienced by the people around them.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The 360&deg; Feedback Leadership Assessment combines a leader&apos;s
                            self-assessment with feedback from relevant colleagues, including managers,
                            peers and direct reports.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            This allows leaders and organisations to see where self-perception aligns with
                            the experience of others, and where important gaps may exist.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The output provides a more rounded picture of leadership effectiveness and
                            helps focus development conversations on the areas that matter most.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            <span className="font-semibold text-gray-700">Best suited for:</span>{' '}
                            Established and senior leaders who would benefit from multi-rater feedback.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore the 360&deg; Feedback Leadership Assessment
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div
                        className="relative overflow-hidden mt-8 lg:mt-0 rounded-2xl p-8 lg:p-10"
                    >
                        <Image
                            src="/images/44.jpg"
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 550px, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-800/65"/>

                        <div className="relative">
                            <h3 className="text-xl font-bold text-white font-MonaSans mb-6">
                                It can support
                            </h3>
                            <ul className="space-y-4">
                                {canSupport.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-gray-200 font-Montserrat leading-relaxed"
                                    >
                                        <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={18} aria-hidden="true"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
