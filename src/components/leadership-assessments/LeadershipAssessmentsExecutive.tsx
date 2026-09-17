import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const canSupport: string[] = [
    'Executive recruitment',
    'Senior leadership appointments',
    'Executive development',
    'CEO and C-suite succession',
    'Board and leadership pipeline decisions',
    'Executive coaching',
]

export default function LeadershipAssessmentsExecutive() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Leadership assessments for different decisions
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Executive leadership <br className="hidden md:block"/> assessment
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 mt-4">
                    <div className="flex flex-col h-full">
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-4">
                            Add deeper insight to business-critical leadership decisions.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Executive appointments and development decisions carry significant
                            organisational consequences.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The Executive Leadership Assessment is designed to provide a deeper view of
                            leadership capability, behavioural strengths, development risks and readiness
                            for complex senior roles.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The assessment can be used alongside interviews, track record, references and
                            other evidence to provide a more complete picture of the individual.
                        </p>
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-8">
                            Best suited for: C-suite, executive and other business-critical leadership roles.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-terracotta/90 transition-colors font-Montserrat mt-auto self-start"
                        >
                            Request an Executive Leadership Assessment
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div
                        className="relative overflow-hidden mt-8 lg:mt-0 rounded-2xl p-8 lg:p-10 h-full min-h-[420px]"
                    >
                        <Image
                            src="/images/45.jpg"
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
