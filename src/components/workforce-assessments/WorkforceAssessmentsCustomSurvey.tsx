import React from 'react'
import Image from 'next/image'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const canSupport: string[] = [
    'Organisation-specific workforce research',
    'Targeted employee feedback',
    'Change and transformation programmes',
    'Workforce baselining',
    'Follow-up measurement',
    'Sector or programme-specific questions',
]

export default function WorkforceAssessmentsCustomSurvey() {
    return (
        <section
            id="workforce-survey"
            className="scroll-mt-24 md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Workforce assessments for different questions
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Custom workforce <br className="hidden md:block"/> survey
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 mt-4">
                    <div className="flex flex-col h-full">
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-4">
                            Ask the questions that matter to your organisation.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Not every workforce question fits a standard survey.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Zanga can design workforce surveys around a specific organisational priority,
                            workforce population or decision.
                        </p>
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-8">
                            Best suited for: organisations with a defined workforce question that requires a
                            tailored approach.
                        </p>

                        {/* Greyed out until this assessment has its own page. */}
                        <span
                            aria-disabled="true"
                            title="Coming soon"
                            className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-md font-semibold text-sm font-Montserrat self-start opacity-50 cursor-not-allowed"
                        >
                            Explore the Custom Workforce Survey
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </span>
                    </div>

                    <div
                        className="relative overflow-hidden mt-8 lg:mt-0 rounded-2xl p-8 lg:p-10 h-full"
                    >
                        <Image
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/126"
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 550px, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-800/65"/>

                        <div className="relative">
                            <h3 className="text-xl font-bold text-white font-MonaSans mb-6">
                                Custom surveys can support
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
