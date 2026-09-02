import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiBarChart2 } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

export default function PulseOrganisationStages() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-14">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Pulse by Zanga
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl">
                        Built for organisations at different stages
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Reveal className="h-full">
                        <div className="h-full rounded-3xl md:p-8 px-4 py-6 sm:p-10 border border-slate-200 bg-gray-50">
                            <h3 className="text-xl font-bold text-gray-900 font-MonaSans mb-3">
                                Growing Organisations
                            </h3>
                            <p className="text-gray-600 text-[15px] font-Montserrat leading-relaxed mb-6">
                                Build a clearer understanding of culture and employee experience before informal
                                ways of working become difficult to manage.
                            </p>
                            <img
                                src="/images/8.jpg"
                                alt=""
                                className="w-full h-48 sm:h-56 object-cover rounded-2xl"
                            />
                        </div>
                    </Reveal>

                    <Reveal className="h-full">
                        <div className="h-full rounded-3xl md:p-8 px-4 py-6 sm:p-10 border border-slate-200 bg-green-50/30">
                            <h3 className="text-xl font-bold text-gray-900 font-MonaSans mb-3">
                                Mid-Sized Organisations
                            </h3>
                            <p className="text-gray-600 text-[15px] font-Montserrat leading-relaxed mb-6">
                                Track engagement across teams, strengthen management capability and identify
                                emerging retention or culture risks.
                            </p>
                            <div className="md:grid grid-cols-4 gap-2">
                                <img
                                    src="/images/26.jpg"
                                    alt=""
                                    className="hidden md:block w-full h-48 sm:h-56 object-cover rounded-2xl"
                                />
                               <div className="col-span-2">
                                   <img
                                       src="/images/29.jpg"
                                       alt=""
                                       className="w-full h-48 sm:h-56 object-cover rounded-2xl"
                                   />
                               </div>
                                <img
                                    src="/images/headshot/6.jpg"
                                    alt=""
                                    className="hidden md:block w-full h-48 sm:h-56 mt-auto object-cover object-center rounded-2xl"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delayMs={100} className="mt-6">
                    <div className="rounded-3xl border border-white/10 bg-[#282A30] overflow-hidden grid md:grid-cols-[1.2fr_1fr]">
                        <div className="md:p-8 px-4 py-6 sm:p-10 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-white font-MonaSans mb-3">
                                Enterprises
                            </h3>
                            <p className="text-white/70 text-[15px] font-Montserrat leading-relaxed max-w-md">
                                Compare experiences across business units, locations and employee groups
                                while giving executives and boards a consolidated view of workforce sentiment.
                            </p>
                        </div>

                        <div className="relative min-h-[12rem] md:min-h-full p-2">
                            <div className="absolute inset-0 w-full h-full p-2 rounded-3xl">
                            <img
                                src="/images/30.jpg"
                                alt="Executives reviewing a consolidated workforce report"
                                className="h-full rounded-3xl w-full object-cover border-2 border-white/50"
                            />
                            </div>
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(to top, rgba(40,42,48,0.75) 0%, rgba(40,42,48,0.05) 45%, transparent 70%)',
                                }}
                            />
                            <span className="absolute top-8 left-8 w-11 h-11 rounded-full bg-olive text-white flex items-center justify-center shadow-lg">
                                <FiBarChart2 size={18} aria-hidden="true"/>
                            </span>
                        </div>
                    </div>
                </Reveal>

                <Reveal delayMs={150} className="mt-10">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Talk to Zanga About Your Organisation
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
