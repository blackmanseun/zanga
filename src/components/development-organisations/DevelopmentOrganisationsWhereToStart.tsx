import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

export default function DevelopmentOrganisationsWhereToStart() {
    return (
        <section className="bg-white md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="grid gap-8 lg:grid-cols-[3.5fr_2fr] items-end">
                        <div>
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Get Started
                            </span>
                            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 font-MonaSans text-gray-700">
                                Where should you start?
                            </h2>
                            <p className="md:max-w-xl mt-4 text-gray-500 text-[16px] font-Montserrat leading-relaxed lg:pb-1">
                                Every organisation&apos;s priorities are different. Choose the path that
                                matches what you are trying to solve right now.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr]">
                    <Reveal delayMs={90}>
                        <Link
                            href="/products/voice-by-zanga"
                            className="group relative flex h-[420px] sm:h-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/136"
                                alt="Community members sharing feedback with a programme team"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/20 to-transparent"/>
                            <div className="absolute inset-x-0 bottom-0 md:p-8 p-5">
                                <p className="font-MonaSans text-2xl font-bold text-white">
                                    Need a clearer stakeholder or grievance channel?
                                </p>
                                <p className="mt-2 max-w-md text-sm font-Montserrat leading-relaxed text-white/75">
                                    Start with Voice by Zanga to give beneficiaries, communities and partners a
                                    more structured way to provide feedback and raise concerns.
                                </p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                    Explore Voice by Zanga
                                    <FiArrowRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    <div className="flex flex-col gap-6">
                        <Reveal delayMs={150}>
                            <Link
                                href="/products/fit-by-zanga"
                                className="group relative flex min-h-[200px] h-full overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/126"
                                    alt="Country office leaders in discussion"
                                    fill
                                    sizes="(min-width: 1024px) 25vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-800/70"/>
                                <div className="absolute inset-x-0 bottom-0 md:p-6 p-5">
                                    <p className="font-MonaSans text-lg font-bold text-white">
                                        Building leadership capability across country offices or partners?
                                    </p>
                                    <p className="mt-1.5 text-sm font-Montserrat leading-relaxed text-white/80">
                                        Start with the Leadership Competency Assessment to understand strengths and
                                        development priorities.
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                        Fit by Zanga
                                        <FiArrowRight
                                            size={16}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>

                        <Reveal delayMs={180}>
                            <Link
                                href="/products/pulse-by-zanga"
                                className="group relative flex min-h-[200px] h-full overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/143"
                                    alt="Programme team members in conversation"
                                    fill
                                    sizes="(min-width: 1024px) 25vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-800/70"/>
                                <div className="absolute inset-x-0 bottom-0 md:p-6 p-5">
                                    <p className="font-MonaSans text-lg font-bold text-white">
                                        Concerned about morale or retention across programme teams?
                                    </p>
                                    <p className="mt-1.5 text-sm font-Montserrat leading-relaxed text-white/80">
                                        Start with Pulse by Zanga to understand workforce sentiment and
                                        employee experience.
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                        Explore Pulse by Zanga
                                        <FiArrowRight
                                            size={16}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>

                        <Reveal delayMs={210}>
                            <div className="relative flex-1 overflow-hidden rounded-2xl bg-terracotta/10 md:px-7 px-5 py-6">
                                <div
                                    className="pointer-events-none absolute -right-16 -bottom-20"
                                    aria-hidden="true"
                                >
                                    <div className="w-[16rem] h-[16rem] rounded-[50%] border-2 border-terracotta/20"/>
                                    <div className="absolute w-[9rem] h-[9rem] right-10 bottom-6 rounded-[50%] border-2 border-terracotta/20"/>
                                </div>
                                <p className="relative font-MonaSans text-lg font-bold text-gray-700">
                                    Not sure where to begin?
                                </p>
                                <p className="relative mt-2 text-sm font-Montserrat leading-relaxed text-gray-500">
                                    Tell us what your organisation or programme is trying to understand, and we
                                    will help identify the most appropriate <strong>Zanga</strong> solution.
                                </p>
                                <OpenModalButton
                                    modal="book-a-demo"
                                    className="relative mt-4 inline-flex items-center justify-center gap-2 bg-terracotta text-white px-6 py-3 rounded-md font-semibold text-sm font-Montserrat hover:bg-terracotta/90 transition-colors"
                                >
                                    Book a Demo
                                    <FiArrowRight size={16} aria-hidden="true"/>
                                </OpenModalButton>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
