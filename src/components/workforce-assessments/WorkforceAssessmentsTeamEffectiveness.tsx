import React from 'react'
import Image from 'next/image'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const bestFor: string[] = [
    'Team development',
    'Leadership-team effectiveness',
    'Team coaching',
    'Organisational change',
    'Post-restructure support',
    'Targeted team interventions',
]

export default function WorkforceAssessmentsTeamEffectiveness() {
    return (
        <section
            id="team-effectiveness"
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="scroll-mt-24 md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Workforce assessments for different questions
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Team effectiveness <br className="hidden md:block"/> assessment
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 mt-4">
                    <div className="flex flex-col h-full">
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-4">
                            Understand how teams work together.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            Individual capability does not automatically create an effective team.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            The Team Effectiveness Assessment helps organisations understand the patterns
                            shaping collaboration, communication and how people work together.
                        </p>
                        <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-8">
                            Best suited for: teams that want a clearer view of how they work together and
                            where focused intervention may help.
                        </p>

                        {/* Greyed out until this assessment has its own page. */}
                        <span
                            aria-disabled="true"
                            title="Coming soon"
                            className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-md font-semibold text-sm font-Montserrat self-start opacity-50 cursor-not-allowed"
                        >
                            Explore the Team Effectiveness Assessment
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </span>
                    </div>

                    <div
                        className="relative overflow-hidden mt-8 lg:mt-0 rounded-2xl p-8 lg:p-10 h-full"
                    >
                        <Image
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/302"
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 550px, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-800/65"/>

                        <div className="relative">
                            <h3 className="text-xl font-bold text-white font-MonaSans mb-6">
                                Best for
                            </h3>
                            <ul className="space-y-4">
                                {bestFor.map((item) => (
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
