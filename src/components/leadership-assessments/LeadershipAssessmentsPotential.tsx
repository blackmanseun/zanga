import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const canSupport: string[] = [
    'High-potential identification',
    'Succession planning',
    'Leadership pipeline development',
    'Talent reviews',
    'Emerging-leader programmes',
    'Internal promotion decisions',
]

export default function LeadershipAssessmentsPotential() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Leadership assessments for different decisions
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Leadership potential <br className="hidden md:block"/> assessment
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 mt-4">
                    <div className="flex flex-col h-full">
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-4">
                            Identify who can grow into greater responsibility.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Current performance and future potential are not the same thing.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The Leadership Potential Assessment helps organisations look beyond how someone
                            performs today to understand indicators of future leadership capability and
                            readiness for more complex roles.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            This helps organisations differentiate between individuals who are performing
                            well in their current roles and those who may have the capacity to succeed at a
                            higher level.
                        </p>
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-8">
                            Best suited for: Organisations making succession, high-potential and future-readiness decisions.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-terracotta/90 transition-colors font-Montserrat mt-auto self-start"
                        >
                            Explore Leadership Potential Assessment
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div
                        className="relative overflow-hidden mt-8 lg:mt-0 rounded-2xl p-8 lg:p-10 h-full min-h-[420px]"
                    >
                        <Image
                            src="/images/26.jpg"
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
